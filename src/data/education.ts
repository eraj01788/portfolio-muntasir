export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreType: string;
  details: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  description: string;
}

export const educationList: EducationItem[] = [
  {
    degree: "Bachelor of Science in Computer Science & Software Engineering",
    institution: "American International University - Bangladesh (AIUB)",
    location: "Dhaka, Bangladesh",
    period: "2018 — 2021",
    score: "3.75 / 4.00",
    scoreType: "CGPA",
    details: [
      "Rigorous study of Data Structures, Algorithms, Operating Systems, Computer Graphics, Software Architecture, and Database Management Systems.",
      "Graduated with High Academic Distinction (3.75 CGPA).",
      "Completed comprehensive capstone and engineering projects in interactive software and computer systems."
    ]
  },
  {
    degree: "Higher Secondary Certificate (HSC) — Science",
    institution: "Shahid A.H.M. Kamaruzzaman Govt. Degree College",
    location: "Rajshahi, Bangladesh",
    period: "2016 — 2017",
    score: "4.50 / 5.00",
    scoreType: "GPA",
    details: [
      "Specialized in Higher Mathematics, Physics, Chemistry, and Information Technology."
    ]
  },
  {
    degree: "Secondary School Certificate (SSC) — Science",
    institution: "Rohanpur A.B. Government High School",
    location: "Rohanpur, Bangladesh",
    period: "2015",
    score: "5.00 / 5.00",
    scoreType: "GPA",
    details: [
      "Graduated with Perfect GPA 5.00 (Golden Distinction) in Science curriculum."
    ]
  }
];

export const certifications: CertificationItem[] = [
  {
    title: "Hi-Tech Park Training — Arduino & IoT",
    issuer: "Ministry of Information & Communication Technology (ICT), Bangladesh",
    description:
      "Intensive hands-on technical training program covering embedded computing, sensor integration, microcontroller programming, and hardware-software telemetry."
  }
];

