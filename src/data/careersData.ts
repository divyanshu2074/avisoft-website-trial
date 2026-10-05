export interface JobOpening {
  id: string;
  title: string;
  type: string;
  location: string;
  workMode: string;
  shortDescription: string;
  fullDescription: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
}

export interface EmployeeTestimonial {
  name: string;
  role: string;
  tenure: string;
  quote: string;
}

export const jobOpenings: JobOpening[] = [
  {
    id: "sr-ai-engineer",
    title: "Senior AI / ML Engineer",
    type: "Full Time",
    location: "Mohali / Jammu",
    workMode: "Hybrid / On-site",
    shortDescription:
      "Design, build, and deploy production Generative AI, LLM applications, RAG pipelines, and agentic workflows for global clients.",
    fullDescription:
      "We are looking for a Senior AI / ML Engineer to spearhead the architecture and deployment of enterprise-grade AI solutions. You will collaborate directly with cross-functional product and engineering teams to transform messy data into robust machine learning models and intelligent copilot experiences.",
    responsibilities: [
      "Architect and fine-tune Large Language Models (LLMs) and custom machine learning models for enterprise applications.",
      "Design resilient Retrieval-Augmented Generation (RAG) pipelines using vector databases such as Pinecone, Qdrant, and Milvus.",
      "Implement autonomous multi-agent workflows using LangChain, LangGraph, and modern orchestration frameworks.",
      "Optimize inference latency, memory consumption, and token utilization for high-concurrency production deployments.",
      "Partner with backend engineers to integrate intelligent capabilities into microservices and client-facing interfaces.",
    ],
    requirements: [
      "3+ years of hands-on experience building and deploying machine learning or deep learning models in production.",
      "Strong proficiency in Python, PyTorch, LangChain/LlamaIndex, and Hugging Face ecosystem.",
      "Demonstrated experience designing vector search, semantic embeddings, and prompt engineering architectures.",
      "Familiarity with containerization (Docker) and deployment on cloud platforms (AWS, Azure, or GCP).",
      "Solid understanding of computer science fundamentals, algorithms, and system design.",
    ],
    niceToHave: [
      "Experience with model quantization (vLLM, Ollama, TensorRT-LLM).",
      "Experience with Databricks or Apache Spark for large-scale data engineering.",
      "Contributions to open-source AI libraries or published research.",
      "Knowledge of MLOps pipelines using MLflow, Kubeflow, or Weights & Biases.",
    ],
  },
  {
    id: "fullstack-nextjs-engineer",
    title: "Full Stack Next.js & React Engineer",
    type: "Full Time",
    location: "Mohali / Jammu / Remote",
    workMode: "Flexible / Remote",
    shortDescription:
      "Craft high-performance web applications, responsive customer portals, and enterprise SaaS platforms using Next.js and TypeScript.",
    fullDescription:
      "We are seeking a talented Full Stack Next.js & React Engineer to develop scalable digital products and enterprise platforms. You will write clean, well-architected TypeScript code across modern frontends and cloud microservices.",
    responsibilities: [
      "Develop responsive, pixel-perfect user interfaces using Next.js (App Router), React, and Tailwind CSS.",
      "Design and maintain REST and GraphQL API services using Node.js, Express, and FastAPI.",
      "Optimize web application performance, Core Web Vitals (LCP, INP, CLS), and SEO visibility.",
      "Implement secure authentication, role-based access control, and state management architectures.",
      "Write unit, integration, and end-to-end tests to guarantee high product reliability.",
    ],
    requirements: [
      "3+ years of software development experience specializing in React, Next.js, and TypeScript.",
      "Deep understanding of modern CSS, Tailwind, responsive design, and web accessibility standards.",
      "Strong proficiency with relational databases (PostgreSQL, MySQL) and ORMs (Prisma, Drizzle).",
      "Experience working with Git workflows, CI/CD pipelines, and cloud hosting platforms.",
      "Excellent communication and problem-solving skills.",
    ],
    niceToHave: [
      "Experience building micro-frontend architectures.",
      "Familiarity with AI copilot-assisted development (Claude Code, GitHub Copilot, Cursor).",
      "Experience with Redis caching and distributed task queues.",
      "Mobile development experience with React Native or Flutter.",
    ],
  },
  {
    id: "sr-data-engineer",
    title: "Senior Data Engineer - Databricks & Spark",
    type: "Full Time",
    location: "Mohali / Jammu",
    workMode: "Hybrid",
    shortDescription:
      "Build large-scale data pipelines, lakehouse architectures, and real-time streaming workflows on Databricks and Apache Spark.",
    fullDescription:
      "Avisoft is a certified Databricks Partner. We are looking for an experienced Data Engineer to design high-throughput ETL/ELT pipelines, manage Delta Lake tables, and build reliable data foundations for AI/ML applications.",
    responsibilities: [
      "Develop robust batch and streaming data pipelines utilizing Apache Spark, PySpark, and Delta Lake.",
      "Design, implement, and maintain enterprise lakehouse environments on Databricks.",
      "Implement data quality validation rules, automated reconciliation, and schema enforcement.",
      "Integrate diverse enterprise data sources, transactional databases, and SaaS APIs into unified repositories.",
      "Optimize Spark execution plans, cluster compute utilization, and cloud storage costs.",
    ],
    requirements: [
      "3+ years of dedicated data engineering experience with Apache Spark and Python/Scala.",
      "Extensive hands-on experience building solutions on Databricks and cloud platforms (AWS, Azure, or GCP).",
      "Expert-level SQL proficiency and solid understanding of dimensional modeling and lakehouse patterns.",
      "Experience configuring automated data pipelines using Apache Airflow or Databricks Workflows.",
      "Familiarity with Docker and infrastructure-as-code principles.",
    ],
    niceToHave: [
      "Databricks Certified Data Engineer Professional credential.",
      "Experience with real-time streaming tools like Apache Kafka.",
      "Familiarity with vector databases and data preparation for LLMs.",
      "Experience migrating on-premise Hadoop clusters to cloud lakehouses.",
    ],
  },
  {
    id: "devops-cloud-architect",
    title: "Cloud & DevOps Architect",
    type: "Full Time",
    location: "Mohali / Jammu / Remote",
    workMode: "Flexible",
    shortDescription:
      "Architect cloud infrastructure, automated CI/CD deployment pipelines, and Kubernetes clusters across AWS, Azure, and GCP.",
    fullDescription:
      "Join Avisoft as a Cloud & DevOps Architect to guide enterprise infrastructure modernizations. You will establish automated infrastructure-as-code, enforce container security, and manage high-availability cloud platforms.",
    responsibilities: [
      "Design and deploy scalable cloud architectures using Terraform, AWS, Azure, and GCP.",
      "Manage Kubernetes (EKS, GKE, AKS) clusters for containerized microservices and AI workloads.",
      "Build zero-downtime CI/CD deployment pipelines with GitHub Actions and GitLab CI.",
      "Implement robust monitoring, logging, and observability using Prometheus, Grafana, and ELK stack.",
      "Enforce cloud security baselines, IAM least-privilege policies, and encryption standards.",
    ],
    requirements: [
      "4+ years of DevOps and cloud engineering experience across production environments.",
      "Deep expertise with Kubernetes orchestration, Helm charts, and Docker containerization.",
      "Proficiency with Infrastructure as Code (Terraform) and configuration management.",
      "Experience with cloud networking (VPCs, transit gateways, load balancers, DNS, SSL/TLS).",
      "Strong background in Linux administration and shell scripting.",
    ],
    niceToHave: [
      "AWS Certified Solutions Architect or CKA (Certified Kubernetes Administrator).",
      "Experience orchestrating GPU nodes for AI/ML inference workloads.",
      "Familiarity with serverless technologies (AWS Lambda, Cloudflare Workers).",
    ],
  },
  {
    id: "qa-automation-lead",
    title: "QA Automation Lead - Selenium & Cypress",
    type: "Full Time",
    location: "Mohali / Jammu",
    workMode: "On-site / Hybrid",
    shortDescription:
      "Lead automated testing strategies, author resilient test frameworks, and guarantee software quality across web, mobile, and APIs.",
    fullDescription:
      "We are looking for a QA Automation Lead to elevate testing standards across our engineering engagements. You will design automated regression suites, perform load testing, and ensure our products meet high reliability benchmarks.",
    responsibilities: [
      "Design, build, and maintain scalable automated testing frameworks using Cypress, Selenium, or Playwright.",
      "Author comprehensive end-to-end, API, and regression test suites for web and mobile applications.",
      "Integrate automated test runs into CI/CD pipelines to catch bugs prior to production releases.",
      "Conduct performance, stress, and load testing using tools like JMeter and k6.",
      "Collaborate with developers and product managers to define clear test scenarios and acceptance criteria.",
    ],
    requirements: [
      "4+ years of software quality engineering experience with significant focus on test automation.",
      "Proficiency in JavaScript/TypeScript or Python/Java for test automation.",
      "Extensive experience with modern test frameworks (Cypress, Playwright, or Selenium).",
      "Hands-on experience testing RESTful APIs and GraphQL endpoints.",
      "Solid understanding of software QA methodologies, agile processes, and bug tracking systems.",
    ],
    niceToHave: [
      "Experience testing mobile apps using Appium or Flutter driver.",
      "Knowledge of BDD frameworks like Cucumber.",
      "Experience with accessibility testing (WCAG 2.1 compliance).",
    ],
  },
];

export const employeeTestimonials: EmployeeTestimonial[] = [
  {
    name: "Aman Sharma",
    role: "Lead Software Architect",
    tenure: "4 years at Avisoft",
    quote:
      "At Avisoft, no two projects are the same. In the last four years, I've had the chance to migrate massive legacy .NET banking platforms, build multi-tenant SaaS systems, and lead AI agent implementations. The engineering autonomy and collaborative culture here are exceptional.",
  },
  {
    name: "Pooja Jamwal",
    role: "Senior AI / ML Engineer",
    tenure: "2.5 years at Avisoft",
    quote:
      "Working on real-world generative AI and RAG applications for international clients has accelerated my career faster than anywhere else. We don't just follow tutorials; we engineer production systems that handle real user volume and strict latency constraints.",
  },
  {
    name: "Rohan Verma",
    role: "Data Engineering Specialist",
    tenure: "3 years at Avisoft",
    quote:
      "Avisoft's partnership with Databricks gave me direct access to cutting-edge lakehouse architectures. I work daily with Apache Spark, Delta Lake, and enterprise cloud data pipelines. The mentorship and growth opportunities are truly unmatched.",
  },
];
