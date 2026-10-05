export interface ServiceItem {
  slug: string;
  title: string;
  tagline: string;
  heroDescription: string;
  summary: string;
  capabilities: {
    title: string;
    description: string;
  }[];
  capabilitiesBadges: string[];
  technologies: string[];
  whyChoose: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  relatedCaseStudyIds: string[];
  extraSection?: {
    title: string;
    subtitle: string;
    description: string;
    features: { title: string; description: string }[];
    bullets?: string[];
  };
}

export const servicesData: ServiceItem[] = [
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    tagline: "Build Intelligent Applications with AI",
    heroDescription:
      "Build intelligent applications with Generative AI, LLM applications, AI Agents, RAG, Machine Learning, Computer Vision, NLP, Recommendation Systems, AI Automation, Predictive Analytics, and custom ML models.",
    summary:
      "Build intelligent applications with Generative AI, LLM applications, AI Agents, RAG, Machine Learning, Computer Vision, NLP, Recommendation Systems, AI Automation, Predictive Analytics, and custom ML models.",
    capabilitiesBadges: [
      "Generative AI",
      "LLM Applications",
      "AI Agents",
      "RAG",
      "Machine Learning",
      "Computer Vision",
      "NLP & Recommendation Systems",
    ],
    capabilities: [
      {
        title: "Generative AI",
        description:
          "Build applications powered by generative AI capabilities that create text, code, visual assets, and dynamic business interfaces.",
      },
      {
        title: "LLM Applications",
        description:
          "Build production-grade applications using Large Language Models tailored to specific business use cases and compliance boundaries.",
      },
      {
        title: "AI Agents",
        description:
          "Develop autonomous and semi-autonomous AI-powered agents for intelligent application workflows, multi-step execution, and tool use.",
      },
      {
        title: "Retrieval-Augmented Generation (RAG)",
        description:
          "Build AI applications using enterprise retrieval-augmented generation grounded in private knowledge bases and vector stores.",
      },
      {
        title: "Machine Learning",
        description:
          "Develop machine learning solutions and custom models trained or fine-tuned on domain-specific requirements and telemetry.",
      },
      {
        title: "Computer Vision",
        description:
          "Build vision AI solutions that process, classify, segment, and detect patterns in visual data, images, and live video streams.",
      },
      {
        title: "Natural Language Processing",
        description:
          "Apply advanced NLP capabilities to applications that extract entities, summarize long-form documents, and parse unstructured text.",
      },
      {
        title: "Recommendation Systems",
        description:
          "Build personalized recommendation engines that improve engagement and conversion across customer journeys.",
      },
      {
        title: "AI Automation",
        description:
          "Apply AI to automate repetitive business and technology workflows, reducing cycle times and operational friction.",
      },
      {
        title: "Predictive Analytics",
        description:
          "Use predictive analytics and time-series modeling to derive actionable foresight and trend projections from historical data.",
      },
      {
        title: "Custom ML Models",
        description:
          "Develop and train custom machine learning models architected specifically around unique business parameters and proprietary data.",
      },
    ],
    technologies: [
      "OpenAI",
      "TensorFlow",
      "LangChain",
      "PyTorch",
      "Anthropic Claude",
      "Pinecone",
      "LangGraph",
      "MLflow",
      "Google Gemini",
      "Qdrant",
      "LlamaIndex",
      "Hugging Face",
    ],
    whyChoose: [
      "AI Across Multiple Capabilities: We work across Generative AI, LLMs, Agents, RAG, ML, Computer Vision, and Predictive Analytics.",
      "Applied to Real Business Requirements: Proven track record of applying AI directly into operational workflows, products, and user needs.",
      "AI + Software Engineering: Deep software engineering depth to integrate intelligent capabilities securely into existing enterprise stacks.",
      "AI-Powered Development: Co-development with copilots (Claude Code, ChatGPT Codex, Copilot, Cursor AI) or without copilots based on organizational policy.",
    ],
    process: [
      {
        step: "01",
        title: "Define the AI Use Case",
        description:
          "Understand the business problem, target users, requirements, available data assets, and the exact role AI needs to play.",
      },
      {
        step: "02",
        title: "Select the AI Approach",
        description:
          "Determine the appropriate AI architecture, whether Generative AI, LLMs, RAG, AI Agents, Machine Learning, or custom models.",
      },
      {
        step: "03",
        title: "Develop & Evaluate",
        description:
          "Build the AI capability, run rigorous benchmark evaluations, test edge cases, and ensure precision against business metrics.",
      },
      {
        step: "04",
        title: "Integrate & Iterate",
        description:
          "Integrate the AI solution into production applications, setup telemetry, and refine models based on live user feedback.",
      },
    ],
    relatedCaseStudyIds: ["avifires", "galaxy-one"],
  },
  {
    slug: "ai-deployment",
    title: "AI Deployment",
    tagline: "Take AI Solutions from Development to Deployment",
    heroDescription:
      "Take AI solutions from development to deployment with the infrastructure and integration required for production environments.",
    summary:
      "Take AI solutions from development to deployment with the infrastructure and integration required for production environments.",
    capabilitiesBadges: [
      "AI Infrastructure",
      "Model Deployment",
      "AI Integration",
      "Production Environments",
    ],
    capabilities: [
      {
        title: "AI Application Deployment",
        description:
          "Deploy AI and ML applications into production environments with the required application and infrastructure setup.",
      },
      {
        title: "LLM & GenAI Deployment",
        description:
          "Deploy production-ready applications powered by LLMs and Generative AI models with latency and token-cost optimization.",
      },
      {
        title: "Model Serving & Inference",
        description:
          "Set up scalable model-serving infrastructure for reliable, highly concurrent, and low-latency inference.",
      },
      {
        title: "Cloud AI Infrastructure",
        description:
          "Build and configure cloud infrastructure required to run high-throughput AI workloads at scale across AWS, Azure, and GCP.",
      },
      {
        title: "AI API & System Integration",
        description:
          "Integrate AI capabilities seamlessly with existing microservices, APIs, relational databases, and enterprise systems.",
      },
      {
        title: "Containerization & Orchestration",
        description:
          "Containerize AI services with Docker and manage auto-scaling workloads using Kubernetes and managed cloud clusters.",
      },
      {
        title: "MLOps & Model Lifecycle",
        description:
          "Support model versioning, feature stores, automated retraining, and lifecycle management across staging and production.",
      },
      {
        title: "AI Performance & Scalability",
        description:
          "Optimize AI workloads for production reliability, memory utilization, throughput, and compute-cost efficiency.",
      },
      {
        title: "Monitoring & Observability",
        description:
          "Implement full-stack observability tracking latency, drift, hallucination rates, error budgets, and system health.",
      },
      {
        title: "Production AI Security",
        description:
          "Apply zero-trust security practices across AI APIs, container registries, credential vaults, and deployed models.",
      },
    ],
    technologies: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Terraform",
      "NVIDIA",
      "MLflow",
      "Prometheus",
      "Grafana",
      "FastAPI",
    ],
    whyChoose: [
      "Production-Focused Engineering: We focus on operational readiness, SLAs, uptime, and high availability.",
      "Cloud & Infrastructure Expertise: Deep expertise across container orchestration, cloud GPUs, and infrastructure-as-code.",
      "AI + Software Engineering: Seamless pairing of machine learning artifacts with robust distributed backend architectures.",
      "Scalable Architecture: Architectures designed to scale horizontally as request volumes and inference demands expand.",
    ],
    process: [
      {
        step: "01",
        title: "Assess the Application",
        description:
          "Understand the AI application, its dependencies, compute profiles, data access requirements, and target production environment.",
      },
      {
        step: "02",
        title: "Prepare the Deployment Environment",
        description:
          "Set up infrastructure-as-code, cluster orchestration, networking, container registries, and API gateways.",
      },
      {
        step: "03",
        title: "Deploy & Integrate",
        description:
          "Deploy the containerized models and services, configure rate limiting, and connect with existing production workflows.",
      },
      {
        step: "04",
        title: "Monitor & Optimize",
        description:
          "Continuously observe inference latency, error rates, and resource utilization, optimizing cost and throughput.",
      },
    ],
    relatedCaseStudyIds: ["avifires", "kddi-povo"],
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    tagline: "Build Custom Software for Your Business",
    heroDescription:
      "Build custom software tailored to your business requirements, workflows, users, and technology environment.",
    summary:
      "Build custom software tailored to your business requirements, workflows, users, and technology environment.",
    capabilitiesBadges: [
      "Custom Applications",
      "Digital Products",
      "Business Workflows",
      "Platform Development",
    ],
    capabilities: [
      {
        title: "Web Applications",
        description:
          "Custom web applications designed around your business processes, target users, and functional requirements.",
      },
      {
        title: "Enterprise Applications",
        description:
          "Software solutions engineered to support complex multi-departmental business processes, permissions, and workflows.",
      },
      {
        title: "Business Platforms",
        description:
          "Build cohesive digital platforms that bring together core business processes, internal teams, data, and 3rd-party integrations.",
      },
      {
        title: "Customer-Facing Applications",
        description:
          "Applications designed around intuitive customer journeys, high conversion, and seamless digital experiences.",
      },
      {
        title: "API & System Integrations",
        description:
          "Connect distributed applications, services, third-party APIs, and legacy systems to maintain data synchronization.",
      },
      {
        title: "Legacy Application Modernization",
        description:
          "Modernize legacy software to improve architecture, performance, security, maintainability, and feature agility.",
      },
      {
        title: "Custom Backend Development",
        description:
          "Develop robust backend microservices, REST/GraphQL APIs, distributed queues, and resilient database architectures.",
      },
      {
        title: "Application Performance Engineering",
        description:
          "Audit, profile, and optimize application speed, memory footprint, database queries, and response latencies.",
      },
    ],
    technologies: [
      "React",
      "Next.js",
      ".NET",
      "Python",
      "FastAPI",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
    whyChoose: [
      "Business-Aligned Software Engineering: We develop software customized around your workflows rather than forcing generic templates.",
      "End-to-End Application Experience: Proven track record across frontend, backend, database design, DevOps, and testing.",
      "Modernization & Migration: Deep experience refactoring legacy systems to modern, maintainable cloud-native stacks.",
      "Software + AI Integration: Capabilities to infuse artificial intelligence directly into the software architecture.",
    ],
    process: [
      {
        step: "01",
        title: "Understand Requirements",
        description:
          "Analyze business objectives, user personas, technical constraints, data schemas, and integration points.",
      },
      {
        step: "02",
        title: "Design the Solution",
        description:
          "Define application architecture, database schemas, API contracts, design mockups, and the delivery roadmap.",
      },
      {
        step: "03",
        title: "Build & Integrate",
        description:
          "Develop modular code following clean architecture patterns, automated test coverage, and continuous integration.",
      },
      {
        step: "04",
        title: "Test, Deploy & Improve",
        description:
          "Conduct regression testing, performance audits, security scans, and deploy with zero-downtime deployment strategies.",
      },
    ],
    relatedCaseStudyIds: ["pnc-bank", "yapsody"],
  },
  {
    slug: "data-engineering",
    title: "Data Engineering",
    tagline: "Engineer Data for AI & ML Applications",
    heroDescription:
      "Data preprocessing, normalization, and engineering to make data suitable for AI & ML applications.",
    summary:
      "Data preprocessing, normalization, and engineering to make data suitable for AI & ML applications.",
    capabilitiesBadges: [
      "Data Collection",
      "Data Processing",
      "Dashboards",
      "Databricks Partner",
    ],
    capabilities: [
      {
        title: "Data Pipeline Development",
        description:
          "Design and develop robust batch and streaming data pipelines to move data between ingestion sources and downstream systems.",
      },
      {
        title: "Data Integration",
        description:
          "Harmonize data from heterogeneous enterprise databases, SaaS APIs, and third-party feeds into unified data repositories.",
      },
      {
        title: "Data Preparation for AI & ML",
        description:
          "Clean, normalize, structure, and feature-engineer raw datasets to make them optimal for training and inference.",
      },
      {
        title: "Data Processing & Transformation",
        description:
          "Build scalable ETL/ELT transformation workflows with Apache Spark, dbt, and Databricks.",
      },
      {
        title: "Data Quality Engineering",
        description:
          "Establish data validation rules, anomaly detection, schema enforcement, and automated quality monitoring.",
      },
      {
        title: "Data Platform Engineering",
        description:
          "Architect scalable modern data lakehouses, warehouses, and analytics storage infrastructure.",
      },
      {
        title: "Legacy Data Modernization",
        description:
          "Migrate legacy on-premises databases and stored procedures into modern cloud-native data platforms.",
      },
      {
        title: "Data Engineering for AI Applications",
        description:
          "Build the specialized data access layers, vector embeddings pipelines, and feature stores that power intelligent AI systems.",
      },
    ],
    extraSection: {
      title: "Databricks Data & AI Services",
      subtitle: "Official Databricks Partner with Certified Expertise",
      description:
        "As a Databricks Partner with certified resources and dedicated expertise, Avisoft helps organizations build, modernize, integrate, and operate data and AI workloads on the Databricks Lakehouse platform.",
      features: [
        {
          title: "Databricks Implementation",
          description:
            "Implement and configure Databricks environments around your specific governance, compute, and security requirements.",
        },
        {
          title: "Data Engineering on Databricks",
          description:
            "Build robust Delta Lake pipelines and processing workflows utilizing Apache Spark and Unity Catalog.",
        },
        {
          title: "Data & AI Workloads",
          description:
            "Develop, operationalize, and support analytics, machine learning, and Generative AI workloads on Databricks.",
        },
        {
          title: "Platform Integration",
          description:
            "Integrate Databricks with existing cloud storage, transactional databases, BI platforms, and operational applications.",
        },
        {
          title: "Databricks Migration & Modernization",
          description:
            "Support organizations in modernizing legacy Hadoop/Spark jobs and transitioning workloads to Databricks.",
        },
        {
          title: "Databricks Engineering & Support",
          description:
            "Access certified Databricks engineers for implementation, pipeline maintenance, performance tuning, and ongoing support.",
        },
      ],
      bullets: [
        "Certified Databricks Partner",
        "Certified Databricks Solutions Architects & Engineers",
        "Dedicated Big Data & ML Engineering Practice",
        "Proven Track Record in Enterprise Lakehouse Deployments",
      ],
    },
    technologies: [
      "Apache Spark",
      "Databricks",
      "Apache Kafka",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Python",
      "Pandas",
      "Docker",
      "Kubernetes",
      "AWS",
      "Google Cloud",
    ],
    whyChoose: [
      "Data Engineering for AI & ML: Laser focus on preparing clean data foundations required for machine learning success.",
      "Databricks Partnership: Direct partnership credentials, certified resources, and deep platform expertise.",
      "High-Volume Processing: Experience engineering pipelines handling terabytes of operational and analytical data.",
      "End-to-End Reliability: Comprehensive data quality checks, schema evolution, and automated error handling.",
    ],
    process: [
      {
        step: "01",
        title: "Understand Data Requirements",
        description:
          "Map data sources, formats, velocity, security policies, and downstream consumption requirements.",
      },
      {
        step: "02",
        title: "Assess & Prepare the Data",
        description:
          "Audit data quality, profile schema variances, and design transformation and normalization specifications.",
      },
      {
        step: "03",
        title: "Engineer the Data Workflow",
        description:
          "Implement scalable pipelines, lakehouse tables, vector stores, and automated ingestion mechanisms.",
      },
      {
        step: "04",
        title: "Validate & Optimize",
        description:
          "Benchmark query performance, enforce data quality SLAs, and optimize storage and compute costs.",
      },
    ],
    relatedCaseStudyIds: ["spendgo", "helical-insight"],
  },
  {
    slug: "enterprise-platform-services",
    title: "Enterprise Platform Services",
    tagline: "Implement Enterprise & Open-Source Platforms",
    heroDescription:
      "Implementation services across enterprise and open-source platforms, including Apache Kafka, Apache Spark, Apache OFBiz, ServiceNow, ERPNext, Odoo, SuiteCRM, Mautic, Drupal, WooCommerce, Shopify, Magento, Saleor, WordPress, Wix, and Webflow.",
    summary:
      "Implementation services across enterprise and open-source platforms to modernize and scale business systems.",
    capabilitiesBadges: [
      "Enterprise Platforms",
      "Open-Source Platforms",
      "Commerce Platforms",
      "Content Platforms",
    ],
    capabilities: [
      {
        title: "Platform Implementation",
        description:
          "Implement enterprise and open-source platforms customized to your technology environment and operational requirements.",
      },
      {
        title: "Platform Configuration & Customization",
        description:
          "Configure workflows, business logic, user roles, and UI components to align with unique business processes.",
      },
      {
        title: "System Integration",
        description:
          "Integrate enterprise platforms with third-party software, internal databases, microservices, and CRM/ERP systems.",
      },
      {
        title: "Platform Modernization",
        description:
          "Upgrade and refactor existing platform deployments to newer versions, improving performance and security.",
      },
      {
        title: "Data & Application Migration",
        description:
          "Safely migrate legacy business data and user accounts into newly deployed platforms with zero data loss.",
      },
      {
        title: "Ongoing Platform Engineering",
        description:
          "Provide continuous development support, bug remediation, security patches, and feature enhancements.",
      },
    ],
    technologies: [
      "Apache Kafka",
      "Apache Spark",
      "Apache OFBiz",
      "ServiceNow",
      "ERPNext",
      "Odoo",
      "SuiteCRM",
      "Mautic",
      "Drupal",
      "WordPress",
      "Shopify",
      "Magento",
      "Saleor",
      "Webflow",
      "Wix",
      "WooCommerce",
    ],
    whyChoose: [
      "Deep Open-Source & Enterprise Expertise: Experience across dozens of established platforms and frameworks.",
      "Custom Extension Capabilities: Ability to author custom plugins, modules, and API connectors for any platform.",
      "Vendor Agnostic Approach: We recommend and implement the platform that best fits your business model and budget.",
      "Enterprise Grade Support: Structured maintenance, monitoring, and ongoing engineering services.",
    ],
    process: [
      {
        step: "01",
        title: "Understand Requirements",
        description:
          "Analyze organizational workflows, user permissions, functional requirements, and integration architecture.",
      },
      {
        step: "02",
        title: "Select & Plan the Platform Approach",
        description:
          "Evaluate suitable platforms, plan customization scope, data migration strategy, and deployment timeline.",
      },
      {
        step: "03",
        title: "Implement & Integrate",
        description:
          "Configure the platform, develop custom modules, connect APIs, and execute data migration scripts.",
      },
      {
        step: "04",
        title: "Validate & Evolve",
        description:
          "Perform user acceptance testing, train administrative staff, and provide continuous enhancements.",
      },
    ],
    relatedCaseStudyIds: ["spendgo", "fdb"],
  },
  {
    slug: "saas-implementation",
    title: "SaaS Implementation",
    tagline: "Implement and Integrate SaaS Platforms",
    heroDescription:
      "Implement and integrate SaaS platforms to support your business and operational requirements.",
    summary:
      "Implement and integrate SaaS platforms to support your business and operational requirements.",
    capabilitiesBadges: [
      "SaaS Product Setup",
      "API Integration",
      "Workflow Automation",
      "Data Migration",
    ],
    capabilities: [
      {
        title: "SaaS Product Implementation",
        description:
          "Configure and deploy SaaS products to support specific operational departments, teams, and business functions.",
      },
      {
        title: "SaaS Onboarding & Adoption",
        description:
          "Facilitate seamless organizational onboarding, configuring user privileges and aligning software with team processes.",
      },
      {
        title: "SaaS Application Integration",
        description:
          "Connect SaaS products with existing internal systems and databases via webhooks, REST APIs, and middleware.",
      },
      {
        title: "SaaS Data & Workflow Integration",
        description:
          "Automate cross-platform data synchronization, eliminating manual duplicate data entry across disparate tools.",
      },
      {
        title: "SaaS Ecosystem Consolidation",
        description:
          "Audit tool sprawl and consolidate fragmented subscriptions into integrated, cost-efficient platforms.",
      },
      {
        title: "SaaS Platform Transition",
        description:
          "Migrate operations from legacy spreadsheets or on-premise software into scalable cloud SaaS platforms.",
      },
    ],
    technologies: [
      "Salesforce",
      "HubSpot",
      "ServiceNow",
      "Microsoft 365",
      "REST APIs",
      "GraphQL",
      "Webhooks",
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "PostgreSQL",
      "MySQL",
    ],
    whyChoose: [
      "Connected Business Workflows: We ensure SaaS tools talk to each other and reinforce end-to-end business operations.",
      "Custom Middleware & Integration: Deep capability in bridging gaps between commercial SaaS tools and proprietary databases.",
      "Secure Data Handling: Strict compliance with enterprise encryption, access policies, and data residency guidelines.",
      "Rapid Time-to-Value: Agile implementation blueprints that get software up and running without business disruption.",
    ],
    process: [
      {
        step: "01",
        title: "Understand Business Requirements",
        description:
          "Document business operations, departmental handoffs, data inputs, and system dependencies.",
      },
      {
        step: "02",
        title: "Plan the SaaS Environment",
        description:
          "Architect field mappings, custom objects, automated triggers, user role hierarchies, and API endpoints.",
      },
      {
        step: "03",
        title: "Implement & Connect",
        description:
          "Configure software, write automated sync scripts, integrate webhooks, and validate end-to-end workflows.",
      },
      {
        step: "04",
        title: "Validate & Enable Adoption",
        description:
          "Conduct user acceptance tests, verify report accuracy, and provide post-launch operational tuning.",
      },
    ],
    relatedCaseStudyIds: ["yapsody", "helical-insight"],
  },
  {
    slug: "end-to-end-consultancy",
    title: "End-to-End Consultancy",
    tagline: "End-to-End Technology Consultancy",
    heroDescription:
      "Technology consultancy across your product and engineering journey, from requirements and technology decisions through implementation.",
    summary:
      "Technology consultancy across your product and engineering journey, from requirements and technology decisions through implementation.",
    capabilitiesBadges: [
      "Product Strategy",
      "Architecture Design",
      "Technology Selection",
      "Engineering Guidance",
    ],
    capabilities: [
      {
        title: "Product & Technology Strategy",
        description:
          "Define the technical direction and technology roadmaps for new digital products, platforms, and modernization initiatives.",
      },
      {
        title: "Requirements & Solution Definition",
        description:
          "Translate complex business goals and stakeholder expectations into rigorous technical specifications and scope.",
      },
      {
        title: "Technology Selection",
        description:
          "Objectively evaluate frameworks, clouds, databases, and third-party vendors to choose the optimal architecture.",
      },
      {
        title: "Architecture & System Design",
        description:
          "Design scalable, fault-tolerant system blueprints encompassing microservices, data layers, and cloud infrastructure.",
      },
      {
        title: "Product & Engineering Planning",
        description:
          "Establish sprint methodologies, team composition, resource allocations, and technical milestone planning.",
      },
      {
        title: "Existing Technology Assessment",
        description:
          "Conduct comprehensive audits of codebase health, security posture, technical debt, and scalability bottlenecks.",
      },
      {
        title: "Modernization & Transformation",
        description:
          "Architect gradual transformation plans that migrate monolithic systems to microservices with zero business disruption.",
      },
      {
        title: "AI Adoption & Technology Advisory",
        description:
          "Identify high-impact opportunities for incorporating AI and automation into existing business systems.",
      },
    ],
    technologies: [
      "System Architecture",
      "Cloud Strategy",
      "Microservices",
      "API Governance",
      "Security Audits",
      "AI Strategy",
      "DevOps Blueprints",
      "Database Optimization",
    ],
    whyChoose: [
      "Pragmatic Engineering Focus: Real-world engineering advice grounded in decades of shipping production systems.",
      "Technology Modernization Experience: Proven track record auditing and modernizing critical high-scale platforms.",
      "Business & Technical Alignment: Bridging the gap between executive business priorities and engineering execution.",
      "Comprehensive Lifecycle Support: Guiding your team from early whiteboards through launch and continuous scale.",
    ],
    process: [
      {
        step: "01",
        title: "Understand",
        description:
          "Engage leadership and engineering stakeholders to understand business objectives, constraints, and current challenges.",
      },
      {
        step: "02",
        title: "Assess & Advise",
        description:
          "Evaluate technical assets, analyze tradeoffs across potential approaches, and prepare actionable recommendations.",
      },
      {
        step: "03",
        title: "Define the Approach",
        description:
          "Deliver system architectures, technical roadmaps, technology selections, and sprint execution schedules.",
      },
      {
        step: "04",
        title: "Support Implementation",
        description:
          "Provide active technical oversight, code reviews, and hands-on guidance throughout the build and rollout.",
      },
    ],
    relatedCaseStudyIds: ["pnc-bank", "fdb"],
  },
  {
    slug: "hire-ai-native-developers",
    title: "Hire AI-Native Developers",
    tagline: "Build Your Team with AI-Native Developers",
    heroDescription:
      "Staff Augmentation Services by Avisoft. Hire a single developer or full team; short or long term; working from your or Avisoft office.",
    summary:
      "Hire a single developer or full team for your technology requirements, with flexible engagement options and the choice to work from your office or Avisoft office.",
    capabilitiesBadges: [
      "Single Developer",
      "Full Technology Team",
      "Short-Term Engagement",
      "Long-Term Engagement",
    ],
    capabilities: [
      {
        title: "Individual Developers",
        description:
          "Hire dedicated developers to quickly augment your internal engineering team or address specific technical skill gaps.",
      },
      {
        title: "Dedicated Development Teams",
        description:
          "Spin up complete cross-functional teams including software engineers, UI/UX designers, QA specialists, and tech leads.",
      },
      {
        title: "Short-Term Engagements",
        description:
          "Add engineering capacity for urgent milestones, critical product launches, or seasonal development surges.",
      },
      {
        title: "Long-Term Engagements",
        description:
          "Establish long-term engineering capacity with stable developers acting as a seamless extension of your company.",
      },
      {
        title: "Client-Site Collaboration",
        description:
          "Deploy developers to collaborate directly from your offices based on your engagement and security policies.",
      },
      {
        title: "Avisoft-Based Teams",
        description:
          "Have developers work from Avisoft offices in an innovative, supportive, and collaborative technology ecosystem.",
      },
    ],
    technologies: [
      "Claude Code",
      "ChatGPT Codex",
      "GitHub Copilot",
      "Cursor AI",
      "Next.js",
      "React",
      "Node.js",
      "Python",
      ".NET",
      "Flutter",
      "AWS",
      "Docker",
    ],
    whyChoose: [
      "Cost Effective Remote Tech Teams: Based in India, offering a unique blend of highly technical and cost-effective developers.",
      "One Stop Shop for All Tech Needs: AI Adoption, Cloud Engineering, Full Stack, Test Automation, and DevOps.",
      "Vetted Professionals: Passionate engineers with proven track records delivering large-scale enterprise solutions.",
      "Proven Track Record: Repeat engagements from global clients testify to our consistent delivery and engineering quality.",
      "Outsource with Confidence: Transparent management, daily syncs, and developers working from state-of-the-art Avisoft delivery centers.",
      "AI-Powered Development: Co-development with AI copilots for 2-3x engineering velocity, or strictly traditional coding if your policy prefers.",
    ],
    process: [
      {
        step: "01",
        title: "Understand Your Requirements",
        description:
          "Detail your project scope, tech stack, seniorities required, work hours, and preferred collaboration model.",
      },
      {
        step: "02",
        title: "Identify the Right Talent",
        description:
          "Match vetted engineers from our talent pool matching your exact stack and domain requirements.",
      },
      {
        step: "03",
        title: "Start with a No-Cost Trial",
        description:
          "Evaluate your developer or team hands-on during a zero-risk, no-cost trial period before signing long-term.",
      },
      {
        step: "04",
        title: "Scale as You Grow",
        description:
          "Easily add developers, adjust team composition, or transition developers as your product needs evolve.",
      },
    ],
    relatedCaseStudyIds: ["avifires", "galaxy-one", "kddi-povo"],
  },
];
