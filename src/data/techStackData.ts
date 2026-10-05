export interface TechCategory {
  title: string;
  technologies: string[];
}

export const techStackData: TechCategory[] = [
  {
    title: "Web Development",
    technologies: [
      "Next.js",
      "React JS",
      "Node.js",
      "Express.js",
      "Ember.js",
      "PHP",
      "Laravel",
      "WordPress",
      "CodeIgniter",
      "CakePHP",
      "MongoDB",
    ],
  },
  {
    title: "Mobile Development",
    technologies: ["Flutter", "React Native", "Swift", "Kotlin"],
  },
  {
    title: "Desktop Application Development",
    technologies: [
      ".NET",
      "Java",
      "Python",
      "Golang",
      "Node.js",
      "MongoDB",
      "Express.js",
    ],
  },
  {
    title: "Testing & QA",
    technologies: [
      "Test Automation",
      "Selenium",
      "Cypress",
      "Cucumber BDD",
      "API Testing",
      "Performance Testing",
      "Functional Testing",
      "Manual QA",
    ],
  },
  {
    title: "Cloud & DevOps",
    technologies: [
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "Google Cloud Platform (GCP)",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
    ],
  },
  {
    title: "AI & Data Engineering",
    technologies: [
      "Generative AI & Agentic AI",
      "Custom AI Models",
      "OpenAI",
      "Anthropic Claude",
      "Google Gemini",
      "Llama",
      "GitHub Copilot",
      "FastAPI",
      "Python",
      "Databricks & Spark",
      "PostgreSQL",
      "SQL",
      "R",
      "Scala",
    ],
  },
];
