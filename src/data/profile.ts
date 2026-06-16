// Central place for all portfolio copy & data.
// Edit this file to update content across the site.

export const profile = {
  name: "Dhruv Saini",
  role: "Full-Stack Developer & CSE Student",
  email: "dhruvsaini0125@gmail.com",
  phone: "+91 9058182471",
  resume: "/DhruvResume.pdf",
  socials: {
    github: "https://github.com/Dhruvsaini2004",
    linkedin: "https://www.linkedin.com/in/dhruv-saini-27a30a296/",
  },
  headline: {
    name: "Dhruv Saini",
    tagline: "Full-stack developer who'd rather build it than talk about it.",
  },
  intro:
    "Final-year CS student and full-stack developer. I live in the gap between an annoying problem and a working app — React on the front, Node and databases on the back, and AI wired in wherever it actually earns its place.",
  currentlyBuilding: {
    name: "SmartFill",
    tagline: "AI Chrome Extension",
  },
  techStack: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Python",
    "C++",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "GSAP",
    "Git",
    "Docker",
    "AWS",
    "Redis",
    "Vercel",
    "REST APIs",
    "Gemini API",
    "Prompt Engineering",
  ],
  work: {
    eyebrow: "SELECTED WORK",
    title: "Built, shipped, iterated",
    subtitle:
      "Every project here started as something that annoyed me, then turned into a weekend (or three) of building until it actually worked. Here's what I've shipped end-to-end so far.",
    closing: "There's plenty more brewing on my GitHub",
  },
  projects: [
    {
      index: "01",
      name: "SnapTick",
      tagline: "AI-Powered Attendance System",
      summary:
        "Teachers upload one classroom photo; AI detects every face and marks attendance automatically — no roll call needed.",
      impact: [
        "Built end-to-end, solo — frontend, backend, AI integration, and deployment.",
        "Solved face-recognition accuracy for Indian skin tones by averaging descriptor vectors across multiple enrollment images.",
        "Shipped live on Render with role-based access for teachers and admins.",
      ],
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Face Recognition API",
        "Tailwind CSS",
      ],
      metric: { value: "Solo", label: "Built end-to-end" },
      meta: "Solo project · Live",
      links: {
        live: "https://snaptick-frontend.onrender.com/",
        github: "https://github.com/Dhruvsaini2004",
      },
      panel: { file: "snaptick.detect", signals: ["UPLOAD", "DETECT", "MATCH", "RECORD"] },
      building: false,
    },
    {
      index: "02",
      name: "TransIt",
      tagline: "Expense Tracker & Bill Splitter",
      summary:
        "A personal-finance app for hostel students to track spending and split bills fairly when going out with friends.",
      impact: [
        "Built for a real audience — hostel students managing money on their own.",
        "Group bill-splitting with automatic per-person calculation and settlement tracking.",
        "Clean dashboard with expense categories and spending insights.",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      metric: { value: "Split", label: "Auto per-person" },
      meta: "Personal project",
      links: { github: "https://github.com/Dhruvsaini2004" },
      panel: { file: "transit.split", signals: ["EXPENSE", "SPLIT", "SETTLE"] },
      building: false,
    },
    {
      index: "03",
      name: "Moodify",
      tagline: "Mood-Based Song Recommender",
      summary:
        "A MERN app that reads your mood and recommends songs that match how you actually feel right now.",
      impact: [
        "Mood-driven filtering — happy, sad, surprised — served from a MongoDB backend.",
        "Smooth GSAP animations for an immersive, engaging experience.",
        "Fully responsive UI built with Tailwind CSS.",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "GSAP", "Tailwind CSS"],
      metric: { value: "Mood", label: "→ the right song" },
      meta: "Personal project",
      links: { github: "https://github.com/Dhruvsaini2004" },
      panel: { file: "moodify.feel", signals: ["SENSE", "MATCH", "PLAY"] },
      building: false,
    },
    {
      index: "04",
      name: "AI Battle Arena",
      tagline: "Multi-Model LLM Judging Arena",
      summary:
        "Ask anything and two AI models go head-to-head to answer it — then a third model steps in as judge, scoring each response and explaining exactly why it won or lost.",
      impact: [
        "Orchestrates three LLMs in a single pipeline — two competitors and one impartial judge.",
        "The judge returns structured per-criterion scores with written reasoning, not just a winner.",
        "Makes each model's strengths and blind spots visible side by side, in real time.",
      ],
      tech: ["React.js", "Node.js", "Express.js", "Gemini API", "OpenAI API"],
      metric: { value: "3 LLMs", label: "Two battle, one judges" },
      meta: "Personal project",
      links: { github: "https://github.com/Dhruvsaini2004" },
      panel: { file: "arena.judge", signals: ["PROMPT", "MODEL A", "MODEL B", "VERDICT"] },
      building: false,
    },
    {
      index: "05",
      name: "SmartFill",
      tagline: "AI Form-Filling Chrome Extension",
      summary:
        "A Chrome extension that auto-fills placement and recruitment forms from a saved profile — and learns from every form, asking less over time.",
      impact: [
        "Built to kill the pain of filling 20+ repetitive placement forms in final year.",
        "AI polishes rough answers into professional responses and remembers them.",
        "Self-learning — the more forms it fills, the fewer questions it asks.",
      ],
      tech: ["Chrome MV3", "Gemini API", "Vanilla JS"],
      metric: { value: "Learns", label: "Asks less over time" },
      meta: "Currently building",
      links: { github: "https://github.com/Dhruvsaini2004" },
      panel: { file: "smartfill.fill", signals: ["READ", "FILL", "LEARN"] },
      building: true,
    },
  ],
  about: {
    eyebrow: "ABOUT",
    statement: "Always shipping. Always learning.",
    paragraphs: [
      "I'm happiest mid-build — terminal open, three tabs of docs, something slowly coming together. That's where I do my best thinking.",
      "Most of what I make starts with my own friction. SnapTick came from watching teachers lose 15 minutes a day to roll call. TransIt came from being a hostel student with no clue where my money went. I build the fix, then keep sharpening it until it feels effortless to use.",
      "Lately I'm all-in on full-stack work with AI woven through it — pairing React and Node with LLMs to build tools that pull real weight, not just impressive demos.",
    ],
    drivers: [
      {
        title: "Ship it",
        detail: "I'd rather ship a rough v1 today than perfect a plan for next month.",
      },
      {
        title: "Go deep",
        detail: "I'm not satisfied until I get what's actually happening under the hood.",
      },
      {
        title: "Stay hungry",
        detail: "New stack, new API, new problem? I'm already three tabs into the docs.",
      },
    ],
    education: {
      degree: "B.Tech, Computer Science & Engineering",
      school: "ABES Engineering College, Ghaziabad",
      duration: "2023 — 2027",
      detail: "CGPA 7.63 / 10.0 · Focus on full-stack & applied AI",
    },
    skillsNarrative:
      "Started in Python and C++, fell for JavaScript and React, then picked up Node, Express, databases and deployment one project at a time. Tools come and go — I just learn whatever the build needs and move fast.",
    skillGroups: [
      {
        label: "Languages",
        items: ["Python", "C++", "JavaScript", "TypeScript"],
      },
      {
        label: "Frontend",
        items: ["React.js", "Tailwind CSS", "GSAP", "HTML", "CSS"],
      },
      { label: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
      { label: "Databases", items: ["MongoDB", "MySQL", "Redis"] },
      { label: "Tools", items: ["Git", "GitHub", "Docker", "AWS", "Vercel"] },
    ],
    certifications: [
      {
        title: "Foundations of Prompt Engineering",
        issuer: "AWS Training & Certification",
      },
      {
        title: "Introduction to Generative AI: Art of the Possible",
        issuer: "AWS Training & Certification",
      },
      {
        title: "Certificate of Appreciation — Industrial Visit",
        issuer: "Network Bulls Pvt. Ltd.",
      },
    ],
  },
  contact: {
    eyebrow: "CONTACT",
    title: "Let's work together.",
    subtitle:
      "I'm actively looking for internship and full-time opportunities. If you think I'd be a good fit, I'd love to hear from you.",
    channels: [
      {
        label: "Email",
        cta: "Drop me a line",
        href: "mailto:dhruvsaini0125@gmail.com",
      },
      {
        label: "LinkedIn",
        cta: "Let's connect",
        href: "https://www.linkedin.com/in/dhruv-saini-27a30a296/",
      },
      {
        label: "GitHub",
        cta: "See my code",
        href: "https://github.com/Dhruvsaini2004",
      },
    ],
  },
} as const
