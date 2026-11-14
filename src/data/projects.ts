export interface ProjectItem {
  id: string;
  title: string;
  category: "all" | "saas" | "vector" | "vision" | "spatial";
  categoryLabel: string;
  models: string[];
  summary: string;
  architectureHighlights: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  metrics: string;
}

export const projects: ProjectItem[] = [
  {
    id: "moneyflow-ai-saas",
    title: "MoneyFlow — AI-Powered Personal Finance & Wealth SaaS",
    category: "saas",
    categoryLabel: "Live Multimodal AI SaaS",
    models: ["Google Gemini Multimodal AI", "Gemini Vision OCR", "Multilingual Voice (EN/BN/Banglish)", "Financial SMS NLP"],
    summary:
      "A production full-stack SaaS platform built to eliminate the friction of manual budgeting. Integrates Google Gemini Multimodal AI to enable natural voice expense logging across English, Bengali, and Banglish, camera receipt scanning with automated category mapping, and 1-tap bank/MFS SMS parsing.",
    architectureHighlights: [
      "Voice Expense Logger transcribing speech notes in English, Bengali, and Banglish, reliably extracting structured transaction amounts, categories, and dates.",
      "Camera Receipt Scanner using client-side canvas downsampling (sub-300KB payloads) and Gemini Vision to extract merchant, line items, taxes, and totals into categorized entries.",
      "1-Tap Financial SMS Parser extracting amounts, merchant names, and TrxIDs from bank and mobile financial service (bKash, Nagad, Rocket) alerts.",
      "Multi-tenant double-entry ledger architecture with strict tenant isolation, PostgreSQL database, Prisma ORM, Express REST API, and modern React/TypeScript client."
    ],
    technologies: [
      "Google Gemini AI",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma ORM",
      "Tailwind CSS",
      "Docker"
    ],
    githubUrl: "https://github.com/eraj01788/moneyflow-pfm",
    demoUrl: "https://moneyflow-frontend-n1jc.onrender.com",
    metrics: "Live SaaS • Multimodal Voice, Receipt Vision & SMS Parsing"
  },
  {
    id: "volksbyte-vector-search",
    title: "Large-Scale Image Similarity Search & Vector Retrieval System",
    category: "vector",
    categoryLabel: "High-Scale Vector Search",
    models: ["OpenCLIP", "DINOv2 (Meta AI)", "FAISS IVF-PQ", "Vision Transformers (ViT)", "PyTorch"],
    summary:
      "A high-throughput vector search engine engineered at VolksByte Ltd. to index and match customer artwork submissions against 1,000,000+ historical print designs and licensed assets in under 120ms.",
    architectureHighlights: [
      "Constructed a unified multimodal embedding space combining OpenCLIP and DINOv2 vision transformers, invariant to rotation, lighting variations, and raster scaling.",
      "Partitioned index clusters using FAISS IVF-PQ (Inverted File with Product Quantization) to query 1M+ 768-dimensional vectors with minimal RAM footprint.",
      "Coupled global transformer embeddings with local keypoint descriptors (SIFT, ORB) for hybrid geometric verification on fine print patterns.",
      "Engineered containerized Python FastAPI microservices behind asynchronous worker queues deployed on Linux VPS."
    ],
    technologies: [
      "Python",
      "PyTorch",
      "DINOv2",
      "OpenCLIP",
      "FAISS",
      "FastAPI",
      "Docker",
      "PostgreSQL"
    ],
    githubUrl: "https://github.com/eraj01788/flask_opencv",
    metrics: "Sub-120ms retrieval across 1M+ vectors"
  },
  {
    id: "automated-vision-pipeline",
    title: "Automated Computer Vision & Image-to-SVG Vectorization Pipeline",
    category: "vision",
    categoryLabel: "Computer Vision & Algorithms",
    models: ["OpenCV", "Contour Detection", "Calibration Markers", "Palette Clustering"],
    summary:
      "An automated perception and image manipulation pipeline that measures physical object dimensions, eliminates background artifacts, extracts color palettes, and converts raster graphics into production-ready SVG vector paths.",
    architectureHighlights: [
      "Adaptive thresholding and Canny edge algorithms for precise boundary isolation without requiring manual masking.",
      "Calibrated physical dimension measurement engine utilizing reference scaling markers for industrial printing accuracy.",
      "Automated multi-tone color clustering and clean raster-to-SVG vectorization pipeline.",
      "Built resilient Node.js and Express REST microservices to serve downstream web clients and print manufacturing queues."
    ],
    technologies: [
      "Python",
      "OpenCV",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "REST APIs",
      "Docker"
    ],
    githubUrl: "https://github.com/eraj01788/flask_opencv",
    metrics: ">70% Reduction in manual artwork prep time"
  },
  {
    id: "spatial-computing-suite",
    title: "Interactive AR Spatial Tracking & Real-Time Computer Vision Suite",
    category: "spatial",
    categoryLabel: "Spatial Computing & Real-Time CV",
    models: ["ARFoundation", "ARCore / ARKit", "Hand Skeleton Tracking", "Mobile Physics Engine"],
    summary:
      "A production suite of augmented reality applications featuring markerless spatial plane anchoring, interactive physics simulations, and camera-driven hand skeleton tracking for touchless 3D manipulation.",
    architectureHighlights: [
      "Utilized Unity ARFoundation (ARCore & ARKit) for cross-platform plane detection, raycasting, and environmental lighting estimation.",
      "Engineered vision-driven hand tracking mapping camera frames into skeletal joint coordinates, translating physical gestures into responsive 3D manipulation.",
      "Implemented zero-allocation object pooling architectures, eliminating runtime garbage collection pauses and sustaining 60 FPS mobile rendering.",
      "Optimized 3D geometry and texture compression for reliable execution on diverse mobile hardware."
    ],
    technologies: [
      "Unity 3D",
      "C#",
      "ARFoundation",
      "ARCore & ARKit",
      "Computer Vision",
      "Mobile Profiling",
      "Git"
    ],
    githubUrl: "https://github.com/eraj01788/runtime-marker",
    metrics: "Rock-solid 60 FPS mobile performance"
  }
];
