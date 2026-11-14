export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  overview: string;
  keyContributions: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    company: "VolksByte Ltd.",
    role: "Computer Vision & AR Engineer",
    period: "Nov 2023 — Present",
    location: "Dhaka, Bangladesh / Hybrid",
    type: "Full-Time",
    isCurrent: true,
    overview:
      "Leading technical development of large-scale vector similarity search systems, computer vision automation pipelines, and production backend services supporting commercial printing and AR solutions.",
    keyContributions: [
      "Architected and deployed a vector search engine indexing 1,000,000+ artwork designs using OpenCLIP, DINOv2, and FAISS IVF-PQ, cutting visual search times from minutes of manual lookup to sub-120ms.",
      "Engineered automated OpenCV image processing pipelines for physical dimension measurement using reference markers and automated raster-to-SVG vectorization.",
      "Designed and maintained high-throughput asynchronous microservices in Python (FastAPI/Flask) and Node.js with PostgreSQL backend persistence.",
      "Containerized microservice workloads with Docker and established automated CI/CD deployment pipelines on Linux VPS servers."
    ],
    technologies: [
      "Python",
      "FastAPI",
      "DINOv2",
      "OpenCLIP",
      "FAISS",
      "OpenCV",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "CI/CD"
    ]
  },
  {
    company: "Ocean Blue IT Studio",
    role: "Augmented Reality Developer",
    period: "Oct 2022 — Aug 2023",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    overview:
      "Spearheaded development of mobile augmented reality applications with Unity and ARFoundation, delivering interactive educational and consumer experiences.",
    keyContributions: [
      "Engineered cross-platform AR applications using Unity, C#, and ARFoundation (ARCore & ARKit) across iOS and Android.",
      "Implemented markerless surface tracking, environmental lighting estimation, and camera-driven gesture interactions.",
      "Profiled mobile memory allocation, shader complexity, and texture compression to maintain a continuous, rock-solid 60 FPS frame rate.",
      "Collaborated closely with 3D technical artists and designers to translate product specifications into intuitive spatial interactions."
    ],
    technologies: [
      "Unity 3D",
      "C#",
      "ARFoundation",
      "ARCore & ARKit",
      "Computer Vision",
      "Mobile Optimization",
      "Git"
    ]
  },
  {
    company: "Technomagic Pvt. Ltd.",
    role: "Junior Game Developer",
    period: "Mar 2021 — Sep 2022",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    overview:
      "Developed commercial hyper-casual and idle arcade titles in Unity and C#, focusing on responsive player physics, clean game loop architecture, and mobile performance tuning.",
    keyContributions: [
      "Programmed gameplay mechanics, physics controllers, procedural level generation, and progression state machines for commercial mobile titles.",
      "Built zero-allocation object pooling architectures that eliminated garbage collection spikes and prevented frame stutters on mobile devices.",
      "Profiled and optimized draw calls and texture atlases, reducing render overhead by over 60% for smooth 60 FPS execution on budget smartphones.",
      "Participated in daily agile sprints, code reviews, and rapid prototyping cycles based on player retention metrics."
    ],
    technologies: [
      "Unity 3D",
      "C#",
      "Game Architecture",
      "Performance Profiling",
      "Mobile Physics",
      "Git"
    ]
  }
];
