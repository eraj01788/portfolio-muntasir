export interface EngineeringPillar {
  number: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  icon: string;
}

export const engineeringPillars: EngineeringPillar[] = [
  {
    number: "01",
    title: "Pragmatic Engineering Over Hype",
    tagline: "Choosing the simplest, fastest, and most cost-effective solution for real-world constraints.",
    description:
      "I don't default to the largest model when a targeted approach works better. When building MoneyFlow, rather than sending raw 12MP photos to an expensive vision API, I built client-side canvas downsampling to create lightweight sub-300KB payloads—cutting latency by 60% and minimizing API expenses while preserving OCR precision.",
    capabilities: [
      "Client-side preprocessing & payload optimization",
      "Model selection matched to task complexity (Gemini, CLIP, DINOv2)",
      "Strict schema-enforced validation (Zod & Instructor patterns)",
      "Deterministic local fallbacks for offline resilience"
    ],
    icon: "Bot"
  },
  {
    number: "02",
    title: "High-Dimensional Vector Scale",
    tagline: "Turning millions of embeddings into sub-second, production-grade search systems.",
    description:
      "Brute-force nearest neighbor search collapses when datasets grow into the millions. At VolksByte, I partitioned vector spaces using FAISS IVF-PQ (Inverted File with Product Quantization), compressing high-dimensional vectors to fit within memory constraints while executing queries in under 120ms with hybrid local keypoint verification.",
    capabilities: [
      "FAISS IVF-PQ index partitioning & clustering",
      "Multimodal embedding spaces (OpenCLIP & DINOv2)",
      "Hybrid dense vector + local keypoint (SIFT/ORB) verification",
      "Asynchronous batch inference queues with GPU acceleration"
    ],
    icon: "BrainCircuit"
  },
  {
    number: "03",
    title: "Resilient Microservices & Systems",
    tagline: "Architecting backend microservices that handle concurrency, failures, and real-time streaming.",
    description:
      "AI models require rock-solid delivery infrastructure. I engineer asynchronous Python (FastAPI) and Node.js microservices backed by PostgreSQL, ensuring deterministic API contracts, connection pooling, multi-tenant database isolation, and real-time response streaming.",
    capabilities: [
      "Asynchronous Python microservices (FastAPI & AsyncIO)",
      "Multi-tenant database isolation & Prisma ORM schemas",
      "Real-time token streaming with Server-Sent Events (SSE)",
      "Task queues, caching & non-blocking background workers"
    ],
    icon: "Server"
  },
  {
    number: "04",
    title: "End-to-End Product Ownership",
    tagline: "Taking ideas from data pipelines and models to polished, accessible client applications.",
    description:
      "A model is only as valuable as the software that delivers it. Having spent years profiling 60 FPS mobile loops in Unity and building modern component-driven web applications in React and TypeScript, I build complete, end-to-end software where backend performance and frontend user experience reinforce each other.",
    capabilities: [
      "Type-safe modern web interfaces (React & TypeScript)",
      "Performance profiling & memory leak diagnostics",
      "Docker containerization & multi-stage deployment builds",
      "Linux server deployment, systemd daemons & CI/CD workflows"
    ],
    icon: "ShieldCheck"
  }
];
