export interface SkillItem {
  name: string;
  level?: "Core" | "Advanced" | "Proficient";
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "llm-genai",
    title: "Generative AI & Multimodal LLMs",
    description: "Multimodal AI integration, RAG architectures, prompt engineering, and structured extraction.",
    iconName: "Bot",
    skills: [
      { name: "Google Gemini Multimodal API", level: "Core", highlight: true },
      { name: "OpenAI API Integration", level: "Core", highlight: true },
      { name: "Multimodal Voice Transcription", level: "Core", highlight: true },
      { name: "Gemini Vision OCR & Document Parsing", level: "Core", highlight: true },
      { name: "Retrieval-Augmented Generation (RAG)", level: "Core", highlight: true },
      { name: "LangChain & LlamaIndex", level: "Core", highlight: true },
      { name: "Structured JSON Extraction & Zod", level: "Core", highlight: true },
      { name: "Prompt Engineering & Context Design", level: "Core", highlight: true }
    ]
  },
  {
    id: "vision-multimodal",
    title: "Computer Vision & Visual Intelligence",
    description: "Dense vision embeddings, zero-shot visual retrieval, contour analysis, and object detection.",
    iconName: "Eye",
    skills: [
      { name: "DINOv2 (Meta AI)", level: "Core", highlight: true },
      { name: "OpenCLIP (Vision-Language)", level: "Core", highlight: true },
      { name: "Computer Vision (OpenCV)", level: "Core", highlight: true },
      { name: "YOLO Object Detection", level: "Core", highlight: true },
      { name: "Feature Matching (SIFT, ORB)", level: "Core" },
      { name: "Calibrated Dimension Measurement", level: "Advanced", highlight: true },
      { name: "Raster-to-SVG Vectorization", level: "Advanced", highlight: true },
      { name: "Vision Transformers (ViT)", level: "Advanced" }
    ]
  },
  {
    id: "vector-search",
    title: "Vector Search & NLP Embeddings",
    description: "High-scale approximate nearest neighbor search, sentence embeddings, and financial text parsing.",
    iconName: "BrainCircuit",
    skills: [
      { name: "FAISS (IVF-PQ Indexing)", level: "Core", highlight: true },
      { name: "Vector DBs (Qdrant, pgvector)", level: "Core", highlight: true },
      { name: "Financial SMS & Text Parsing", level: "Core", highlight: true },
      { name: "Sentence Transformers & Embeddings", level: "Core", highlight: true },
      { name: "Hybrid Search (Dense + Sparse)", level: "Advanced", highlight: true },
      { name: "Named Entity Recognition (NER)", level: "Advanced" },
      { name: "Token Classification & Intent Routing", level: "Advanced" }
    ]
  },
  {
    id: "backend-systems",
    title: "Backend Engineering & Microservices",
    description: "High-throughput asynchronous APIs, relational schemas, ORMs, and containerized deployment.",
    iconName: "Server",
    skills: [
      { name: "Python (FastAPI & AsyncIO)", level: "Core", highlight: true },
      { name: "Node.js & Express REST APIs", level: "Core", highlight: true },
      { name: "PostgreSQL & Schema Design", level: "Core", highlight: true },
      { name: "Prisma ORM (Multi-Tenancy)", level: "Core", highlight: true },
      { name: "Docker & Multi-Stage Builds", level: "Core", highlight: true },
      { name: "Linux VPS & Systemd Management", level: "Advanced", highlight: true },
      { name: "Automated CI/CD Workflows", level: "Advanced" },
      { name: "Task Queues & Asynchronous Workers", level: "Advanced" }
    ]
  },
  {
    id: "frontend-spatial",
    title: "Frontend Web & Spatial Engineering",
    description: "Type-safe modern client interfaces, responsive styling, and real-time interactive 3D.",
    iconName: "Layout",
    skills: [
      { name: "React.js & TypeScript", level: "Core", highlight: true },
      { name: "Tailwind CSS & Design Systems", level: "Core", highlight: true },
      { name: "State Management (Zustand)", level: "Core" },
      { name: "Unity 3D & C# Development", level: "Core", highlight: true },
      { name: "ARFoundation (ARCore & ARKit)", level: "Core", highlight: true },
      { name: "Mobile Profiling (60 FPS Performance)", level: "Core", highlight: true }
    ]
  }
];
