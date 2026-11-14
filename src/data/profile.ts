export interface ProfileData {
  name: string;
  firstName: string;
  title: string;
  headline: string;
  subheadline: string;
  bioParagraphs: string[];
  location: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  githubUrl: string;
  cvUrl: string;
  availability: string;
  stats: {
    value: string;
    label: string;
    description: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Muntasir Hossain",
  firstName: "Muntasir",
  title: "AI & Full-Stack Systems Engineer",
  headline: "Building Production AI Systems, Multimodal Pipelines & Scalable Software",
  subheadline:
    "I build production software powered by modern AI. Over the past 5 years, I've designed multimodal vision search engines indexing millions of vectors at VolksByte, built an AI personal finance platform (MoneyFlow) with voice and receipt extraction using Gemini, and engineered resilient backends and interactive applications.",
  bioParagraphs: [
    "My engineering journey is rooted in strong computer science fundamentals: I graduated with high academic honors (3.75 / 4.00 CGPA) in Computer Science & Software Engineering from AIUB, building rigorous discipline in data structures, algorithms, and systems architecture.",
    "I started my career writing performance-critical C# code for mobile games and augmented reality systems at Technomagic and Ocean Blue. That background in profiling memory, eliminating garbage collection spikes, and guaranteeing 60 FPS frame rates shaped my practical, systems-first engineering mindset.",
    "At VolksByte Ltd., I brought that discipline to computer vision and machine learning: architecting vector similarity search across 1M+ design embeddings using DINOv2, OpenCLIP, and FAISS (sub-120ms retrieval) and building automated OpenCV image-to-SVG vectorization pipelines. Most recently, I built and launched MoneyFlow—a live, multi-tenant personal finance SaaS utilizing Google Gemini Multimodal AI for multilingual voice expense logging, camera receipt scanning, and 1-tap SMS transaction parsing."
  ],
  location: "Rajshahi, Bangladesh",
  email: "muntasirhosain@gmail.com",
  phone: "+8801788075438",
  linkedinUrl: "https://www.linkedin.com/in/muntasir-hossain88/",
  githubUrl: "https://github.com/eraj01788",
  cvUrl: "/Muntasir_Hossain_CV.pdf",
  availability: "Available for Remote Worldwide Roles & Engineering Collaborations",
  stats: [
    {
      value: "5+ Years",
      label: "Production Engineering",
      description: "Hands-on software development across AI, vision, backend & web"
    },
    {
      value: "Live SaaS",
      label: "Creator of MoneyFlow",
      description: "Full-stack SaaS with Google Gemini Multimodal Voice & Receipt Vision"
    },
    {
      value: "1M+ Vectors",
      label: "Sub-120ms Search",
      description: "High-scale vector search engine with DINOv2 & FAISS IVF-PQ"
    },
    {
      value: "3.75 / 4.0",
      label: "B.Sc. Honors (AIUB)",
      description: "Bachelor of Science in Computer Science & Software Engineering"
    }
  ]
};
