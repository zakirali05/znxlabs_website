import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

interface EnquiryPayload {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  projectType?: string;
  category?: string;
  budget?: string;
  description?: string;
  _hp_company_url?: string; // Honeypot spam trap
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body: EnquiryPayload = await request.json();

    // 1. Spam Honeypot Check
    if (body._hp_company_url && body._hp_company_url.trim().length > 0) {
      // Caught bot filling out honeypot trap
      return NextResponse.json(
        { success: false, error: "Automated submission rejected." },
        { status: 400 }
      );
    }

    const errors: Record<string, string> = {};

    // 2. Validate Full Name
    if (!body.fullName || body.fullName.trim().length < 2) {
      errors.fullName = "Please enter your full name.";
    }

    // 3. Validate Work Email
    if (!body.email || !isValidEmail(body.email.trim())) {
      errors.email = "Please provide a valid work email address.";
    }

    // 4. Company Name (default to Direct Inquiry if omitted)
    const company = body.company?.trim() || "Direct Website Inquiry";

    // 5. Project Type / Category
    const selectedType = body.projectType || body.category || "General Enquiry";

    // 6. Description (default if omitted for rapid forms)
    const description =
      body.description && body.description.trim().length >= 5
        ? body.description.trim()
        : `Rapid consultation request regarding ${selectedType}. ${body.phone ? `Callback requested at ${body.phone}` : ""}`;

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Please review the highlighted fields.",
          details: errors,
        },
        { status: 422 }
      );
    }

    // Cleaned sanitized payload
    const timestamp = new Date().toISOString();
    const referenceId = `ZNX-${Date.now().toString(36).toUpperCase()}-${Math.random()
      .toString(36)
      .substring(2, 6)
      .toUpperCase()}`;

    const record = {
      referenceId,
      timestamp,
      fullName: body.fullName.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone?.trim() || "Not provided",
      company,
      projectType: selectedType,
      budget: body.budget?.trim() || "Not specified",
      description,
    };

    // 7. Persist to local JSON data store
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "enquiries.json");

    try {
      await fs.mkdir(dataDir, { recursive: true });
      let existing: unknown[] = [];
      try {
        const fileContent = await fs.readFile(filePath, "utf-8");
        existing = JSON.parse(fileContent);
      } catch {
        existing = [];
      }
      existing.push(record);
      await fs.writeFile(filePath, JSON.stringify(existing, null, 2), "utf-8");
    } catch (fsError) {
      console.error("[ZNX Labs] Local persistence note:", fsError);
    }

    // 8. Webhook Notification Integration (if configured in environment)
    const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event: "new_project_enquiry",
            ...record,
          }),
        });
      } catch (webhookError) {
        console.error("[ZNX Labs] Webhook dispatch error:", webhookError);
      }
    }

    console.log(`[ZNX Labs Enquiry Received] Ref: ${referenceId} from ${record.email} (${record.company})`);

    return NextResponse.json(
      {
        success: true,
        referenceId,
        message:
          "Thank you for contacting ZNX Labs. Your enquiry has been received, and an engineer will review your project requirements within 1 business day.",
        data: {
          referenceId,
          timestamp,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[ZNX Labs] Enquiry handler error:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "An unexpected server error occurred while processing your enquiry. Please try again or contact us directly at enquiries@znxlabs.com.",
      },
      { status: 500 }
    );
  }
}
