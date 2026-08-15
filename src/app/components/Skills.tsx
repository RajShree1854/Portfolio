import { motion } from "motion/react";
import { useState } from "react";

/* ─── All skills distributed across 3 rows ───────────────── */
const allSkills = [
  "Python", "Java", "C", "C++", "TypeScript", "JavaScript", "Bash", "Shell Scripting",
  "HTML", "CSS", "React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Vite",
  "Node.js", "Express.js", "GraphQL", "REST APIs", "WebSockets", "MERN Stack", "Redux", "Prisma ORM",
  "MySQL", "PostgreSQL", "MongoDB", "Redis", "SQL",
  "AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Vercel", "Render",
  "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Matplotlib",
  "LangChain", "Hugging Face", "OpenAI", "Gemini API", "RAG", "FAISS", "Pinecone",
  "Git", "GitHub", "VS Code", "Cursor", "Copilot", "Postman", "Figma"
];

// Distribute evenly across 3 rows
const skillsPerRow = Math.ceil(allSkills.length / 3);
const marqueeRows = [
  { chips: allSkills.slice(0, skillsPerRow), dir: "left" },
  { chips: allSkills.slice(skillsPerRow, skillsPerRow * 2), dir: "right" },
  { chips: allSkills.slice(skillsPerRow * 2), dir: "left" }
];

/* ─── Tool tiles ─────────────────────────────────────────── */
const tools = [
  { name: "Python",      abbr: "PY", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "TypeScript",  abbr: "TS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React",       abbr: "RE", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js",     abbr: "NX", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js",     abbr: "NJ", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Docker",      abbr: "DK", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "MongoDB",     abbr: "MG", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL",  abbr: "PG", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Redis",       abbr: "RD", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "TensorFlow",  abbr: "TF", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "AWS",         abbr: "AW", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Kubernetes",  abbr: "K8", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Git",         abbr: "GT", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Postman",     abbr: "PM", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "Firebase",    abbr: "FB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "SQL",         abbr: "SQ", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
];

function ToolTile({ tool, index }: { tool: typeof tools[0]; index: number }) {
  const [imgError, setImgError] = useState(false);
  return (
    <motion.div
      className="bg-[#F5F0E8] border-[2px] border-[#1A1A1A] flex flex-col items-center justify-center gap-2 p-3"
      style={{ boxShadow: "3px 3px 0px #1A1A1A", width: "80px", height: "80px" }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 + index * 0.05 }}
      whileHover={{ backgroundColor: "#00B4D8", boxShadow: "5px 5px 0px #1A1A1A", transition: { type: "spring", stiffness: 400 } }}
    >
      {tool.img && !imgError ? (
        <img src={tool.img} alt={tool.name} className="w-7 h-7 object-contain" onError={() => setImgError(true)} />
      ) : (
        <span style={{ fontFamily: "var(--font-mono)" }} className="text-sm font-black">{tool.abbr}</span>
      )}
      <span style={{ fontFamily: "var(--font-mono)" }} className="text-[9px] text-center uppercase leading-tight">{tool.name}</span>
    </motion.div>
  );
}

/* ─── Single marquee row ─────────────────────────────────── */
function MarqueeRow({ chips, dir }: { chips: string[]; dir: "left" | "right" }) {
  // Triple for seamless loop
  const tripled = [...chips, ...chips, ...chips];
  const animClass = dir === "left" ? "marquee-left" : "marquee-right";

  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-3 ${animClass}`}
        style={{ width: "max-content" }}
      >
        {tripled.map((chip, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              fontWeight: 700,
              backgroundColor: "#F5F0E8",
              color: "#1A1A1A",
              border: "2px solid #1A1A1A",
              padding: "6px 16px",
              borderRadius: 0,
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────── */
export function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-20">
      {/* Marquee keyframes */}
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .marquee-left {
          animation: marquee-left 30s linear infinite;
        }
        .marquee-right {
          animation: marquee-right 30s linear infinite;
        }
        .marquee-left:hover,
        .marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Section Header — inside container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <h2 style={{ fontFamily: "var(--font-display)" }} className="relative z-10 font-black text-4xl sm:text-5xl">
            Skills
          </h2>
        </motion.div>
      </div>

      {/* PART 1 — Full-width marquee (3 rows) */}
      <motion.div
        className="mb-16 space-y-4"
        style={{
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {marqueeRows.map((row, i) => (
          <MarqueeRow key={i} chips={row.chips} dir={row.dir as "left" | "right"} />
        ))}
      </motion.div>

      {/* PART 2 — Icon grid below */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {tools.map((tool, index) => (
            <ToolTile key={index} tool={tool} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
