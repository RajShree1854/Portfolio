import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

/* ─── Types ─────────────────────────────────────────────── */
interface Project {
  title: string;
  tags: string[];
  description: string;
  url: string;
  impact?: string;
}

/* ─── Data ───────────────────────────────────────────────── */
const featured: Project = {
  title: "PR-Agent — AI-Powered Code Review Automation",
  tags: ["Python", "LiteLLM", "FastAPI", "Jinja2", "GitHub API", "Docker"],
  description:
    "A fully modified AI code review agent that automates pull request reviews, generates descriptions, and posts inline suggestions directly on code. Parses git patches, compresses diffs with a token-aware algorithm to fit LLM context windows, and queries LLMs via LiteLLM to post structured feedback across GitHub.",
  url: "https://github.com/Rajshree1854/pr-agent",
  impact: "↗ Stateless · Token-aware diff compression · 100+ LLM support via LiteLLM",
};

const bentoProjects: (Project & { colSpan: number; rowSpan: number; isLarge?: boolean; problemSolution?: { problem: string; solution: string } })[] = [
  {
    title: "Fraud Detection — Real-Time Streaming Pipeline",
    tags: ["Apache Kafka", "Apache Flink", "PostgreSQL", "Streamlit", "Docker"],
    description:
      "A distributed real-time fraud detection pipeline. Kafka ingests high-volume transaction streams from multiple banks, Flink SQL runs tumbling-window aggregations to catch suspicious patterns, PostgreSQL archives all data, and Streamlit surfaces live alerts.",
    url: "https://github.com/Rajshree1854/fraud-detection",
    impact: "↗ 3-broker Kafka cluster · Flink SQL tumbling windows · Event-driven",
    colSpan: 4,
    rowSpan: 2,
    isLarge: true,
    problemSolution: {
      problem:
        "Traditional fraud detection runs in batch jobs — by the time a suspicious pattern is flagged, the transaction has already settled. There was no real-time way to catch velocity attacks, high-value anomalies, or geographic fraud mid-stream.",
      solution:
        "Built an event-driven pipeline with Kafka (3-broker KRaft cluster) ingesting transactions from multiple bank producers. Apache Flink SQL runs continuous tumbling-window queries — flagging users with >5 txns in 2 minutes, >2 countries in 1 hour, or amounts >$5000 — and emits alerts to a dedicated Kafka topic consumed live by a Streamlit dashboard.",
    },
  },
  {
    title: "Stream — Fullstack Movie Streaming Platform",
    tags: ["FastAPI", "Pyrogram", "React", "Firebase", "MongoDB", "asyncio"],
    description:
      "A full-stack Netflix-style streaming platform that uses Telegram as a free decentralized CDN. FastAPI translates HTTP Range requests into MTProto chunk fetches, with in-memory multi-client load balancing to bypass Telegram rate limits.",
    url: "https://github.com/Rajshree1854/stream",
    impact: "↗ 206 Partial Content · Multi-client load balancing · Zero CDN cost",
    colSpan: 2,
    rowSpan: 2,
    problemSolution: {
      problem:
        "Video streaming is bandwidth-heavy. AWS S3 egress fees are prohibitive for indie projects. There was no cost-effective way to stream large video files with seeking support.",
      solution:
        "Hacked Telegram's unlimited storage as a CDN. FastAPI implements HTTP Range request handling by translating byte-offset requests into Telegram MTProto chunk downloads, running FastAPI and Pyrogram on the same asyncio event loop for direct memory access.",
    },
  },
  {
    title: "Mirror-Leech Bot — Async Download & FFmpeg Automation",
    tags: ["Python", "asyncio", "Pyrogram", "qBittorrent", "FFmpeg", "Google Drive"],
    description:
      "An async Telegram bot orchestrating qBittorrent-nox and aria2c via RPC for server-side downloads, with FFmpeg for video remuxing, thumbnail extraction, and quality conversion — then mirrors to Google Drive or leeches into Telegram with live progress bars and dynamic 2GB+ file splitting.",
    url: "https://github.com/Rajshree1854/WZML-X",
    impact: "↗ 50GB+ file support · FFmpeg video processing · Concurrent I/O",
    colSpan: 2,
    rowSpan: 1,
    problemSolution: {
      problem:
        "Python cannot efficiently manage thousands of concurrent P2P TCP connections, Telegram enforces a hard 2GB upload limit, and downloaded media often requires remuxing or quality conversion before sharing.",
      solution:
        "Designed as an asyncio orchestrator — qBittorrent/aria2c handle downloads via RPC, FFmpeg handles video remuxing and thumbnail extraction, and a chunking algorithm splits multi-GB files in constant memory before uploading sequentially.",
    },
  },
  {
    title: "HookForge — Reliable Webhook Event Dispatcher",
    tags: ["FastAPI", "Redis", "RQ", "Python", "Docker"],
    description:
      "A high-performance webhook relay and management system. Handles payload serialization, asynchronous event dispatching via Redis queues, and exponential backoff retries for failed deliveries.",
    url: "https://github.com/RajShree1854/HookForge",
    impact: "↗ Robust retry logic · Redis queue · Scalable workers",
    colSpan: 2,
    rowSpan: 1,
    problemSolution: {
      problem:
        "Integrating webhooks into distributed systems often leads to dropped events during network outages or target service downtime, requiring complex custom retry logic.",
      solution:
        "Engineered a dedicated FastAPI microservice that queues incoming payloads into Redis. Background workers consume jobs, execute deliveries, and automatically apply exponential backoff on failures.",
    },
  },
  {
    title: "LLMCache — Semantic Caching for Large Language Models",
    tags: ["Python", "SQLite", "FAISS", "Vector DB", "Embeddings"],
    description:
      "A semantic caching layer for LLMs that intercepts identical or semantically similar queries. Uses embeddings and vector similarity search (FAISS) to return cached responses instantly.",
    url: "https://github.com/RajShree1854/LLMCache",
    impact: "↗ FAISS vector search · Drastic latency reduction · API cost savings",
    colSpan: 2,
    rowSpan: 1,
    problemSolution: {
      problem:
        "LLM API calls are expensive and slow. Sending the same or similar prompts repeatedly wastes time and money without adding value.",
      solution:
        "Implemented a semantic cache that hashes user prompts into vector embeddings. Future queries are checked against a FAISS index; highly similar prompts instantly return the cached response, bypassing the LLM entirely.",
    },
  },
  {
    title: "PdfCraft — Automated PDF Reporting Microservice",
    tags: ["Python", "Microservices", "Next.js", "PDF Generation"],
    description:
      "An automated Python microservice that asynchronously generates batch PDF invoices and financial reports from raw JSON payloads, offloading heavy processing from the main web application.",
    url: "https://github.com/RajShree1854/PdfCraft",
    impact: "↗ Async generation · Prevents timeouts · −70% response times",
    colSpan: 2,
    rowSpan: 1,
    problemSolution: {
      problem:
        "Generating batch PDFs directly on the main Next.js API thread blocks the event loop, causing server timeouts and severely degrading latency.",
      solution:
        "Decoupled heavy file generation into a dedicated Python microservice to asynchronously process JSON payloads. Prevented timeouts and reduced main application response times by 70%.",
    },
  },
  {
    title: "Shortener API — Stateless Cryptographic Redirect",
    tags: ["Next.js", "AES-256-CBC", "Google reCAPTCHA", "Node.js Crypto"],
    description:
      "A stateless URL redirect service that packs the destination directly into the token via AES-256 encryption — zero database lookups. reCAPTCHA v2 gates every redirect to block bots. −90% unauthorized access, −95% bot-generated links.",
    url: "https://shortener.songoku.dpdns.org",
    impact: "↗ O(1) redirect · No database · −90% unauthorized access",
    colSpan: 2,
    rowSpan: 1,
    problemSolution: {
      problem:
        "Traditional URL shorteners require a database lookup per redirect — introducing latency, connection pool limits, and hosting costs. Bots also auto-follow redirect links.",
      solution:
        "AES-256-CBC encrypts the target URL into the token itself. The server decrypts on the fly — O(1) and fully stateless. reCAPTCHA v2 blocks automated access.",
    },
  },
  {
    title: "ImgNest — Serverless Image Hosting SaaS",
    tags: ["Next.js 14", "Vercel Blob", "MongoDB", "Upstash Redis", "Prisma"],
    description:
      "A serverless image hosting platform. Users drag-and-drop images up to 25MB and get a CDN-backed short link instantly. Vercel Blob for edge storage, MongoDB via Prisma for metadata, Upstash Redis for rate limiting.",
    url: "https://image.songoku.dpdns.org",
    impact: "↗ Cut upload latency 50% · 40% reliability gain · Infinite scale",
    colSpan: 2,
    rowSpan: 1,
    problemSolution: {
      problem:
        "Public image upload services are vulnerable to Denial-of-Wallet attacks — a single attacker can script millions of uploads and bankrupt the developer through storage bandwidth costs.",
      solution:
        "Next.js serverless API validates every upload against Upstash Redis rate limiting. Images stream client-side directly to Vercel Blob CDN (bypassing the 4.5MB serverless payload limit), metadata in MongoDB via Prisma.",
    },
  },
  {
    title: "Smart Financial Portfolio — AI Optimizer",
    tags: ["Next.js 14", "TensorFlow.js", "Simulated Annealing", "Recharts"],
    description:
      "AI-powered portfolio optimizer in TypeScript. Fetches live OHLCV data, engineers RSI/MACD features, trains a TF.js CNN on the fly, then runs Simulated Annealing over thousands of iterations to find the maximum Sharpe Ratio allocation.",
    url: "https://github.com/Rajshree1854/smart-portfolio",
    impact: "↗ ML in serverless routes · SA optimizer · Live backtest equity curve",
    colSpan: 3,
    rowSpan: 1,
    problemSolution: {
      problem:
        "Retail investors lack quantitative portfolio tools. Static mean-variance optimization ignores forward-looking signals.",
      solution:
        "Serverless pipeline trains a CNN on live features per request, feeds predictions into Simulated Annealing to maximize Sharpe Ratio — no external Python backend needed.",
    },
  },
  {
    title: "CF Clearance Scraper — Cloudflare WAF Bypass",
    tags: ["Docker", "Browser Automation", "Python", "Microservices"],
    description:
      "A Dockerized browser-automation microservice generating Cloudflare Turnstile tokens via isolated browser contexts. Reduced WAF bypass failure rate by 90% and cut token generation time by 70%.",
    url: "https://meizhayagan.onrender.com",
    impact: "↗ −90% WAF bypass failures · −70% token generation time",
    colSpan: 2,
    rowSpan: 1,
    problemSolution: {
      problem:
        "Cloudflare Turnstile CAPTCHA requires real browser execution to generate valid clearance tokens — blocking all automated tooling.",
      solution:
        "Dockerized microservice spins up isolated browser contexts, solves Turnstile, and returns valid tokens over a simple API — decoupling WAF bypass from the calling app.",
    },
  },
];

/* ─── Animated Stats Ticker ─────────────────────────────── */
function StatsTicker() {
  const stats = [
    "3 Kafka Brokers",
    "Flink SQL Windows",
    "Real-time Alerts",
    "Event-driven Arch"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stats.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <div
      style={{
        background: "#00B4D8",
        padding: "12px 16px",
        marginTop: 10,
        marginBottom: 10,
        position: "relative",
        overflow: "hidden",
        height: "42px",
      }}
    >
      <style>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
      `}</style>
      {stats.map((stat, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: "12px",
            left: "16px",
            fontFamily: "var(--font-mono)",
            fontSize: 14,
            fontWeight: 700,
            color: "#ffffff",
            textTransform: "uppercase",
            opacity: currentIndex === index ? 1 : 0,
            animation: currentIndex === index ? "fadeInOut 2s ease-in-out" : "none",
          }}
        >
          &gt; {stat}
        </div>
      ))}
    </div>
  );
}

/* ─── Shared button ──────────────────────────────────────── */
function ViewBtn({ url }: { url: string }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ boxShadow: "3px 3px 0px #1A1A1A", fontFamily: "var(--font-mono)" }}
      className="inline-flex items-center gap-2 bg-transparent border-[2px] border-[#1A1A1A] py-2 px-4 text-xs font-bold uppercase tracking-wider"
      whileHover={{ y: -2, boxShadow: "5px 5px 0px #1A1A1A", transition: { type: "spring", stiffness: 400 } }}
    >
      View Project <ExternalLink className="w-3 h-3" />
    </motion.a>
  );
}

/* ─── Bento card ─────────────────────────────────────────── */
function BentoCard({ project, index }: { project: typeof bentoProjects[0]; index: number }) {
  return (
    <motion.div
      className="project-card bg-[#F5F0E8] border-[2px] border-[#1A1A1A] p-4 flex flex-col overflow-hidden"
      style={{
        gridColumn: `span ${project.colSpan}`,
        gridRow: `span ${project.rowSpan}`,
        boxShadow: "3px 3px 0 #1A1A1A",
        borderRadius: 0,
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -6, boxShadow: "8px 8px 0px #1A1A1A", transition: { duration: 0.2, ease: "easeOut" } }}
    >
      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-3">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            style={{ fontFamily: "var(--font-mono)", fontSize: 10, border: "1.5px solid #1A1A1A", background: "#ffffff" }}
            className="px-2 py-[2px] font-bold uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 style={{ fontFamily: "var(--font-display)" }} className="font-black text-base sm:text-lg mb-2 leading-tight">
        {project.title}
      </h3>

      {/* AgriVision accent block */}
      {project.isLarge && (
        <div
          style={{
            background: "#00B4D8",
            border: "none",
            borderRadius: 0,
            padding: "12px 16px",
            marginTop: 10,
            marginBottom: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 20, fontWeight: 700, color: "#1A1A1A", lineHeight: 1.2 }}>
            Kafka + Flink
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#1A1A1A", opacity: 0.7, marginTop: 2 }}>
            Real-time Streaming
          </span>
        </div>
      )}

      {/* Description */}
      <p style={{ fontFamily: "var(--font-display)", fontSize: 12, marginBottom: project.isLarge ? "16px" : "8px" }} className="leading-relaxed">
        {project.description}
      </p>

      {/* Animated Stats Ticker — AgriVision only */}
      {project.isLarge && (
        <div style={{ marginBottom: "16px" }}>
          <StatsTicker />
        </div>
      )}

      {/* Problem / Solution — College Food only */}
      {project.problemSolution && (
        <div style={{
          marginTop: project.isLarge ? "20px" : "10px",
          marginBottom: project.isLarge ? "20px" : "10px",
          paddingTop: 10,
          borderTop: "1px solid rgba(26,26,26,0.12)",
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          lineHeight: 1.6
        }} className="flex-1">
          <p style={{ marginBottom: 6 }}>
            <span style={{ fontWeight: 700, opacity: 0.7, letterSpacing: "0.08em" }}>PROBLEM — </span>
            <span style={{ opacity: 0.85, fontWeight: 400 }}>{project.problemSolution.problem}</span>
          </p>
          <p>
            <span style={{ fontWeight: 700, opacity: 0.7, letterSpacing: "0.08em" }}>SOLUTION — </span>
            <span style={{ opacity: 0.85, fontWeight: 400 }}>{project.problemSolution.solution}</span>
          </p>
        </div>
      )}

      {/* Impact */}
      {project.impact && (
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 10 }} className="opacity-55 mb-3">
          {project.impact}
        </p>
      )}

      <ViewBtn url={project.url} />
    </motion.div>
  );
}

/* ─── Main component ─────────────────────────────────────── */
export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mb-12"
        >

          <h2 style={{ fontFamily: "var(--font-display)" }} className="relative z-10 font-black text-4xl sm:text-5xl">
            Projects
          </h2>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12 }} className="mt-2 opacity-50">
            Things I've built and shipped.
          </p>
        </motion.div>

        {/* ── FEATURED CARD ── */}
        <motion.div
          className="project-card border-[3px] border-[#1A1A1A] bg-[#F5F0E8] overflow-hidden mb-5 flex flex-col sm:flex-row"
          style={{ boxShadow: "7px 7px 0px #1A1A1A", minHeight: 180 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -6, boxShadow: "10px 10px 0px #1A1A1A", transition: { duration: 0.2, ease: "easeOut" } }}
        >
          {/* Yellow accent block — top on mobile, right on desktop */}
          <div
            className="w-full sm:w-[40%] sm:order-last flex flex-col items-center justify-center py-8 sm:py-0"
            style={{ background: "#00B4D8", borderLeft: "0", borderBottom: "3px solid #1A1A1A" }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 28, fontWeight: 700, color: "#1A1A1A" }}>
              AI + LLM
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#1A1A1A" }} className="opacity-70 mt-1">
              100+ Models
            </span>
          </div>

          {/* Left content */}
          <div className="flex-1 p-6 flex flex-col justify-between" style={{ borderRight: "3px solid #1A1A1A" }}>
            <div>
              <p
                style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.15em" }}
                className="uppercase opacity-50 mb-2"
              >
                Featured Project
              </p>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700 }} className="mb-3 leading-tight">
                {featured.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {featured.tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      fontWeight: 700,
                      background: "#00B4D8",
                      border: "2px solid #1A1A1A",
                      padding: "2px 8px",
                      color: "#1A1A1A",
                    }}
                    className="uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p style={{ fontFamily: "sans-serif", fontSize: 12 }} className="leading-relaxed mb-2">
                {featured.description}
              </p>

              {/* Problem / Solution */}
              <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid rgba(26,26,26,0.12)", fontFamily: "var(--font-mono)", fontSize: 11, lineHeight: 1.6 }} className="mb-2">
                <p style={{ marginBottom: 6 }}>
                  <span style={{ fontWeight: 700, opacity: 0.7, letterSpacing: "0.08em" }}>PROBLEM — </span>
                  <span style={{ opacity: 0.85, fontWeight: 400 }}>Understanding an unfamiliar codebase or GitHub repo means constantly switching between the code and an LLM — copy, paste, ask, repeat. It breaks focus and slows everything down.</span>
                </p>
                <p>
                  <span style={{ fontWeight: 700, opacity: 0.7, letterSpacing: "0.08em" }}>SOLUTION — </span>
                  <span style={{ opacity: 0.85, fontWeight: 400 }}>Built RepoLogic to fix my own workflow — chat with any public repo directly, hover over code or docs for instant explanations. A RAG pipeline ingests the repo files and Gemini 2.0 Flash answers queries with full file-level context. No more tab switching.</span>
                </p>
              </div>

              {featured.impact && (
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 10 }} className="opacity-55 mb-4">
                  {featured.impact}
                </p>
              )}
            </div>
            <ViewBtn url={featured.url} />
          </div>
        </motion.div>

        {/* ── BENTO GRID ── */}
        <p
          style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em" }}
          className="uppercase opacity-45 mb-3"
        >
          More Projects
        </p>

        {/* Desktop: 6-col CSS grid */}
        <div
          className="hidden sm:grid gap-[14px]"
          style={{ gridTemplateColumns: "repeat(6, 1fr)" }}
        >
          {bentoProjects.map((project, index) => (
            <BentoCard key={index} project={project} index={index} />
          ))}
          {/* Always building tile */}
          <motion.div
            className="bg-[#00B4D8] border-[2px] border-[#1A1A1A] p-4 flex flex-col justify-between"
            style={{ gridColumn: "span 1", gridRow: "span 1", boxShadow: "3px 3px 0 #1A1A1A", borderRadius: 0 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -6, boxShadow: "8px 8px 0px #1A1A1A", transition: { duration: 0.2, ease: "easeOut" } }}
          >
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700 }} className="opacity-50 mb-1">
                MORE COMING
              </p>
              <h3 style={{ fontFamily: "var(--font-display)" }} className="font-black text-lg mb-4">
                Always building.
              </h3>
            </div>
            <motion.a
              href="https://github.com/Rajshree1854"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-mono)", boxShadow: "3px 3px 0 #1A1A1A" }}
              className="inline-flex items-center gap-1 border-[2px] border-[#1A1A1A] bg-transparent py-2 px-4 text-xs font-bold uppercase tracking-wider self-start"
              whileHover={{ y: -2, boxShadow: "5px 5px 0 #1A1A1A", transition: { type: "spring", stiffness: 400 } }}
            >
              GitHub ↗
            </motion.a>
          </motion.div>
        </div>

        {/* Mobile: single column stack */}
        <div className="flex flex-col gap-4 sm:hidden">
          {bentoProjects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card bg-[#F5F0E8] border-[2px] border-[#1A1A1A] p-4 flex flex-col"
              style={{ boxShadow: "3px 3px 0 #1A1A1A" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{ fontFamily: "var(--font-mono)", fontSize: 10, border: "1.5px solid #1A1A1A", background: "#ffffff" }}
                    className="px-2 py-[2px] font-bold uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 style={{ fontFamily: "var(--font-display)" }} className="font-black text-lg mb-2">
                {project.title}
              </h3>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 12 }} className="leading-relaxed mb-2 flex-1">
                {project.description}
              </p>
              {project.impact && (
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 10 }} className="opacity-55 mb-3">
                  {project.impact}
                </p>
              )}
              <ViewBtn url={project.url} />
            </motion.div>
          ))}
          {/* Always building — mobile */}
          <div
            className="bg-[#00B4D8] border-[2px] border-[#1A1A1A] p-4 flex flex-col gap-3"
            style={{ boxShadow: "3px 3px 0 #1A1A1A" }}
          >
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700 }} className="opacity-50">
              MORE COMING
            </p>
            <h3 style={{ fontFamily: "var(--font-display)" }} className="font-black text-lg">
              Always building.
            </h3>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 12 }} className="leading-relaxed">
              New projects ship regularly. Check GitHub for latest work.
            </p>
            <motion.a
              href="https://github.com/Rajshree1854"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-mono)", boxShadow: "3px 3px 0 #1A1A1A" }}
              className="inline-flex items-center gap-1 border-[2px] border-[#1A1A1A] bg-transparent py-2 px-4 text-xs font-bold uppercase tracking-wider self-start"
              whileHover={{ y: -2, boxShadow: "5px 5px 0 #1A1A1A", transition: { type: "spring", stiffness: 400 } }}
            >
              GitHub ↗
            </motion.a>
          </div>
        </div>

      </div>
    </section>
  );
}
