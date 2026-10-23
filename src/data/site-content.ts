export interface ServiceItem {
  slug: string;
  category: "ai-solutions" | "software-development" | "hire-engineers";
  title: string;
  tagline: string;
  heroDescription: string;
  businessProblem: string;
  ordinaryLanguageExplanation: string;
  useCases: { title: string; description: string }[];
  howItWorks: { step: string; title: string; description: string }[];
  integrationsAndCapabilities: string[];
  projectExample: {
    title: string;
    isDemo: boolean;
    description: string;
    outcome: string;
  };
  engagementProcess: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: { title: string; href: string }[];
}

export interface IndustryItem {
  slug: string;
  name: string;
  tagline: string;
  heroDescription: string;
  challenges: { title: string; description: string }[];
  solutionsProvided: { title: string; description: string }[];
  caseExample: { title: string; description: string; impact: string };
  faqs: { question: string; answer: string }[];
}

export interface LocationItem {
  slug: string;
  country: string;
  region: string;
  headline: string;
  description: string;
  collaborationModel: string;
  timezonesCovered: string;
  keyServices: { title: string; desc: string }[];
  marketFocus: string[];
  faqs: { question: string; answer: string }[];
}

/* =========================================================================
   AI SOLUTIONS SERVICES
   ========================================================================= */
export const AI_SOLUTIONS_DATA: ServiceItem[] = [
  {
    slug: "ai-agents",
    category: "ai-solutions",
    title: "AI Agents for Business Operations",
    tagline: "Autonomous software agents that execute multi-step workflows with human oversight.",
    heroDescription:
      "Deploy intelligent agents that navigate software tools, synthesize data, and execute operational tasks without requiring your team to do the heavy lifting.",
    businessProblem:
      "Employees spend up to 40% of their workday toggling between five to ten SaaS tools, copying data, verifying statuses, and conducting routine cross-checks that follow defined rules.",
    ordinaryLanguageExplanation:
      "An AI agent acts like an always-on digital analyst. You give it an objective—like 'check supplier delivery updates, compare with our inventory tracker, and alert the manager if anything is late'—and it carries out those actions systematically, stopping for human confirmation on high-impact steps.",
    useCases: [
      {
        title: "Vendor Invoice & Shipment Reconciliation",
        description: "Agent cross-references incoming packing slips against purchase orders and flags quantity discrepancies.",
      },
      {
        title: "Customer Support Resolution Agent",
        description: "Autonomously answers policy questions, queries order tracking databases, and prepares refund drafts for approval.",
      },
      {
        title: "Competitive Pricing & Market Intelligence",
        description: "Monitors distributor catalog price adjustments and generates weekly margin adjustment recommendations.",
      },
      {
        title: "Internal Compliance & Contract Review",
        description: "Scans client agreements for non-standard indemnity or payment clauses against your playbook.",
      },
    ],
    howItWorks: [
      { step: "01", title: "Trigger or Goal Receipt", description: "The agent receives an operational event (new email, webhook, or scheduled cron trigger)." },
      { step: "02", title: "Reasoning & Context Retrieval", description: "The agent checks corporate knowledge bases, databases, and permissions for the required context." },
      { step: "03", title: "Multi-Step Execution", description: "It executes tools in sequence (API calls, data parsing, database queries)." },
      { step: "04", title: "Human Review & Confirmation", description: "High-value transactions or sensitive modifications pause for 1-click human verification before finalized." },
    ],
    integrationsAndCapabilities: [
      "Custom tool orchestration",
      "LangGraph & LangChain architectures",
      "ERP / CRM API connectivity",
      "Strict role-based action sandboxing",
      "Auditable execution logs",
    ],
    projectExample: {
      title: "Automated Freight Dispatch & Status Agent",
      isDemo: true,
      description: "Working demonstration showcasing an agent reading incoming carrier confirmation emails, extracting container identifiers, updating internal dispatch software, and alerting the logistics team of port delays.",
      outcome: "Eliminates 3+ hours per dispatcher daily while preventing missed container demurrage fees.",
    },
    engagementProcess: [
      "Process mapping: Identify repetitive, rules-based tasks in your operations.",
      "Guardrail design: Define safe operating boundaries and required human approval checkpoints.",
      "Agent prototyping: Deploy within a sandboxed staging environment.",
      "Iterative deployment & monitoring: Full rollout with ongoing telemetry.",
    ],
    faqs: [
      {
        question: "Can an AI agent make mistakes or take unauthorized actions?",
        answer: "We design agents with strict deterministic boundaries. Actions that modify core data, execute financial transactions, or communicate with external clients can be configured to require one-click human review.",
      },
      {
        question: "How is an AI agent different from a standard Zapier or make.com automation?",
        answer: "Traditional automation breaks when input format changes or when unstructured text is involved. AI agents can reason through ambiguous PDFs, variable emails, and unexpected responses, deciding the correct pathway dynamically.",
      },
      {
        question: "What infrastructure do these agents run on?",
        answer: "We can deploy on your private cloud (AWS, Azure, GCP) or on sovereign dedicated servers to ensure your company data never leaves your security perimeter.",
      },
    ],
    relatedServices: [
      { title: "AI Workflow Automation", href: "/ai-solutions/ai-workflow-automation" },
      { title: "RAG Knowledge Assistants", href: "/ai-solutions/rag-knowledge-assistants" },
      { title: "Enterprise AI Applications", href: "/ai-solutions/enterprise-ai" },
    ],
  },
  {
    slug: "ai-workflow-automation",
    category: "ai-solutions",
    title: "AI Workflow Automation",
    tagline: "Connecting your business systems with intelligent document and data pipelines.",
    heroDescription:
      "Automate end-to-end operations by embedding machine learning and LLM intelligence into your existing business pipelines.",
    businessProblem:
      "Growing companies hit an operational ceiling where expanding transaction volume requires linearly adding more administrative staff to copy data across disconnected tools.",
    ordinaryLanguageExplanation:
      "We build resilient software bridges that listen for events (like a new client enquiry or supplier invoice), understand the content, update your core software, and notify the right team members automatically.",
    useCases: [
      { title: "Automated RFQ & Proposal Generation", description: "Extracts customer requirements and generates priced proposal drafts within minutes." },
      { title: "Employee & Client Onboarding Cadences", description: "Collects documents, verifies completeness, provisions system access, and triggers notifications." },
      { title: "Cross-System Inventory & Accounting Sync", description: "Keeps warehouse inventory, e-commerce storefronts, and accounting balances aligned automatically." },
    ],
    howItWorks: [
      { step: "01", title: "Business Event Trigger", description: "An event arrives via email, webhook, API, or database update." },
      { step: "02", title: "Intelligent Extraction", description: "AI parses unstructured documents, emails, or attachments into verified JSON." },
      { step: "03", title: "Business Logic & Rules", description: "System validates rules, margins, and operational conditions." },
      { step: "04", title: "Downstream Synchronization", description: "Target databases, CRMs, and ERPs are updated with zero manual input." },
    ],
    integrationsAndCapabilities: [
      "REST & GraphQL integrations",
      "Webhook event-driven pipelines",
      "Document OCR & unstructured parsing",
      "Salesforce, HubSpot, NetSuite, SAP connectors",
    ],
    projectExample: {
      title: "Commercial Quotation Automation Pipeline",
      isDemo: true,
      description: "Automated pipeline parsing multi-page customer bid spreadsheets, checking warehouse catalog margins, and generating complete quote proposals.",
      outcome: "Reduces quote turnaround from 48 hours to under 15 minutes.",
    },
    engagementProcess: [
      "Workflow discovery: Audit current friction points.",
      "Pipeline architecture: Define triggers, actions, and validation schemas.",
      "Build & Integration: Connect APIs and deploy failover safeguards.",
      "Verification & Rollout: Validate against historical operational logs.",
    ],
    faqs: [
      {
        question: "Does this replace our current CRM or ERP?",
        answer: "No. Our automation pipelines work alongside your existing software, connecting them together so your team spends less time copying data.",
      },
      {
        question: "What happens if a third-party API goes down?",
        answer: "All workflows include automatic retries, dead-letter queues, and fallback alerts so no data is ever lost during outages.",
      },
    ],
    relatedServices: [
      { title: "Document Processing", href: "/ai-solutions/document-processing" },
      { title: "AI Agents", href: "/ai-solutions/ai-agents" },
      { title: "API Integrations", href: "/software-development/api-integrations" },
    ],
  },
  {
    slug: "enterprise-ai",
    category: "ai-solutions",
    title: "Enterprise AI Solutions",
    tagline: "Private, compliant, and scalable AI infrastructure tailored to enterprise governance.",
    heroDescription:
      "Deploy custom AI models, agentic workflows, and predictive analytics securely within your enterprise cloud environment with full SOC2 and GDPR compliance.",
    businessProblem:
      "Enterprises cannot use consumer AI tools due to data privacy, intellectual property leaks, hallucination risks, and compliance regulations.",
    ordinaryLanguageExplanation:
      "We build custom, enterprise-grade AI platforms hosted entirely within your private infrastructure. Your data is never used to train public models, and every decision is traceable with enterprise audit logs.",
    useCases: [
      { title: "Private Knowledge Repositories", description: "Search millions of enterprise documents with citations and strict role-based access control." },
      { title: "Automated Regulatory Compliance", description: "Audit contracts and financial records against evolving jurisdictional standards." },
      { title: "Custom LLM Fine-Tuning", description: "Domain-specific models trained on your proprietary taxonomy and business vocabulary." },
    ],
    howItWorks: [
      { step: "01", title: "Security & Governance Assessment", description: "Map compliance constraints, data classifications, and network boundaries." },
      { step: "02", title: "VPC / Sovereign Deployment", description: "Establish dedicated cloud environments on AWS Bedrock, Azure OpenAI, or on-premise GPUs." },
      { step: "03", title: "Enterprise Identity Integration", description: "Bind authentication to Okta, Azure AD, or SSO with granular permissions." },
      { step: "04", title: "Production Hardening", description: "Continuous latency optimization, red-teaming, and model monitoring." },
    ],
    integrationsAndCapabilities: [
      "Azure OpenAI / AWS Bedrock VPC",
      "Private vector databases (Pinecone, pgvector, Qdrant)",
      "Role-Based Access Control (RBAC)",
      "SOC2, HIPAA, GDPR compliant patterns",
    ],
    projectExample: {
      title: "Private Enterprise Policy & Legal Intelligence Hub",
      isDemo: true,
      description: "Demonstration of an air-gapped knowledge assistant indexing 20,000+ corporate governance documents with strict department-level access filtering.",
      outcome: "Legal and compliance research time reduced by 70% while safeguarding proprietary data.",
    },
    engagementProcess: [
      "Architecture review: Review data governance and cloud tenancy requirements.",
      "Private deployment: Stand up dedicated LLM and vector infrastructure.",
      "Data ingestion: Clean and index historical enterprise repositories.",
      "Security audit & handoff: Complete penetration testing and operational training.",
    ],
    faqs: [
      {
        question: "Will our enterprise data be sent to OpenAI or third-party servers?",
        answer: "No. We deploy dedicated private instances where data is encrypted in transit and at rest, with contractual zero-data-retention guarantees.",
      },
      {
        question: "Can different teams have different document access levels?",
        answer: "Yes. Our systems inherit your corporate SSO and Active Directory permissions, ensuring employees only see information they are authorized to access.",
      },
    ],
    relatedServices: [
      { title: "RAG Knowledge Assistants", href: "/ai-solutions/rag-knowledge-assistants" },
      { title: "Dedicated Development Teams", href: "/hire-engineers/dedicated-development-teams" },
      { title: "Custom Software", href: "/software-development/custom-software" },
    ],
  },
  {
    slug: "rag-knowledge-assistants",
    category: "ai-solutions",
    title: "RAG Knowledge Assistants",
    tagline: "Grounded AI search and retrieval that answers questions with exact source citations.",
    heroDescription:
      "Transform sprawling internal wikis, PDFs, SOPs, and manuals into an intelligent assistant that provides verified, cited answers in seconds.",
    businessProblem:
      "Staff waste hours digging through disorganized shared folders, outdated SharePoint sites, and lengthy technical manuals to find authoritative answers.",
    ordinaryLanguageExplanation:
      "Retrieval-Augmented Generation (RAG) combines the conversational power of AI with your company's actual files. When an employee asks a question, the system searches only your verified documents, compiles the accurate answer, and links directly to the page number where the answer originated.",
    useCases: [
      { title: "Technical Field Manual Assistant", description: "Field engineers search equipment diagrams, error codes, and maintenance procedures via mobile." },
      { title: "HR & Company Policy Assistant", description: "Answers staff questions about benefits, leave policies, and travel allowances immediately." },
      { title: "Customer Success Knowledge Engine", description: "Enables support agents to resolve complex product questions with grounded, accurate citations." },
    ],
    howItWorks: [
      { step: "01", title: "Document Ingestion", description: "PDFs, Word docs, Notion pages, and databases are chunked, embedded, and indexed." },
      { step: "02", title: "Semantic Retrieval", description: "User query searches for semantic matches using high-dimensional vector search." },
      { step: "03", title: "Grounded Synthesis", description: "LLM synthesizes an answer strictly from the retrieved document excerpts." },
      { step: "04", title: "Direct Source Citation", description: "Every claim links back to the original source document and paragraph." },
    ],
    integrationsAndCapabilities: [
      "Hybrid search (BM25 lexical + dense vector embeddings)",
      "Re-ranking algorithms (Cohere / BGE)",
      "Automatic index refreshes on document updates",
      "Hallucination guardrails and confidence scores",
    ],
    projectExample: {
      title: "Industrial Machinery Maintenance Knowledge Engine",
      isDemo: true,
      description: "Interactive system demonstration allowing service technicians to query 5,000 pages of mechanical schematics and troubleshooting flowcharts.",
      outcome: "Decreased mean-time-to-repair (MTTR) by 35% during field service calls.",
    },
    engagementProcess: [
      "Corpus evaluation: Audit document formats and quality.",
      "Pipeline tuning: Optimize chunking, metadata tagging, and embedding models.",
      "User interface build: Clean conversational web or mobile interface.",
      "Verification testing: Measure precision, recall, and hallucination resistance.",
    ],
    faqs: [
      {
        question: "How do you prevent the AI from making things up (hallucinating)?",
        answer: "We configure the system to answer strictly using retrieved text. If the information does not exist in your approved documents, the assistant explicitly states that the answer was not found.",
      },
      {
        question: "Can it handle complex tables and technical diagrams?",
        answer: "Yes. We use multimodal vision models and structured table extraction to preserve tabular data accuracy.",
      },
    ],
    relatedServices: [
      { title: "AI Agents", href: "/ai-solutions/ai-agents" },
      { title: "Document Processing", href: "/ai-solutions/document-processing" },
      { title: "Enterprise AI", href: "/ai-solutions/enterprise-ai" },
    ],
  },
  {
    slug: "ai-chatbots",
    category: "ai-solutions",
    title: "Intelligent Business Chatbots",
    tagline: "High-accuracy conversational interfaces for customer support and lead qualification.",
    heroDescription:
      "Replace frustrating keyword bots with modern conversational AI that understands customer intent, answers complex queries, and integrates with your transactional database.",
    businessProblem:
      "Traditional chatbots irritate customers with rigid 'I didn't understand that' responses, while human support teams are bogged down handling identical tier-1 enquiries.",
    ordinaryLanguageExplanation:
      "Our AI chatbots have real product comprehension. They answer questions naturally, check order statuses through your API, qualify sales leads, and route complex requests to human agents with full context.",
    useCases: [
      { title: "24/7 E-commerce Customer Assistant", description: "Handles product recommendations, order tracking, and returns policies across all timezones." },
      { title: "B2B Lead Qualification & Booking", description: "Converses with website visitors, assesses budget/fit, and schedules meetings directly on sales reps' calendars." },
      { title: "SaaS In-App Support Assistant", description: "Helps users navigate software features, troubleshoot issues, and reduces churn." },
    ],
    howItWorks: [
      { step: "01", title: "Intent & Sentiment Analysis", description: "Analyzes user query tone, objective, and context." },
      { step: "02", title: "API & Knowledge Lookup", description: "Fetches live user account data or product information from your database." },
      { step: "03", title: "Polished Response Delivery", description: "Answers with brand-aligned, helpful conversational language." },
      { step: "04", title: "Seamless Escalation", description: "Passes high-intent leads or upset customers to live agents with full chat summary." },
    ],
    integrationsAndCapabilities: [
      "Zendesk, Intercom, Freshdesk, HubSpot integrations",
      "Omnichannel support (Web, WhatsApp, Slack, MS Teams)",
      "Sentiment-triggered human handoff",
      "Continuous conversation analytics dashboard",
    ],
    projectExample: {
      title: "Commercial Equipment Supplier Chat Assistant",
      isDemo: true,
      description: "Chatbot demonstration capable of answering technical specifications, checking warehouse stock levels, and capturing buyer contact information.",
      outcome: "Automates 60% of routine inbound enquiries while doubling conversion on after-hours leads.",
    },
    engagementProcess: [
      "Tone & playbook alignment: Define your brand voice and support boundaries.",
      "Database integration: Connect inventory, user accounts, and CRM endpoints.",
      "Test conversations: Run hundreds of edge-case scenarios.",
      "Deploy & train: Launch with live agent monitoring.",
    ],
    faqs: [
      {
        question: "What happens when a customer asks a question the bot doesn't know?",
        answer: "The bot gracefully acknowledges the limitation, asks for the user's preferred contact method, and alerts your human support team with the transcript.",
      },
      {
        question: "Can it speak multiple languages?",
        answer: "Yes, modern LLMs naturally support 50+ languages including English, Arabic, Spanish, French, German, and Hindi.",
      },
    ],
    relatedServices: [
      { title: "RAG Knowledge Assistants", href: "/ai-solutions/rag-knowledge-assistants" },
      { title: "AI Workflow Automation", href: "/ai-solutions/ai-workflow-automation" },
      { title: "Web Applications", href: "/software-development/web-applications" },
    ],
  },
  {
    slug: "document-processing",
    category: "ai-solutions",
    title: "Intelligent Document Processing (IDP)",
    tagline: "Turn complex PDFs, scanned forms, and messy invoices into clean structured data.",
    heroDescription:
      "Automate manual data entry by extracting, validating, and syncing information from commercial documents directly into your accounting software and ERP.",
    businessProblem:
      "Accounts payable, logistics, and legal teams spend hundreds of hours manually typing line items from vendor invoices, bill of ladings, and custom forms into computer screens.",
    ordinaryLanguageExplanation:
      "Our system reads documents like a human would. Whether an invoice is a clean digital PDF or a crooked mobile photo, the AI identifies totals, tax, line items, and addresses, validates the numbers mathematically, and sends the verified data to your system.",
    useCases: [
      { title: "Accounts Payable Invoice Ingestion", description: "Extracts PO numbers, line items, and totals; checks for duplicate bills automatically." },
      { title: "Logistics Waybill & BOL Processing", description: "Parses shipping manifests and container weights to accelerate customs clearance." },
      { title: "Medical & Insurance Claim Intake", description: "Transcribes intake forms, policy details, and diagnostic notes into compliant records." },
    ],
    howItWorks: [
      { step: "01", title: "Document Upload & OCR", description: "System ingests documents via email inbox, cloud storage folder, or web upload." },
      { step: "02", title: "Schema-Based Extraction", description: "AI extracts defined fields regardless of layout variations or formatting shifts." },
      { step: "03", title: "Mathematical Validation", description: "System calculates line item sums, tax consistency, and vendor matching." },
      { step: "04", title: "Approval & Sync", description: "Passes high-confidence records directly to accounting or flags anomalies for review." },
    ],
    integrationsAndCapabilities: [
      "QuickBooks, Xero, NetSuite, SAP integration",
      "Confidence score thresholding",
      "Human-in-the-loop review interface",
      "Multi-page document splitting and classification",
    ],
    projectExample: {
      title: "Automated AP Invoice Intake & GL Tagging Engine",
      isDemo: true,
      description: "Demonstration system processing 1,000+ invoices per month from 50 different vendors without requiring custom layout templates.",
      outcome: "Reduces invoice processing cost from $12/invoice to under $0.50/invoice.",
    },
    engagementProcess: [
      "Sample collection: Analyze 20–50 typical documents from your business.",
      "Schema definition: Specify required fields and validation rules.",
      "Pipeline integration: Connect your email inbox or upload folder.",
      "Production deployment: Enable human-review staging before automatic posting.",
    ],
    faqs: [
      {
        question: "Do we need to create templates for every new vendor?",
        answer: "No. Unlike legacy OCR tools, LLM-based document processing understands concepts like 'Total', 'Invoice Date', and 'Line Items' contextually across any visual layout.",
      },
      {
        question: "What happens if a document is blurry or unreadable?",
        answer: "The system assigns a low confidence score and routes the document to an exception queue for a staff member to review with the original file side-by-side.",
      },
    ],
    relatedServices: [
      { title: "AI Workflow Automation", href: "/ai-solutions/ai-workflow-automation" },
      { title: "CRM & ERP Systems", href: "/software-development/crm-erp-systems" },
      { title: "API Integrations", href: "/software-development/api-integrations" },
    ],
  },
  {
    slug: "ai-integrations",
    category: "ai-solutions",
    title: "AI API Integrations & Middleware",
    tagline: "Embed modern AI capabilities seamlessly into your existing software stack.",
    heroDescription:
      "Upgrade your legacy systems and SaaS applications with state-of-the-art AI features through secure, reliable API pipelines and custom middleware.",
    businessProblem:
      "Many companies have mature software systems that work well for basic operations but lack modern intelligent capabilities like semantic search, automated summaries, or predictive classification.",
    ordinaryLanguageExplanation:
      "You don't need to throw away your existing core software to benefit from AI. We build lightweight connectors that add intelligent features—like auto-tagging support tickets, predicting churn, or drafting customer emails—directly inside the software your team already uses.",
    useCases: [
      { title: "Legacy ERP AI Modernization", description: "Adds predictive stock alerts and smart forecasting to on-premise inventory systems." },
      { title: "Automated CRM Lead Scoring", description: "Analyzes client website activity and email sentiment to prioritize high-intent sales leads." },
      { title: "Content Moderation & Classification", description: "Screens user uploads, images, and messages for policy violations in real time." },
    ],
    howItWorks: [
      { step: "01", title: "API Audit & Schema Mapping", description: "Review existing endpoints, payloads, and latency tolerances." },
      { step: "02", title: "Middleware Construction", description: "Build scalable microservices for queuing, token caching, and error recovery." },
      { step: "03", title: "Model Tuning & Grounding", description: "Integrate optimal foundation models (Anthropic Claude, OpenAI, DeepSeek, or open weights)." },
      { step: "04", title: "Telemetry & Cost Controls", description: "Monitor token expenditure, latency, and reliability." },
    ],
    integrationsAndCapabilities: [
      "OpenAI, Anthropic, Gemini, Mistral APIs",
      "Redis caching & rate-limiting",
      "FastAPI & Node.js microservices",
      "Serverless deployment on AWS / GCP",
    ],
    projectExample: {
      title: "CRM Automated Conversation Summarization & Action Sync",
      isDemo: true,
      description: "Middleware system listening to customer sales calls, generating structured bullet summaries, and updating deal stages in CRM automatically.",
      outcome: "Saves sales reps 45 minutes of manual CRM data entry per day.",
    },
    engagementProcess: [
      "Technical assessment: Inspect existing system architecture.",
      "Proof of concept: Prototype AI functionality with sample payloads.",
      "Production deployment: Deploy with automated health checks.",
      "Cost & latency optimization: Fine-tune prompts and caching.",
    ],
    faqs: [
      {
        question: "Will AI API calls make our current software slow?",
        answer: "We design all integrations using asynchronous background queues and fast vector caches so your end-users never experience UI latency.",
      },
      {
        question: "How do you control the recurring API costs of AI models?",
        answer: "We implement prompt compression, aggressive caching for repeated queries, and route simpler tasks to smaller, cost-efficient models.",
      },
    ],
    relatedServices: [
      { title: "API Integrations", href: "/software-development/api-integrations" },
      { title: "AI Workflow Automation", href: "/ai-solutions/ai-workflow-automation" },
      { title: "Custom Software", href: "/software-development/custom-software" },
    ],
  },
];

/* =========================================================================
   SOFTWARE DEVELOPMENT SERVICES
   ========================================================================= */
export const SOFTWARE_DEV_DATA: ServiceItem[] = [
  {
    slug: "custom-software",
    category: "software-development",
    title: "Custom Software Engineering",
    tagline: "Purpose-built business platforms designed around your operations.",
    heroDescription:
      "When commercial off-the-shelf software doesn't fit your operational model, we engineer custom web applications, internal tools, and client portals built to your exact specifications.",
    businessProblem:
      "Generic SaaS platforms force businesses to compromise their unique workflows or pay expensive per-seat licenses for bloated software where 80% of features go unused.",
    ordinaryLanguageExplanation:
      "We design and build bespoke software from scratch that does exactly what your business needs and nothing it doesn't. You own the software, avoid endless monthly subscription hikes, and work at peak efficiency.",
    useCases: [
      { title: "Internal Operational Command Centers", description: "Centralized platforms managing jobs, field staff, scheduling, and live revenue." },
      { title: "Client & Supplier Self-Service Portals", description: "Secure environments where clients view project statuses, download documents, and submit requests." },
      { title: "Proprietary Calculation & Quoting Engines", description: "Complex engineering or financial calculators delivering instant bids." },
    ],
    howItWorks: [
      { step: "01", title: "Workflow Analysis", description: "We interview your team to understand your exact operational mechanics." },
      { step: "02", title: "Architecture & UI Design", description: "We prototype intuitive, responsive interfaces with clear database schemas." },
      { step: "03", title: "Iterative Engineering", description: "We build in two-week sprints with working demos at every checkpoint." },
      { step: "04", title: "Deployment & Ownership", description: "Full deployment with complete source code transfer and zero vendor lock-in." },
    ],
    integrationsAndCapabilities: [
      "Modern React / Next.js / TypeScript frontends",
      "Scalable Node.js / Python / Go backends",
      "PostgreSQL, MySQL, Redis databases",
      "AWS / Cloudflare / Azure serverless infrastructure",
    ],
    projectExample: {
      title: "Commercial Equipment Rental & Fleet Management Portal",
      isDemo: true,
      description: "Custom web platform managing equipment availability, dispatch scheduling, maintenance logs, and electronic rental contracts.",
      outcome: "Consolidated four separate spreadsheets into one unified system, reducing scheduling errors to zero.",
    },
    engagementProcess: [
      "Discovery call: Review operational requirements.",
      "Technical specification & fixed-milestone roadmap.",
      "Iterative engineering sprints.",
      "Deployment, staff training, and ongoing support.",
    ],
    faqs: [
      {
        question: "Do we own the intellectual property and code?",
        answer: "Yes, 100%. Upon completion of milestones, you own full intellectual property, source code repositories, and deployment assets with zero licensing fees.",
      },
      {
        question: "How long does a custom software build take?",
        answer: "A focused operational MVP typically launches within 6 to 10 weeks, followed by iterative feature additions.",
      },
    ],
    relatedServices: [
      { title: "Mobile App Development", href: "/software-development/mobile-app-development" },
      { title: "Web Applications", href: "/software-development/web-applications" },
      { title: "CRM & ERP Systems", href: "/software-development/crm-erp-systems" },
    ],
  },
  {
    slug: "web-applications",
    category: "software-development",
    title: "Web Application Development",
    tagline: "High-performance, scalable web applications built for speed and engagement.",
    heroDescription:
      "Modern web applications engineered with Next.js, React, and TypeScript that load instantaneously, look stunning, and scale gracefully to millions of users.",
    businessProblem:
      "Sluggish, outdated web applications frustrate users, suffer poor search rankings, and struggle to scale under high concurrent traffic.",
    ordinaryLanguageExplanation:
      "We build modern web applications that feel as responsive and smooth as native mobile apps. From fast page transitions to bulletproof data security, your web application will impress your users and drive conversions.",
    useCases: [
      { title: "Customer-Facing Dashboards", description: "Fast, interactive analytics interfaces with real-time data streaming." },
      { title: "E-Commerce & Digital Marketplaces", description: "High-conversion storefronts with instant search and checkout flows." },
      { title: "Collaborative Team Workspaces", description: "Multi-user web apps with real-time presence and collaborative editing." },
    ],
    howItWorks: [
      { step: "01", title: "Product Architecture", description: "Define component hierarchies, state management, and edge caching strategies." },
      { step: "02", title: "UI/UX System", description: "Build bespoke, accessible design tokens and responsive interfaces." },
      { step: "03", title: "Full-Stack Development", description: "Engineer frontend client and server endpoints with strict type safety." },
      { step: "04", title: "Performance Tuning", description: "Achieve top Core Web Vitals, sub-second load times, and global CDN caching." },
    ],
    integrationsAndCapabilities: [
      "Next.js App Router, React 19, TypeScript",
      "Tailwind CSS design systems",
      "Stripe, Paddle, Adyen payment gateways",
      "WebSockets & Server-Sent Events",
    ],
    projectExample: {
      title: "Real-Time B2B Wholesale Marketplace",
      isDemo: true,
      description: "High-throughput marketplace platform handling multi-tiered bulk pricing, live inventory updates, and instant invoice generation.",
      outcome: "Sub-500ms global page loads and a 28% increase in order completion rate.",
    },
    engagementProcess: [
      "Requirements gathering & UX wireframes.",
      "Component development & design system creation.",
      "API integration & state management.",
      "Production deployment with global CDN acceleration.",
    ],
    faqs: [
      {
        question: "Is the application mobile responsive?",
        answer: "Yes, every application we build is designed mobile-first and tested rigorously across smartphones, tablets, laptops, and ultra-wide desktop monitors.",
      },
      {
        question: "How do you guarantee application security?",
        answer: "We implement HTTPS encryption, CSRF protection, secure cookie sessions, parameterized SQL queries, and conduct automated vulnerability scanning.",
      },
    ],
    relatedServices: [
      { title: "Custom Software", href: "/software-development/custom-software" },
      { title: "Mobile App Development", href: "/software-development/mobile-app-development" },
      { title: "SaaS Products", href: "/software-development/saas-products" },
    ],
  },
  {
    slug: "mobile-app-development",
    category: "software-development",
    title: "Mobile App Development",
    tagline: "High-performance iOS and Android applications tailored to your business operations.",
    heroDescription:
      "Engineered cross-platform and native mobile applications for iPhone, iPad, and Android. Built with offline data sync, real-time push alerts, and intuitive interfaces for field teams and customers.",
    businessProblem:
      "Off-the-shelf mobile apps fail to connect cleanly with your core databases, stop working when employees lose cell reception in the field, and charge recurring monthly per-seat licenses for rigid workflows.",
    ordinaryLanguageExplanation:
      "We design and build custom mobile applications that your employees and clients will actually enjoy using. Whether your field technicians need to log work orders and signatures without internet, or your customers want a streamlined mobile portal to track services and place orders, we engineer reliable apps that synchronize seamlessly with your back-office systems.",
    useCases: [
      {
        title: "Field Service & Technician Apps",
        description:
          "Enable on-site teams to complete inspection checklists, scan equipment barcodes, capture photos, and collect client signatures with automatic offline synchronization.",
      },
      {
        title: "Customer Account & Ordering Portals",
        description:
          "Give your customers instant mobile access to book services, view live order statuses, download statements, and receive delivery push notifications.",
      },
      {
        title: "Internal Executive & Dispatch Dashboards",
        description:
          "Equip managers with on-the-go operational visibility to assign dispatch jobs, review critical safety alerts, and approve urgent purchase requisitions from their phones.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Mobile Architecture & UX Design",
        description:
          "We map thumb-friendly interfaces, test field ergonomics, and design intuitive offline-first data synchronization models.",
      },
      {
        step: "02",
        title: "Cross-Platform Engineering",
        description:
          "We develop high-performance applications using React Native and Flutter, delivering 60fps native performance across both iOS and Android from a single codebase.",
      },
      {
        step: "03",
        title: "Hardware & Offline Integration",
        description:
          "We integrate device hardware (GPS, camera, Bluetooth scanners, biometrics) and implement robust local SQLite storage for zero-connectivity operation.",
      },
      {
        step: "04",
        title: "Store Launch & Enterprise Distribution",
        description:
          "We manage full Apple App Store and Google Play submissions, enterprise MDM certificate provisioning, and ongoing OS compatibility updates.",
      },
    ],
    integrationsAndCapabilities: [
      "Cross-platform React Native & Flutter architecture",
      "Native Swift (iOS) and Kotlin (Android) modules",
      "Offline-first SQLite local caching with automatic conflict resolution",
      "Biometric security (Face ID, Touch ID, Android Biometrics)",
      "Push notifications via Apple APNs & Firebase Cloud Messaging",
      "Hardware APIs: GPS geofencing, camera scanner, BLE peripherals",
    ],
    projectExample: {
      title: "Field Service & Mobile Billing App for Industrial Maintenance",
      isDemo: true,
      description:
        "Custom mobile app deployed to 45 field technicians allowing on-site asset inspection, barcode scanning of replacement parts, and client digital signature sign-off.",
      outcome:
        "Reduced job sheet processing time from 4 days to instant same-day invoicing with 100% offline uptime.",
    },
    engagementProcess: [
      "Discovery & mobile workflow specification.",
      "Clickable mobile prototypes and usability testing.",
      "Bi-weekly sprint builds with TestFlight & Android APK access.",
      "Store publishing, MDM deployment, and continuous support.",
    ],
    faqs: [
      {
        question: "Do we need separate apps for Apple iOS and Android?",
        answer:
          "No. We utilize industry-standard cross-platform frameworks like React Native and Flutter. This allows us to write one secure, high-performance codebase that runs natively on both iPhones and Android devices, saving you up to 40% in development and ongoing maintenance costs.",
      },
      {
        question: "Will the mobile app work when technicians have zero cell signal or Wi-Fi?",
        answer:
          "Yes. We engineer our mobile apps with an offline-first architecture. All checklists, photos, and job details are stored locally on the device in an encrypted database and automatically synchronize back to your central servers as soon as a data connection is restored.",
      },
      {
        question: "Do you handle App Store and Google Play approval?",
        answer:
          "Yes. We manage the entire submission, review guidelines, privacy manifest compliance, and approval process for both the Apple App Store and Google Play Store. For internal employee apps, we can also configure private enterprise MDM distribution.",
      },
      {
        question: "Who owns the mobile application source code and store listings?",
        answer:
          "You own 100% of the intellectual property, mobile codebase, design assets, and store listings upon milestone completion. There are zero ongoing proprietary licensing fees.",
      },
    ],
    relatedServices: [
      { title: "Custom Software", href: "/software-development/custom-software" },
      { title: "Web Applications", href: "/software-development/web-applications" },
      { title: "API Integrations", href: "/software-development/api-integrations" },
    ],
  },
  {
    slug: "saas-products",
    category: "software-development",
    title: "SaaS Product Engineering",
    tagline: "End-to-end software architecture for scalable subscription products.",
    heroDescription:
      "We partner with founders and enterprise innovators to design, engineer, and launch scalable SaaS products with multi-tenancy, subscription billing, and enterprise security.",
    businessProblem:
      "Building a software product requires juggling multi-tenant database isolation, subscription metering, user management, and cloud scalability—mistakes here create technical debt that kills growth.",
    ordinaryLanguageExplanation:
      "We build the complete foundation your software company needs to succeed: authentication, subscription billing, team invitations, permissions, automated onboarding, and the core proprietary product features that make your product valuable.",
    useCases: [
      { title: "B2B Vertical SaaS Platforms", description: "Industry-specific platforms solving niche problems for dentists, contractors, or lawyers." },
      { title: "AI-Powered Micro-SaaS", description: "Subscription tools leveraging specialized LLMs for content, analysis, or automation." },
      { title: "Enterprise Workflow Tools", description: "Collaborative platforms built for Fortune 500 team collaboration." },
    ],
    howItWorks: [
      { step: "01", title: "Domain & Tenancy Modeling", description: "Design multi-tenant isolation, row-level security, and data schemas." },
      { step: "02", title: "Core Architecture & Billing", description: "Integrate Stripe recurring billing, usage metering, and team seats." },
      { step: "03", title: "Core Feature Engineering", description: "Build the proprietary workflows that deliver your product's core value." },
      { step: "04", title: "Analytics & Self-Serve Growth", description: "Implement product analytics, onboarding checklists, and transactional emails." },
    ],
    integrationsAndCapabilities: [
      "Multi-tenant PostgreSQL with row-level security",
      "Stripe Billing, webhooks, and customer portal",
      "NextAuth / Clerk / Auth0 enterprise SSO",
      "PostHog / Mixpanel product analytics",
    ],
    projectExample: {
      title: "Commercial Compliance Management SaaS",
      isDemo: true,
      description: "Demonstration SaaS platform allowing supply chain companies to audit vendor sustainability certifications, track expiry dates, and manage compliance.",
      outcome: "Launched from concept to paying beta customers in under 12 weeks.",
    },
    engagementProcess: [
      "Product roadmap & feature prioritization.",
      "SaaS boilerplate & multi-tenant foundation setup.",
      "Iterative sprint development with continuous staging releases.",
      "Production launch, monitoring, and scaling support.",
    ],
    faqs: [
      {
        question: "How do you handle multi-tenancy securely?",
        answer: "We implement tenant isolation at the database level using PostgreSQL Row-Level Security (RLS) or partitioned schemas, guaranteeing zero cross-tenant data leaks.",
      },
      {
        question: "Can we integrate complex pricing tiers and add-ons?",
        answer: "Yes, we support usage-based metered billing, per-seat recurring subscriptions, annual discount tiers, and enterprise custom invoicing.",
      },
    ],
    relatedServices: [
      { title: "MVP Development", href: "/software-development/mvp-development" },
      { title: "Web Applications", href: "/software-development/web-applications" },
      { title: "Dedicated Development Teams", href: "/hire-engineers/dedicated-development-teams" },
    ],
  },
  {
    slug: "mvp-development",
    category: "software-development",
    title: "Rapid MVP Development",
    tagline: "Turn your product vision into a market-ready software release in weeks.",
    heroDescription:
      "Validate your market demand and secure investor or customer buy-in with a fast, high-quality Minimum Viable Product built on durable architecture.",
    businessProblem:
      "Startups and enterprise innovation labs waste months and hundreds of thousands of dollars over-engineering features before validating whether customers actually want them.",
    ordinaryLanguageExplanation:
      "We help you strip away unnecessary complexity, focus on the single killer feature that solves your user's primary pain point, and build a polished, production-ready version in 4 to 8 weeks.",
    useCases: [
      { title: "Founder Startup Launch", description: "Launch a functional software product to acquire initial paying users and raise pre-seed capital." },
      { title: "Enterprise Internal Pilot", description: "Build a working prototype to prove ROI to corporate stakeholders before broad rollout." },
      { title: "New Product Line Extension", description: "Test a new digital offering alongside your existing business without diverting core engineering teams." },
    ],
    howItWorks: [
      { step: "01", title: "Scope Scoping Workshop", description: "Cut non-essential features and define the core problem-solving loop." },
      { step: "02", title: "Clickable Prototype & Wireframes", description: "Confirm visual flow and user experience before writing code." },
      { step: "03", title: "Focused Build Sprint", description: "4-week rapid engineering phase utilizing battle-tested architecture." },
      { step: "04", title: "Launch & Metric Tracking", description: "Deploy to production with user feedback collection and event tracking." },
    ],
    integrationsAndCapabilities: [
      "Rapid prototyping with modern component libraries",
      "Integrated authentication and payments out of the box",
      "Clean TypeScript architecture ready for future scaling",
      "Integrated user feedback and session recording",
    ],
    projectExample: {
      title: "AI Property Description & Valuation MVP",
      isDemo: true,
      description: "Rapidly built MVP allowing real estate brokers to upload floor plans and generate compliant listing brochures and estimated valuations in under 60 seconds.",
      outcome: "Went from initial wireframe to live production launch in 5 weeks.",
    },
    engagementProcess: [
      "1-week scope refinement & UI blueprinting.",
      "4-week intense core build.",
      "1-week testing, polish, and deployment.",
      "Post-launch feedback review and roadmap planning.",
    ],
    faqs: [
      {
        question: "Is MVP code throwaway code?",
        answer: "Never. We write clean, modular TypeScript with modern frameworks. The MVP is built as a durable foundation that you can continue building upon as you scale.",
      },
      {
        question: "How involved will I need to be during development?",
        answer: "We schedule one 45-minute sync per week to demo progress and review priorities, leaving you free to focus on sales, marketing, and business operations.",
      },
    ],
    relatedServices: [
      { title: "SaaS Products", href: "/software-development/saas-products" },
      { title: "Custom Software", href: "/software-development/custom-software" },
      { title: "Full-Stack Developers", href: "/hire-engineers/full-stack-developers" },
    ],
  },
  {
    slug: "crm-erp-systems",
    category: "software-development",
    title: "Custom CRM & ERP Systems",
    tagline: "Centralized business management software tailored to your specific operations.",
    heroDescription:
      "Consolidate orders, inventory, invoicing, and customer relationships into a single, intuitive enterprise system that eliminates duplicate data entry.",
    businessProblem:
      "Legacy ERP systems like SAP or Oracle are notoriously rigid and costly to customize, while spreadsheets create data silos and reconciliation errors.",
    ordinaryLanguageExplanation:
      "We build custom management systems that mirror your exact business processes. Your staff get clean screens that make sense, with automatic inventory updates, invoicing triggers, and customer histories in one place.",
    useCases: [
      { title: "Manufacturing & Assembly Tracking", description: "Track raw materials, work-in-progress stages, and finished goods inventory." },
      { title: "Specialized Field Service CRM", description: "Manage quotes, dispatch schedules, technician job sheets, and automated customer reminders." },
      { title: "Wholesale & Distribution ERP", description: "Manage multi-warehouse stock, purchase orders, customer credit limits, and shipping." },
    ],
    howItWorks: [
      { step: "01", title: "Data Model Mapping", description: "Map entities: customers, products, orders, inventory, and ledger transactions." },
      { step: "02", title: "Permission & Workflow Setup", description: "Define role-based dashboards for warehouse, sales, finance, and executives." },
      { step: "03", title: "Integration & Migration", description: "Migrate legacy data cleanly and connect with banks, carriers, and suppliers." },
      { step: "04", title: "Staged Rollout & Training", description: "Phase deployment department by department to ensure zero business disruption." },
    ],
    integrationsAndCapabilities: [
      "Relational SQL architecture with strict transactional integrity",
      "Accounting integrations (Xero, QuickBooks, NetSuite)",
      "Automated PDF invoice and delivery note generation",
      "Barcode & QR scanning support",
    ],
    projectExample: {
      title: "Commercial Building Supplies Order & Dispatch ERP",
      isDemo: true,
      description: "Custom ERP managing customer credit accounts, multi-vehicle dispatch routing, automated proof-of-delivery capture, and batch invoicing.",
      outcome: "Eliminated paper delivery tickets and sped up invoicing cycles from 14 days to under 24 hours.",
    },
    engagementProcess: [
      "Process & data audit across all business departments.",
      "Custom system architecture and database design.",
      "Staged module engineering (Sales -> Inventory -> Invoicing).",
      "Data migration, testing, and team training.",
    ],
    faqs: [
      {
        question: "Can we migrate our historical data from our old software?",
        answer: "Yes. We clean, normalize, and migrate your historical customer records, sales transactions, and product catalogs into the new database.",
      },
      {
        question: "Can different employees have restricted access?",
        answer: "Yes, you can configure granular permissions—for example, warehouse staff can view packing slips but cannot see company profit margins or payroll data.",
      },
    ],
    relatedServices: [
      { title: "Custom Software", href: "/software-development/custom-software" },
      { title: "API Integrations", href: "/software-development/api-integrations" },
      { title: "Document Processing", href: "/ai-solutions/document-processing" },
    ],
  },
  {
    slug: "api-integrations",
    category: "software-development",
    title: "API Integrations & Custom Middleware",
    tagline: "Connecting your business tools into one unified, automated ecosystem.",
    heroDescription:
      "Eliminate manual data handoffs and sync delays with robust, secure API integrations and custom middleware bridging your disparate systems.",
    businessProblem:
      "When applications don't communicate with each other, employees waste hours manually re-typing customer details, order statuses, and financial figures between software tools.",
    ordinaryLanguageExplanation:
      "We build invisible software bridges that connect your tools. When a deal closes in your CRM, an invoice is generated in your accounting software, a delivery order is staged in your warehouse, and the customer is notified—automatically.",
    useCases: [
      { title: "CRM to Accounting Synchronization", description: "Sync won deals in Salesforce/HubSpot to QuickBooks/Xero with accurate tax and invoice data." },
      { title: "E-Commerce to Warehouse ERP", description: "Push storefront orders to third-party logistics (3PL) fulfillment centers with live tracking sync." },
      { title: "Payment Gateway Reconciliation", description: "Match Stripe or bank settlements directly with company financial ledgers." },
    ],
    howItWorks: [
      { step: "01", title: "Endpoint & Schema Analysis", description: "Audit data models and rate limits across both source and destination platforms." },
      { step: "02", title: "Transformation Logic", description: "Write business translation rules to map fields, currencies, and tax codes." },
      { step: "03", title: "Event Queues & Error Handling", description: "Deploy durable message brokers (Kafka / RabbitMQ / SQS) ensuring zero lost data." },
      { step: "04", title: "Monitoring & Alerting", description: "Live dashboard tracking throughput, latency, and automated retry status." },
    ],
    integrationsAndCapabilities: [
      "REST, SOAP, GraphQL, gRPC protocols",
      "Durable event-driven queue architectures",
      "Automated exponential backoff retries",
      "Audit trail logging for compliance",
    ],
    projectExample: {
      title: "Real-Time Field Service to ERP Sync Engine",
      isDemo: true,
      description: "Demonstration middleware bridging mobile field technician sign-offs with central warehouse inventory and ERP billing accounts.",
      outcome: "Ensured 100% parts inventory accuracy and eliminated 15 hours of weekly manual bookkeeping.",
    },
    engagementProcess: [
      "API capability audit and scope definition.",
      "Data transformation schema specification.",
      "Middleware development and sandbox testing.",
      "Production deployment with automated failover monitoring.",
    ],
    faqs: [
      {
        question: "What happens if one of our software vendors updates their API?",
        answer: "We write versioned, defensive code and offer maintenance plans that proactively update integration schemas whenever vendors publish new API versions.",
      },
      {
        question: "Can you connect older legacy databases that have no public API?",
        answer: "Yes, we can write direct database connectors (ODBC/JDBC) or file-based SFTP pipelines to extract and sync data safely without disrupting legacy servers.",
      },
    ],
    relatedServices: [
      { title: "AI Workflow Automation", href: "/ai-solutions/ai-workflow-automation" },
      { title: "CRM & ERP Systems", href: "/software-development/crm-erp-systems" },
      { title: "Custom Software", href: "/software-development/custom-software" },
    ],
  },
];

/* =========================================================================
   HIRE ENGINEERS (TALENT)
   ========================================================================= */
export const HIRE_ENGINEERS_DATA: ServiceItem[] = [
  {
    slug: "ai-engineers",
    category: "hire-engineers",
    title: "Hire Dedicated AI Engineers",
    tagline: "Senior AI engineering talent to accelerate your proprietary technology roadmap.",
    heroDescription:
      "Augment your internal product team with experienced AI software engineers specializing in applied machine learning, neural architectures, and scalable production deployments.",
    businessProblem:
      "Hiring top-tier AI engineering talent locally takes 6+ months, costs upwards of $200k/year in recruiting fees, and carries high risk if candidate vetting fails.",
    ordinaryLanguageExplanation:
      "We provide battle-tested senior AI engineers who integrate directly into your sprint cycles, code reviews, and Slack channels. You get immediate technical firepower without long recruiting delays.",
    useCases: [
      { title: "Model Fine-Tuning & Evaluation", description: "Adapt foundation models to specialized domain terminology and accuracy benchmarks." },
      { title: "Production AI Infrastructure", description: "Deploy low-latency inference pipelines, caching layers, and token cost optimizers." },
      { title: "Feature Prototyping", description: "Quickly evaluate feasibility of new AI product ideas before allocating core engineering resources." },
    ],
    howItWorks: [
      { step: "01", title: "Technical Profile Matching", description: "We match engineers based on your tech stack, time zone, and domain requirements." },
      { step: "02", title: "Direct Technical Interview", description: "You interview and code-review your prospective engineer before signing." },
      { step: "03", title: "Seamless Team Onboarding", description: "Engineer joins your GitHub, Slack, and daily standups within 5 business days." },
      { step: "04", title: "Flexible Scalability", description: "Scale headcount up or down with straightforward monthly agreements." },
    ],
    integrationsAndCapabilities: [
      "Python, PyTorch, Hugging Face, vLLM",
      "LangChain, LlamaIndex, DSPy frameworks",
      "Vector databases & semantic caching",
      "AWS SageMaker, Azure AI, GCP Vertex AI",
    ],
    projectExample: {
      title: "Senior AI Engineer Embedded in Fintech Analytics",
      isDemo: true,
      description: "ZNX Labs AI engineer embedded within a US financial technology firm to build predictive fraud detection and transaction anomaly models.",
      outcome: "Delivered production model within 6 weeks, cutting false positive fraud alerts by 42%.",
    },
    engagementProcess: [
      "Requirements call: Detail stack, seniority, and timeline.",
      "Candidate shortlist presented within 48 hours.",
      "1-on-1 technical interview with your CTO/lead.",
      "Kickoff sprint with 2-week risk-free trial period.",
    ],
    faqs: [
      {
        question: "How do your engineers work with our internal team?",
        answer: "They operate as full members of your team: attending daily standups, committing code to your repositories, and communicating via your Slack or Teams channels.",
      },
      {
        question: "What time zones do your engineers work in?",
        answer: "We support US (EST/PST), UK (GMT), UAE (GST), and Asia (IST) timezone overlaps to ensure 4+ hours of concurrent daily collaboration.",
      },
    ],
    relatedServices: [
      { title: "AI Agent Developers", href: "/hire-engineers/ai-agent-developers" },
      { title: "LLM & RAG Engineers", href: "/hire-engineers/llm-rag-engineers" },
      { title: "Dedicated Development Teams", href: "/hire-engineers/dedicated-development-teams" },
    ],
  },
  {
    slug: "ai-agent-developers",
    category: "hire-engineers",
    title: "Hire AI Agent Developers",
    tagline: "Specialists in autonomous agents, multi-agent frameworks, and tool execution.",
    heroDescription:
      "Bring expert agent developers onto your team to build systems that plan, reason, call external APIs, and execute complex business workflows autonomously.",
    businessProblem:
      "Building reliable agents requires deep knowledge of loop control, deterministic validation, memory management, and error correction—skills absent in traditional web developers.",
    ordinaryLanguageExplanation:
      "Our agent developers understand how to make AI execute tasks reliably. They build robust architectures where agents call tools, verify intermediate outputs, and know when to request human help.",
    useCases: [
      { title: "Multi-Agent Workflow Networks", description: "Coordinated systems of specialized agents (researcher, writer, fact-checker, publisher)." },
      { title: "Autonomous Web & Software Operators", description: "Agents that navigate web portals and enter data across legacy systems without public APIs." },
      { title: "Executive Decision-Support Agents", description: "Synthesize weekly financial, operational, and customer data into strategic briefs." },
    ],
    howItWorks: [
      { step: "01", title: "Agent Scope Definition", description: "Define tool access, external endpoints, and safety guardrails." },
      { step: "02", title: "Framework Selection", description: "Implement with LangGraph, AutoGen, CrewAI, or bespoke state machines." },
      { step: "03", title: "Determinism & Testing", description: "Subject agent to adversarial testing and unexpected API failures." },
      { step: "04", title: "Production Monitoring", description: "Deploy with observability platforms (LangSmith, Helicone) to track execution paths." },
    ],
    integrationsAndCapabilities: [
      "LangGraph, CrewAI, AutoGen, Semantic Kernel",
      "Function calling & tool execution pipelines",
      "Persistent agent memory & state storage",
      "Continuous trace observability (LangSmith)",
    ],
    projectExample: {
      title: "Supply Chain Exception Management Agent Suite",
      isDemo: true,
      description: "Dedicated agent developer engineered a 3-agent pipeline handling shipping exception notices, rebooking freight, and notifying affected customers.",
      outcome: "Reduced manual exception handling time by 80%.",
    },
    engagementProcess: [
      "Define agent capabilities and target software tools.",
      "Pair with a certified agent engineer.",
      "Sprint planning and milestone-based deliverables.",
      "Ongoing optimization and prompt tuning.",
    ],
    faqs: [
      {
        question: "Can your developers build custom tools for our internal APIs?",
        answer: "Yes, our developers write clean OpenAPI schemas and Python/TypeScript wrappers that allow agents to interact safely with your proprietary backends.",
      },
      {
        question: "How do you ensure agents don't enter infinite loops or drain budgets?",
        answer: "We implement hard iteration caps, token limits, cost alarms, and timeout monitors on every agent loop.",
      },
    ],
    relatedServices: [
      { title: "AI Engineers", href: "/hire-engineers/ai-engineers" },
      { title: "AI Agents", href: "/ai-solutions/ai-agents" },
      { title: "LLM & RAG Engineers", href: "/hire-engineers/llm-rag-engineers" },
    ],
  },
  {
    slug: "llm-rag-engineers",
    category: "hire-engineers",
    title: "Hire LLM & RAG Engineers",
    tagline: "Specialists in vector search, knowledge retrieval, and hallucination elimination.",
    heroDescription:
      "Hire dedicated engineers who excel at architecting high-precision Retrieval-Augmented Generation (RAG) pipelines for enterprise data.",
    businessProblem:
      "Basic RAG implementations frequently return irrelevant snippets, choke on complex PDF tables, or hallucinate answers when documents contain conflicting information.",
    ordinaryLanguageExplanation:
      "Our RAG engineers treat document retrieval as an exact science. They tune embedding models, chunking strategies, hybrid search algorithms, and re-ranking filters so your AI returns verified, cited answers every time.",
    useCases: [
      { title: "Enterprise Knowledge Base Modernization", description: "Transform scattered internal company docs into a high-precision search engine." },
      { title: "Complex PDF & Table Parsing", description: "Extract financial statements, balance sheets, and engineering specs accurately." },
      { title: "Context Window Optimization", description: "Minimize token costs while feeding models precisely the relevant background text." },
    ],
    howItWorks: [
      { step: "01", title: "Document Pipeline Engineering", description: "Implement hierarchical chunking, OCR cleaning, and semantic indexing." },
      { step: "02", title: "Hybrid Retrieval Architecture", description: "Combine keyword search (BM25) with dense vector embeddings." },
      { step: "03", title: "Re-Ranking & Guardrails", description: "Filter results through cross-encoders to ensure top relevance." },
      { step: "04", title: "Continuous Evaluation", description: "Benchmark accuracy using automated evaluation frameworks (Ragas, TruLens)." },
    ],
    integrationsAndCapabilities: [
      "Pinecone, Qdrant, Weaviate, pgvector, Milvus",
      "LlamaIndex, LangChain, Unstructured.io",
      "Cohere Rerank, BGE rerankers",
      "Ragas, TruLens automated evaluation suites",
    ],
    projectExample: {
      title: "Commercial Legal Precedent Research Pipeline",
      isDemo: true,
      description: "Dedicated RAG engineer built a hybrid retrieval engine indexing 100,000+ legal filings with cross-citation tracking.",
      outcome: "Achieved 96% precision on complex legal queries with sub-second retrieval times.",
    },
    engagementProcess: [
      "Assess your data corpus and accuracy requirements.",
      "Match with a dedicated RAG specialist engineer.",
      "Setup automated evaluation metrics.",
      "Iterative improvements and latency optimizations.",
    ],
    faqs: [
      {
        question: "Why hire a dedicated RAG engineer instead of a standard developer?",
        answer: "Standard developers often implement naive vector search, which results in 30%+ hallucination rates on complex documents. RAG specialists know how to build chunking and re-ranking architectures that ensure 95%+ precision.",
      },
      {
        question: "Can they work with our existing vector database?",
        answer: "Yes, our engineers are experienced across Pinecone, Weaviate, Qdrant, Milvus, and PostgreSQL with pgvector.",
      },
    ],
    relatedServices: [
      { title: "RAG Knowledge Assistants", href: "/ai-solutions/rag-knowledge-assistants" },
      { title: "AI Engineers", href: "/hire-engineers/ai-engineers" },
      { title: "Full-Stack Developers", href: "/hire-engineers/full-stack-developers" },
    ],
  },
  {
    slug: "full-stack-developers",
    category: "hire-engineers",
    title: "Hire Full-Stack Developers",
    tagline: "Senior TypeScript, React, Next.js, and Node.js software engineers.",
    heroDescription:
      "Add versatile, senior full-stack engineers to your product team who write clean code, design robust databases, and build beautiful, responsive user interfaces.",
    businessProblem:
      "Finding experienced full-stack engineers who understand modern React server components, type-safe APIs, and database indexing is difficult and competitive.",
    ordinaryLanguageExplanation:
      "Our full-stack engineers are complete product builders. They can design an intuitive user interface in the morning and optimize a SQL database query in the afternoon, helping your team ship features twice as fast.",
    useCases: [
      { title: "Product Feature Velocity", description: "Accelerate your product backlog by adding autonomous developers who need minimal hand-holding." },
      { title: "Frontend Re-Architecture", description: "Modernize legacy jQuery or AngularJS codebases into fast Next.js applications." },
      { title: "API & Backend Scalability", description: "Build type-safe microservices that handle high concurrent user traffic." },
    ],
    howItWorks: [
      { step: "01", title: "Skills & Tech Alignment", description: "Match with developers fluent in your specific libraries and database engines." },
      { step: "02", title: "Direct Code Assessment", description: "Review sample repositories or conduct your own live pairing session." },
      { step: "03", title: "Sprint Integration", description: "Developer picks up backlog tickets on day one with zero training delay." },
      { step: "04", title: "Continuous Delivery", description: "Clean pull requests, test coverage, and clear documentation on every feature." },
    ],
    integrationsAndCapabilities: [
      "TypeScript, Next.js, React 19, Tailwind CSS",
      "Node.js, Express, Fastify, NestJS, Python FastAPI",
      "PostgreSQL, MySQL, MongoDB, Redis",
      "Docker, Kubernetes, AWS, Vercel, Supabase",
    ],
    projectExample: {
      title: "Senior Full-Stack Developer Embedded in SaaS Scaleup",
      isDemo: true,
      description: "Full-stack engineer added to client team to architect team workspace permissions and multi-seat billing infrastructure.",
      outcome: "Shipped enterprise tier feature set 3 weeks ahead of scheduled launch date.",
    },
    engagementProcess: [
      "Discuss tech stack and open product tickets.",
      "Review vetted senior engineer profiles.",
      "Technical interview with your engineering team.",
      "Immediate start with flexible billing terms.",
    ],
    faqs: [
      {
        question: "What experience level are your full-stack developers?",
        answer: "All our full-stack developers have a minimum of 4+ years of professional engineering experience building production web applications.",
      },
      {
        question: "Can we hire developers for short-term or part-time sprints?",
        answer: "We support both dedicated full-time engagements (40 hrs/week) and targeted sprint blocks based on your roadmap.",
      },
    ],
    relatedServices: [
      { title: "Web Applications", href: "/software-development/web-applications" },
      { title: "Custom Software", href: "/software-development/custom-software" },
      { title: "Dedicated Development Teams", href: "/hire-engineers/dedicated-development-teams" },
    ],
  },
  {
    slug: "dedicated-development-teams",
    category: "hire-engineers",
    title: "Dedicated Development Teams",
    tagline: "Autonomous squads of engineers, designers, and tech leads ready to build.",
    heroDescription:
      "Deploy a complete, high-performing software engineering squad (Tech Lead, Senior Engineers, UI/UX Designer, QA) managed toward your business milestones.",
    businessProblem:
      "Assembling a full product team one hire at a time takes 9+ months, during which market opportunities close and competitors pull ahead.",
    ordinaryLanguageExplanation:
      "Instead of hiring individuals, hire an entire cohesive team that has already worked together. You get a Tech Lead managing execution, senior developers writing code, and a designer ensuring the product looks world-class.",
    useCases: [
      { title: "End-to-End Product Builds", description: "Entrust an entire product build to a dedicated team while you focus on sales and distribution." },
      { title: "Enterprise Digital Modernization", description: "Modernize legacy systems without pulling internal teams away from core operations." },
      { title: "Post-Funding Acceleration", description: "Deploy venture capital effectively to 3x your feature delivery velocity." },
    ],
    howItWorks: [
      { step: "01", title: "Squad Composition", description: "Assemble the exact ratio of frontend, backend, AI, and design talent needed." },
      { step: "02", title: "Roadmap Alignment", description: "Establish milestone sprints, sprint velocity targets, and delivery dates." },
      { step: "03", title: "Autonomous Sprints", description: "Team operates with clear accountability, shipping working software every 2 weeks." },
      { step: "04", title: "Executive Transparency", description: "Weekly executive demos and real-time sprint dashboard access." },
    ],
    integrationsAndCapabilities: [
      "Complete Agile / Scrum sprint management",
      "Automated CI/CD pipelines and QA testing",
      "Full IP ownership and repository handover",
      "Elastic scaling as product requirements evolve",
    ],
    projectExample: {
      title: "Dedicated Squad for B2B Supply Chain Platform",
      isDemo: true,
      description: "Deployed 4-person engineering squad to design, build, and launch a complete vendor management portal from scratch in 14 weeks.",
      outcome: "Successfully launched on schedule with 99.9% uptime and zero critical bugs.",
    },
    engagementProcess: [
      "Product roadmap and architectural scoping session.",
      "Squad staffing and tech lead introduction.",
      "Sprint planning and milestone agreement.",
      "Bi-weekly demos and continuous deployment.",
    ],
    faqs: [
      {
        question: "How does project management work with a dedicated squad?",
        answer: "A dedicated Tech Lead / Project Manager coordinates the squad, runs daily standups, and provides you with a single point of clear, non-technical accountability.",
      },
      {
        question: "Can we transition the product to our own internal team later?",
        answer: "Yes. We maintain comprehensive documentation, clean code comments, and conduct a structured knowledge transfer whenever you are ready to bring maintenance in-house.",
      },
    ],
    relatedServices: [
      { title: "Custom Software", href: "/software-development/custom-software" },
      { title: "AI Engineers", href: "/hire-engineers/ai-engineers" },
      { title: "Full-Stack Developers", href: "/hire-engineers/full-stack-developers" },
    ],
  },
];

/* =========================================================================
   INDUSTRIES
   ========================================================================= */
export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    slug: "finance",
    name: "Finance & FinTech",
    tagline: "Secure financial workflows, payment engines, and compliance automation.",
    heroDescription:
      "We help fintech founders, investment firms, and financial institutions engineer secure payment rails, automated reconciliation pipelines, audit-ready compliance tracking, and intelligent fraud detection.",
    challenges: [
      { title: "Manual Multi-Ledger Reconciliation", description: "Finance teams spending days matching gateway settlements, bank statements, and internal ERP ledgers manually." },
      { title: "Stringent KYC/AML & Compliance Overhead", description: "Verifying customer identity documents and screening sanction lists while maintaining audit trails is slow and error-prone." },
      { title: "Legacy Banking & Core System Silos", description: "Difficulty bridging modern digital customer experiences with legacy core banking databases and settlement networks." },
    ],
    solutionsProvided: [
      { title: "Automated Financial Reconciliation Middleware", description: "Real-time ledger balancing engine connecting Stripe, Plaid, Swift, and internal accounting with automated exception routing." },
      { title: "Frictionless KYC/AML Compliance Pipelines", description: "Automated identity ingestion, biometric verification, sanctions checking, and audit-ready reporting." },
      { title: "Secure Customer Portals & Lending Platforms", description: "High-security digital banking, loan origination, and portfolio management interfaces with granular RBAC." },
    ],
    caseExample: {
      title: "FinTech Multi-Currency Gateway & Automated Settlement Engine",
      description: "Architected an automated multi-currency reconciliation platform connecting payment processors and core banking APIs with instant ledger balancing.",
      impact: "Reduced month-end closing cycle from 6 days to under 4 hours with 99.98% automated reconciliation accuracy.",
    },
    faqs: [
      {
        question: "How do you guarantee financial security and regulatory compliance?",
        answer: "We engineer systems adhering to SOC2 Type II, PCI-DSS Level 1, and GDPR compliance standards, utilizing banking-grade AES-256 encryption, hardware security modules (HSM), and immutable audit logs.",
      },
      {
        question: "Can you integrate with core banking APIs and platforms like NetSuite or QuickBooks?",
        answer: "Yes, we integrate with major core banking providers, payment gateways (Stripe, Adyen), open banking APIs (Plaid), and ERP systems like NetSuite, QuickBooks, and SAP.",
      },
    ],
  },
  {
    slug: "education",
    name: "Education & EdTech",
    tagline: "Scalable eLearning platforms, cohort learning hubs, and automated grading pipelines.",
    heroDescription:
      "We help universities, educational institutions, and edtech founders build high-performance learning platforms, interactive coursework portals, automated assessment engines, and student retention analytics.",
    challenges: [
      { title: "Fragmented Learning & Administrative Tools", description: "Using separate disconnected systems for video lectures, assignments, quizzes, and gradebooks causes friction for educators and students." },
      { title: "Manual Grading Bottlenecks", description: "Educators spend up to 20 hours each week manually evaluating assignments, delaying student feedback loops." },
      { title: "Low Course Completion & Student Churn", description: "Lack of interactive engagement, peer collaboration, and early-warning retention metrics leads to high dropout rates." },
    ],
    solutionsProvided: [
      { title: "Unified LMS & Interactive Cohort Hubs", description: "Scalable online learning platforms with integrated video streaming, peer discussions, assignment submissions, and progress tracking." },
      { title: "Intelligent Assessment & Instant Feedback", description: "Rubric-grounded evaluation engines that provide students immediate, formative feedback on coursework and coding exercises." },
      { title: "Student Retention & Progress Analytics", description: "Predictive dashboards that detect disengaged learners early, alerting instructors to intervene proactively." },
    ],
    caseExample: {
      title: "Interactive EdTech Bootcamp Learning & Evaluation Platform",
      description: "Engineered a custom web and mobile LMS for 15,000+ students featuring automated code evaluation, live cohort rooms, and instructor progress dashboards.",
      impact: "Boosted 12-week course completion rates from 28% to 64% while saving instructors 18 hours per week in grading time.",
    },
    faqs: [
      {
        question: "Does your platform support LTI and SCORM standards?",
        answer: "Yes, we build educational software compliant with LTI (Learning Tools Interoperability) 1.3, SCORM, and xAPI standards for seamless integration with existing institutional systems.",
      },
      {
        question: "Is student data protected under FERPA and COPPA regulations?",
        answer: "Yes, our educational architectures implement strict FERPA and COPPA compliance controls, student privacy safeguards, and role-based permissions.",
      },
    ],
  },
  {
    slug: "ecommerce",
    name: "E-Commerce & Retail",
    tagline: "Scalable software and AI automation to handle higher order volume effortlessly.",
    heroDescription:
      "Automate customer service, inventory reconciliation, supplier ordering, and multi-channel fulfillment so your brand can scale without increasing administrative headcount.",
    challenges: [
      { title: "Repetitive Customer Inquiries", description: "Support teams overwhelmed with 'Where is my order?' and return requests across email and chat." },
      { title: "Multi-Storefront Inventory Discrepancies", description: "Overselling products because stock levels on Shopify, Amazon, and warehouse ERP don't sync in real time." },
      { title: "Manual Supplier Restocking", description: "Calculating reorder quantities manually using spreadsheets leads to stockouts or excess holding costs." },
    ],
    solutionsProvided: [
      { title: "Grounded AI Customer Care Agents", description: "Resolves 60%+ of tier-1 support tickets automatically, querying carrier tracking APIs in real time." },
      { title: "Omnichannel Inventory Sync Middleware", description: "Keeps inventory quantities accurate across all storefronts within seconds of a sale." },
      { title: "Automated Restock & Purchase Order Triggers", description: "Calculates inventory burn rates and drafts supplier purchase orders when safety stock is reached." },
    ],
    caseExample: {
      title: "Multi-Brand E-Commerce Inventory & Support Hub",
      description: "Deployed custom middleware syncing three Shopify stores with a 3PL warehouse and implemented an AI customer service assistant.",
      impact: "Saved 25 hours per week of manual inventory adjustments and halved first-response support times.",
    },
    faqs: [
      {
        question: "Does this work with Shopify, WooCommerce, and custom stores?",
        answer: "Yes, we integrate with Shopify, WooCommerce, BigCommerce, Magento, and custom headless storefronts.",
      },
      {
        question: "Can the AI handle return and refund rules safely?",
        answer: "Yes, we enforce your exact return policies (e.g. within 30 days, unused condition) and can require staff approval for refunds over specific dollar amounts.",
      },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare & HealthTech",
    tagline: "HIPAA-compliant patient portals, clinical workflows, and EHR data integration.",
    heroDescription:
      "We help clinics, digital health startups, and hospital networks design and build secure telemedicine solutions, appointment scheduling systems, automated patient intake, and interoperable EHR/EMR bridges.",
    challenges: [
      { title: "Severe Administrative Intake Overhead", description: "Clinic staff bogged down by manual phone scheduling, paper patient intake forms, and insurance eligibility verification." },
      { title: "Fragmented Patient Data Across EHR Systems", description: "Clinical data trapped in disparate legacy EHR/EMR platforms, creating barriers to care coordination and diagnostic efficiency." },
      { title: "Strict HIPAA Privacy & Data Breach Risks", description: "Navigating stringent healthcare privacy laws, encrypted PHI handling, and comprehensive audit requirements." },
    ],
    solutionsProvided: [
      { title: "HIPAA-Compliant Telehealth & Patient Hubs", description: "Secure, encrypted video consultation rooms, digital intake forms, automated reminders, and lab result portals." },
      { title: "FHIR & HL7 EHR Interoperability Bridges", description: "Bidirectional middleware connecting custom patient web apps with Epic, Cerner, AthenaHealth, and proprietary EHR backends." },
      { title: "Real-Time Insurance Verification & Scheduling", description: "Automated eligibility checking that verifies patient coverage instantly and reduces appointment no-shows." },
    ],
    caseExample: {
      title: "Multi-Clinic Telehealth & Automated Patient Intake System",
      description: "Engineered a HIPAA-compliant telehealth and scheduling portal connecting 8 regional clinics with Epic and Cerner EHR backends.",
      impact: "Cut patient intake wait times by 65% and reduced missed appointments by 34% through automated SMS/Email workflows.",
    },
    faqs: [
      {
        question: "How do you ensure full HIPAA compliance and PHI security?",
        answer: "We sign Business Associate Agreements (BAAs), implement AES-256 encryption at rest and in transit, maintain role-based access control (RBAC), and generate audit-ready access logs.",
      },
      {
        question: "Can your system integrate with our existing EHR like Epic or Cerner?",
        answer: "Yes, we leverage FHIR (Fast Healthcare Interoperability Resources) APIs and HL7 standards to build bi-directional data synchronization with any certified EHR system.",
      },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate & PropTech",
    tagline: "Streamline tenant communications, maintenance triage, and lease documentation.",
    heroDescription:
      "Software and automation tools built for property managers, commercial brokers, and real estate developers to handle leases, maintenance requests, and listings efficiently.",
    challenges: [
      { title: "Chaotic Maintenance Dispatch", description: "Tenants texting, emailing, and calling about urgent repairs with incomplete descriptions of the problem." },
      { title: "Manual Lease & Document Ingestion", description: "Extracting key dates, rent escalations, and renewal options from hundreds of commercial leases." },
      { title: "Repetitive Inbound Buyer & Tenant Inquiries", description: "Responding to basic questions about square footage, utilities, and showing availability." },
    ],
    solutionsProvided: [
      { title: "Intelligent Maintenance Triage Portal", description: "Tenants upload photos of issues; AI assesses urgency, drafts contractor dispatches, and updates owners." },
      { title: "Automated Lease Extraction Engine", description: "Extracts critical dates, payment schedules, and obligations from PDF leases into structured tables." },
      { title: "24/7 Showing & Inquiry Booking Assistant", description: "Answers property questions and schedules viewing tours on agent calendars automatically." },
    ],
    caseExample: {
      title: "Commercial Property Portfolio Lease Tracker",
      description: "Built a document extraction system processing 350+ commercial leases to track upcoming renewal milestones and rent escalations.",
      impact: "Prevented two missed lease renewal deadlines and saved 60+ hours of manual document review.",
    },
    faqs: [
      {
        question: "Can this integrate with Yardi, AppFolio, or RealPage?",
        answer: "Yes, we can sync data with property management platforms via available APIs or secure automated export connectors.",
      },
      {
        question: "Can contractors update work order status on mobile?",
        answer: "Yes, contractors receive a one-click mobile link where they can confirm arrival, upload completion photos, and submit invoices without logging into complex software.",
      },
    ],
  },
  {
    slug: "tech-saas",
    name: "Tech & SaaS Companies",
    tagline: "Senior engineering capacity, scalable cloud backends, and AI feature acceleration.",
    heroDescription:
      "Partner with seasoned software and AI engineers to build net-new features, add intelligent agent workflows, and scale your backend architecture without bloated overhead.",
    challenges: [
      { title: "Slow Product Backlog Velocity", description: "Internal engineering teams are bogged down by tech debt and maintenance, delaying key new feature launches." },
      { title: "AI Feature Hype vs. Reliability", description: "Pressure from customers and investors to add AI capabilities without a clear plan to prevent hallucinations." },
      { title: "Customer Integration Bottlenecks", description: "Enterprise sales stalled because prospects need custom integrations with their internal systems." },
    ],
    solutionsProvided: [
      { title: "Autonomous Engineering Squads", description: "Senior full-stack developers who integrate into your sprint cycles to deliver features on schedule." },
      { title: "Production-Grade AI & RAG Features", description: "Bespoke semantic search, automated summaries, and agent features built directly into your application." },
      { title: "Enterprise Connectors & Webhook Engines", description: "Build scalable API connectors that help your sales team close enterprise deals." },
    ],
    caseExample: {
      title: "B2B Analytics Platform AI Modernization",
      description: "Integrated an LLM-powered natural language reporting assistant that allows non-technical users to query database metrics via conversational text.",
      impact: "Increased weekly active user engagement by 40% within 30 days of release.",
    },
    faqs: [
      {
        question: "Do you write clean tests and documentation?",
        answer: "Yes, all code submitted by our engineers includes unit and integration tests, strict TypeScript types, and comprehensive architecture documentation.",
      },
      {
        question: "How do we manage code reviews and pull requests?",
        answer: "Our engineers submit pull requests directly to your GitHub or GitLab repositories, adhering to your established review standards and linting rules.",
      },
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Industrial Operations",
    tagline: "Modern software and AI automation engineered for factory and assembly efficiency.",
    heroDescription:
      "Help your manufacturing operations reduce manual data entry, streamline supplier quoting, track production stages, and prevent costly dispatch delays.",
    challenges: [
      { title: "Slow Quoting & Custom Estimating", description: "Taking 2–3 days to turn around complex RFQ bid sheets with raw material margin calculations." },
      { title: "Disconnected Shop Floor & Office", description: "Paper job sheets and manual whiteboard scheduling creating discrepancies in inventory and job statuses." },
      { title: "Manual Quality Inspection Records", description: "Paper-based quality sign-offs that are difficult to search during customer audits." },
    ],
    solutionsProvided: [
      { title: "Automated RFQ & Proposal Intake", description: "AI that parses CAD specs, customer parts lists, and drafts pricing quotes in minutes." },
      { title: "Real-Time Work-in-Progress Dashboards", description: "Digital shop-floor terminals tracking machine status, labor hours, and batch completion." },
      { title: "Automated Shipping & Freight Documentation", description: "Generates packing slips, customs declarations, and dispatch notifications automatically." },
    ],
    caseExample: {
      title: "Precision Parts Manufacturer RFQ Automation",
      description: "Implemented an automated quoting pipeline that reads multi-page Excel bid sheets and matches SKUs against raw material pricing.",
      impact: "Reduced quote turnaround from 48 hours to 15 minutes, boosting customer bid win rates by 22%.",
    },
    faqs: [
      {
        question: "Can this integrate with our legacy on-premise ERP?",
        answer: "Yes, we build secure local data bridges that communicate with older on-premise databases without requiring expensive system upgrades.",
      },
      {
        question: "Will shop-floor workers need technical computer training?",
        answer: "No, we design touch-friendly, tablet-optimized interfaces with large buttons and barcode scanners that workers can use with minimal guidance.",
      },
    ],
  },
  {
    slug: "government",
    name: "Government & Public Sector",
    tagline: "Modern citizen service portals, automated permit intake, and secure public workflows.",
    heroDescription:
      "We partner with municipal agencies, public organizations, and government contractors to replace outdated paper processes with modern citizen service portals, automated permit approvals, and transparent public reporting.",
    challenges: [
      { title: "Paper-Heavy Permitting & License Delays", description: "Citizens and local businesses waiting weeks for basic permits due to manual routing between municipal departments." },
      { title: "Accessibility & Compliance Mandates", description: "Legacy government websites failing to meet modern Section 508 and WCAG 2.1 AA accessibility guidelines." },
      { title: "Siloed Legacy Databases & Public Records", description: "Valuable public sector data trapped in on-premise mainframe databases with no unified inter-departmental visibility." },
    ],
    solutionsProvided: [
      { title: "Digital Citizen Permitting & Licensing Portals", description: "Self-service municipal portals with online fee processing, document validation, and real-time application status tracking." },
      { title: "Accessible, Multi-Lingual Citizen Interfaces", description: "Fully compliant with WCAG 2.1 AA and Section 508, delivering responsive, mobile-first civic access for all constituents." },
      { title: "Secure Inter-Departmental Workflow Engines", description: "Digital routing, role-based approval hierarchies, and cryptographic audit trails that eliminate bureaucratic bottlenecks." },
    ],
    caseExample: {
      title: "Municipal Building Permitting & Inspection Automation Portal",
      description: "Replaced paper permit applications for a regional city council with a modern web portal featuring GIS mapping, plan reviews, and inspector mobile access.",
      impact: "Reduced average permit turnaround from 24 days to 4 business days while cutting in-person municipal desk queues by 70%.",
    },
    faqs: [
      {
        question: "Do your public sector solutions comply with WCAG accessibility standards?",
        answer: "Yes, every public sector web interface is engineered from the ground up to meet or exceed WCAG 2.1 AA and Section 508 accessibility criteria.",
      },
      {
        question: "Can these applications be hosted on government-approved cloud providers?",
        answer: "Yes, we deploy onto AWS GovCloud, Microsoft Azure Government, or secure on-premise government datacenters with strict compliance architectures.",
      },
    ],
  },
  {
    slug: "legal",
    name: "Legal Sector & Law Firms",
    tagline: "AI contract review, encrypted client onboarding, and matter management automation.",
    heroDescription:
      "We help law firms, corporate legal departments, and legaltech founders engineer intelligent contract analysis engines, secure client onboarding hubs, and automated billing workflows that let fee-earners focus on high-value counsel.",
    challenges: [
      { title: "Labor-Intensive Contract Review & Redlining", description: "Attorneys spending hours manually proofreading standard agreements, NDAs, and vendor contracts for non-standard terms." },
      { title: "Client Onboarding & KYC Bottlenecks", description: "Lengthy email exchanges collecting identity documents, engagement letters, and conflicts checks delaying matter initiation." },
      { title: "Dispersed Precedents & Firm Knowledge", description: "Valuable past briefs, memos, and clauses scattered across unsearchable file folders and outdated document management servers." },
    ],
    solutionsProvided: [
      { title: "AI Contract Analysis & Clause Verification", description: "Private semantic analysis that flags risky terms against your firm's playbooks and drafts standard fallback clauses." },
      { title: "Encrypted Client Intake & Matter Onboarding Hub", description: "Branded client portal with automated document intake, conflict-check routing, and digital engagement letter execution." },
      { title: "Private Semantic Knowledge & Precedent Search", description: "Secure, confidential vector search across your firm's historical work product with zero external model training." },
    ],
    caseExample: {
      title: "Commercial Law Firm Contract Review & Precedent Engine",
      description: "Implemented a private AI contract analysis platform indexing 12 years of firm precedents with automated clause risk scoring.",
      impact: "Reduced routine contract drafting time by 55% while maintaining 100% data confidentiality and zero external API exposure.",
    },
    faqs: [
      {
        question: "How do you protect attorney-client privilege and confidentiality?",
        answer: "All legal AI systems run on dedicated, private infrastructure with strict zero-data-retention policies. Your client data is never stored externally or used to train public models.",
      },
      {
        question: "Can this integrate with legal practice management platforms?",
        answer: "Yes, we integrate with industry-standard legal software including Clio, NetDocuments, iManage, Thomson Reuters, and custom firm databases.",
      },
    ],
  },
  // Backward-compatible aliases for legacy routes
  {
    slug: "saas-and-technology",
    name: "SaaS & Technology Companies",
    tagline: "Engineering muscle and AI integration to accelerate your product roadmap.",
    heroDescription:
      "Partner with experienced software and AI engineers to build net-new features, add intelligent agent workflows, and scale your backend architecture.",
    challenges: [
      { title: "Slow Product Backlog Velocity", description: "Internal engineering teams are bogged down by tech debt and maintenance, delaying key new feature launches." },
      { title: "AI Feature Hype vs. Reliability", description: "Pressure from customers and investors to add AI capabilities without a clear plan to prevent hallucinations." },
      { title: "Customer Integration Bottlenecks", description: "Enterprise sales stalled because prospects need custom integrations with their internal systems." },
    ],
    solutionsProvided: [
      { title: "Autonomous Engineering Squads", description: "Senior full-stack developers who integrate into your sprint cycles to deliver features on schedule." },
      { title: "Production-Grade AI & RAG Features", description: "Bespoke semantic search, automated summaries, and agent features built directly into your application." },
      { title: "Enterprise Connectors & Webhook Engines", description: "Build scalable API connectors that help your sales team close enterprise deals." },
    ],
    caseExample: {
      title: "B2B Analytics Platform AI Modernization",
      description: "Integrated an LLM-powered natural language reporting assistant that allows non-technical users to query database metrics via conversational text.",
      impact: "Increased weekly active user engagement by 40% within 30 days of release.",
    },
    faqs: [
      {
        question: "Do you write clean tests and documentation?",
        answer: "Yes, all code submitted by our engineers includes unit and integration tests, strict TypeScript types, and comprehensive architecture documentation.",
      },
      {
        question: "How do we manage code reviews and pull requests?",
        answer: "Our engineers submit pull requests directly to your GitHub or GitLab repositories, adhering to your established review standards and linting rules.",
      },
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services & Legal Firms",
    tagline: "Automate client onboarding, document intake, and internal research.",
    heroDescription:
      "Help consulting firms, accounting practices, and legal teams eliminate administrative overhead so fee-earners can dedicate more time to billable advisory work.",
    challenges: [
      { title: "Tedious Client Onboarding", description: "Chasing clients for compliance files, KYC identity documents, and contract signatures via messy email chains." },
      { title: "Scattered Document Knowledge", description: "Hours spent searching internal archives for past precedents, memos, and case strategies." },
      { title: "Manual Invoicing & Timesheet Assembly", description: "Compiling monthly client billing from multiple trackers drains administrative energy." },
    ],
    solutionsProvided: [
      { title: "Self-Service Client Onboarding Hub", description: "Branded client portal with automatic file checklists, reminder emails, and status tracking." },
      { title: "Private Semantic Knowledge Search", description: "Secure search across firm archives with direct page citations and strict confidentiality." },
      { title: "Automated Billing & Engagement Letter Workflows", description: "Generates custom client proposals, scopes of work, and billing drafts in one click." },
    ],
    caseExample: {
      title: "Corporate Advisory Firm Client Intake Automation",
      description: "Engineered a secure client onboarding portal with automatic file validation and automated progress reminders.",
      impact: "Reduced client onboarding cycle time from 12 days to under 48 hours.",
    },
    faqs: [
      {
        question: "How do you protect client attorney-client privilege and confidentiality?",
        answer: "All enterprise knowledge systems are deployed on private, encrypted infrastructure with zero data sharing, strict NDA compliance, and department-level access controls.",
      },
      {
        question: "Can the portal match our firm's existing branding?",
        answer: "Yes, client portals are fully white-labeled with your custom domain, firm logo, typography, and styling.",
      },
    ],
  },
];

/* =========================================================================
   LOCATIONS WE SERVE (Transparent remote collaboration)
   ========================================================================= */
export const LOCATIONS_DATA: LocationItem[] = [
  {
    slug: "usa",
    country: "United States",
    region: "North America",
    headline: "Engineering AI Solutions & Custom Software for US Businesses",
    description:
      "We partner with growing B2B companies, startups, and mid-market enterprises across the United States to build custom software, AI workflows, and provide senior engineering talent.",
    collaborationModel:
      "Distributed remote engineering with dedicated daily collaboration during US Eastern and Pacific business hours.",
    timezonesCovered: "EST (UTC-5) / CST (UTC-6) / PST (UTC-8) with minimum 4+ hours daily concurrent overlap.",
    keyServices: [
      { title: "AI Workflow Automation", desc: "Automate back-office administrative tasks and manual data processing." },
      { title: "Custom Web Applications", desc: "High-performance SaaS and internal tools built on Next.js and TypeScript." },
      { title: "Dedicated Engineering Talent", desc: "Senior AI and full-stack engineers to accelerate your product sprints." },
    ],
    marketFocus: [
      "Mid-market manufacturing & distribution",
      "B2B SaaS product engineering",
      "Professional service operations automation",
    ],
    faqs: [
      {
        question: "How do you manage communication across time zones?",
        answer: "We hold daily video standups during your morning hours, maintain real-time Slack/Teams communication, and provide clear written progress updates at the end of each day.",
      },
      {
        question: "How are payments handled for US clients?",
        answer: "We support direct US domestic wire (ACH), credit card, or international invoicing with standard net-15 / net-30 terms.",
      },
    ],
  },
  {
    slug: "uk",
    country: "United Kingdom",
    region: "Europe",
    headline: "AI Engineering & Custom Software for UK Businesses",
    description:
      "Helping UK businesses in London, Manchester, Birmingham, and across the nation streamline operations, eliminate repetitive administrative work, and build better digital products.",
    collaborationModel:
      "Seamless real-time daily alignment with GMT / BST business hours, transparent project milestones, and strict GDPR data compliance.",
    timezonesCovered: "GMT / BST (UTC+0 / UTC+1) with extensive daily working hour alignment.",
    keyServices: [
      { title: "Intelligent Document Processing", desc: "Automate invoice, quote, and compliance document extraction." },
      { title: "Enterprise Web Platforms", desc: "Robust custom business platforms built for British operating environments." },
      { title: "Senior AI Talent", desc: "Experienced engineers fluent in modern LLM architectures." },
    ],
    marketFocus: [
      "Commercial distribution & logistics",
      "Legal & financial professional services",
      "Growing tech scaleups",
    ],
    faqs: [
      {
        question: "Are your systems compliant with UK GDPR regulations?",
        answer: "Yes, we adhere strictly to UK GDPR requirements, including data minimization, encryption at rest and in transit, and sovereign cloud hosting options in UK data centers.",
      },
      {
        question: "What currencies do you accept for UK engagements?",
        answer: "We support billing in British Pounds (GBP) via direct UK domestic bank transfer.",
      },
    ],
  },
  {
    slug: "uae",
    country: "United Arab Emirates",
    region: "Middle East",
    headline: "AI Engineering & Digital Solutions for UAE Businesses",
    description:
      "Supporting dynamic businesses in Dubai, Abu Dhabi, and across the Emirates with world-class AI engineering, custom enterprise portals, and automated operations.",
    collaborationModel:
      "Close timezone alignment with Gulf Standard Time (GST), dedicated technical leads, and rapid turnaround on project deliverables.",
    timezonesCovered: "Gulf Standard Time (GST, UTC+4) with full concurrent business day overlap.",
    keyServices: [
      { title: "Arabic & English AI Chatbots", desc: "Bilingual conversational agents for government, real estate, and retail." },
      { title: "Commercial Operations Portals", desc: "Enterprise dashboards managing field operations, billing, and inventory." },
      { title: "Custom Software Engineering", desc: "Tailored business software designed for rapid regional expansion." },
    ],
    marketFocus: [
      "Real estate & property management",
      "Trading, distribution & supply chain",
      "Financial & corporate advisory",
    ],
    faqs: [
      {
        question: "Do your AI solutions support Arabic natural language processing?",
        answer: "Yes, our AI agents and chatbots natively understand Modern Standard Arabic and regional Gulf dialects with high conversational accuracy.",
      },
      {
        question: "Can you accommodate UAE working weeks (Monday through Friday)?",
        answer: "Yes, our teams operate on the standard UAE business week with dedicated availability throughout your working days.",
      },
    ],
  },
  {
    slug: "saudi-arabia",
    country: "Saudi Arabia",
    region: "Middle East",
    headline: "Digital Engineering & AI Solutions for Saudi Arabian Enterprises",
    description:
      "Aligning with Saudi Arabia's Vision 2030 digital transformation goals to build intelligent automation, custom software, and AI solutions for enterprises in Riyadh, Jeddah, and the Eastern Province.",
    collaborationModel:
      "High-velocity digital engineering with strict data governance, local hosting capabilities, and seamless AST timezone coordination.",
    timezonesCovered: "Arabia Standard Time (AST, UTC+3) with comprehensive business day overlap.",
    keyServices: [
      { title: "Enterprise AI & RAG", desc: "Private knowledge assistants built to strict institutional governance standards." },
      { title: "Custom ERP & Operations Software", desc: "Industrial systems built to streamline supply chain and asset tracking." },
      { title: "Workflow Automation", desc: "Eliminate paper processes and accelerate cross-department approvals." },
    ],
    marketFocus: [
      "Industrial manufacturing & logistics",
      "Real estate & mega-project development",
      "Corporate & commercial services",
    ],
    faqs: [
      {
        question: "Can systems be hosted on Saudi-based cloud infrastructure?",
        answer: "Yes, we support deployments on local hyperscalers such as AWS Riyadh, Google Cloud Dammam, and Oracle Cloud Jeddah to meet national data residency requirements.",
      },
      {
        question: "Do you support Arabic user interfaces?",
        answer: "Yes, all applications can be developed with complete Right-to-Left (RTL) Arabic typography and bilingual language toggle capabilities.",
      },
    ],
  },
  {
    slug: "india",
    country: "India",
    region: "South Asia",
    headline: "AI Development Company & Custom Software Engineering in India",
    description:
      "Headquartered with deep engineering roots in Ahmedabad, Gujarat, ZNX Labs partners with high-growth enterprises, industrial manufacturers, exporters, and technology companies across India to build custom digital products, autonomous AI agents, and intelligent workflow automation.",
    collaborationModel:
      "Direct technical pairing with Indian Standard Time (IST) working hours, agile sprint velocity, on-site collaboration in Ahmedabad/Gujarat, and transparent delivery.",
    timezonesCovered: "Indian Standard Time (IST, UTC+5:30) with 100% real-time workday collaboration.",
    keyServices: [
      { title: "AI Agent & Workflow Automation", desc: "Automate quotation handling, vendor reconciliation, invoice processing, and CRM pipelines." },
      { title: "Custom Software & ERP Development", desc: "High-throughput web applications, custom CRM/ERP portals, and operational databases." },
      { title: "Dedicated Engineering Teams", desc: "Scale your technical capacity with seasoned full-stack, RAG, and AI engineers." },
    ],
    marketFocus: [
      "Industrial manufacturing & export engineering in Gujarat & Ahmedabad",
      "Fast-growing B2B tech and SaaS enterprises",
      "Chemicals, pharmaceuticals, textiles & distribution operations",
    ],
    faqs: [
      {
        question: "How do we get started on an engagement in India or Gujarat?",
        answer: "We begin with a technical discovery call, review your current workflow, and provide a clear, fixed-milestone roadmap for implementation, with options for in-person workshops in Ahmedabad.",
      },
      {
        question: "What currencies and payment methods are supported?",
        answer: "We support direct INR domestic bank transfers (NEFT / RTGS / UPI) with standard GST-compliant tax invoices.",
      },
    ],
  },
];
