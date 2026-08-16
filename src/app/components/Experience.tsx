import { motion } from "motion/react";

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header with Number */}
          <div className="relative mb-12">

            <h2 style={{ fontFamily: 'var(--font-display)' }} className="relative z-10 font-black text-4xl sm:text-5xl">
              Experience
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative border-l-[4px] border-[#1A1A1A] pl-8 sm:pl-12 space-y-12">
            {/* Experience Entry */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {/* Timeline Dot - 12px square (zero-radius, neo-brutalist) */}
              <div className="absolute -left-[14px] sm:-left-[14px] top-2 w-[12px] h-[12px] bg-[#1A1A1A] border-[2px] border-[#1A1A1A]" />

              {/* Card */}
              <motion.div
                className="bg-[#FFFFFF] border-[3px] border-[#1A1A1A] p-6 sm:p-8"
                style={{ boxShadow: "5px 5px 0px #1A1A1A" }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "8px 8px 0px #1A1A1A",
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="mb-4">
                  <h3 style={{ fontFamily: 'var(--font-display)' }} className="font-black text-2xl sm:text-3xl mb-3">
                    Software Engineer (Freelance)
                  </h3>
                  {/* Company in yellow pill */}
                  <span 
                    style={{ fontFamily: 'var(--font-mono)' }}
                    className="inline-block bg-[#00B4D8] border-[2px] border-[#1A1A1A] px-4 py-1 text-xs uppercase tracking-wider"
                  >
                    Self-Employed — Jan 2025 to Present
                  </span>
                </div>

                <ul style={{ fontFamily: 'var(--font-display)' }} className="space-y-3 text-base sm:text-lg">
                  <li className="flex gap-3">
                    <span className="text-[#00B4D8] font-black">·</span>
                    <span>Developed ImgNest, a full-stack Next.js 14 image-hosting SaaS platform with CDN delivery, rate limiting, and a secure admin dashboard, cutting average upload latency by 50% and increasing platform reliability by 40%.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#00B4D8] font-black">·</span>
                    <span>Implemented Shortener API, a Next.js URL-shortening SaaS featuring AES encryption and Google reCAPTCHA, reducing unauthorized access attempts by 90% and decreasing bot-generated link creation by 95%.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#00B4D8] font-black">·</span>
                    <span>Designed HiFiTideBot, a Dockerized Telegram bot automating lossless FLAC/M4A music retrieval across Tidal, Qobuz, and Apple Music, reducing manual search effort by 10+ hours weekly (80%) and improving retrieval speed by 60%.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#00B4D8] font-black">·</span>
                    <span>Architected CF Clearance Scraper, a Dockerized browser-automation microservice generating Turnstile tokens via isolated browser contexts; reduced WAF bypass failure rate by 90% and decreased token generation time by 70%.</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
