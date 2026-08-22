import { motion } from "motion/react";

export function Hero() {
  const headline = "Hi, I'm Raj";

  return (
    <section className="min-h-[85vh] pt-32 pb-[60px] px-4 sm:px-6 lg:px-8 relative">


      <style>{`
        .heading-with-underline {
          position: relative;
          display: inline-block;
        }
        .heading-with-underline::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 0;
          height: 3px;
          background-color: #00B4D8;
          transition: width 0.3s ease;
        }
        .heading-with-underline:hover::after {
          width: 100%;
        }
        
        .tag-chip-container {
          position: relative;
          width: 100%;
          height: 100%;
        }
        
        .tag-chip {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          white-space: nowrap;
        }
        
        @media (min-width: 1024px) {
          .tag-chip {
            top: var(--d-top);
            left: var(--d-left);
            transform: translate(-50%, 0);
          }
          
          .tag-chip-container:hover .tag-chip {
            left: 50% !important;
            transform: translate(-50%, 0);
            width: 140px;
            text-align: center;
          }
          
          .tag-chip-container:hover .tag-chip:nth-child(1) { top: calc(50% - 80px) !important; }
          .tag-chip-container:hover .tag-chip:nth-child(2) { top: calc(50% - 40px) !important; }
          .tag-chip-container:hover .tag-chip:nth-child(3) { top: calc(50%) !important; }
          .tag-chip-container:hover .tag-chip:nth-child(4) { top: calc(50% + 40px) !important; }
          .tag-chip-container:hover .tag-chip:nth-child(5) { top: calc(50% + 80px) !important; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Side - 60% */}
          <motion.div
            className="lg:col-span-3 space-y-8 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            {/* Animated Headline */}
            <div className="space-y-2 pb-4">
              {headline.split('\n').map((line, lineIndex) => (
                <div key={lineIndex} className="overflow-visible">
                  <motion.h1
                    style={{ fontFamily: 'var(--font-display)' }}
                    className="heading-with-underline font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.1]"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: lineIndex * 0.2,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    {line.split('').map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: lineIndex * 0.2 + charIndex * 0.03 }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.h1>
                </div>
              ))}
            </div>

            {/* Sub-headline */}
            <motion.p
              style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}
              className="text-base sm:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Still learning. Always building. Occasionally sleeping.
            </motion.p>

            {/* Bio */}
            <motion.p
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-xl sm:text-2xl max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Still figuring things out — but shipping along the way.
              <br />
              Open for internships and cool collabs.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.button
                style={{
                  boxShadow: "5px 5px 0px #1A1A1A",
                  fontFamily: 'var(--font-mono)'
                }}
                className="px-8 py-4 bg-[#00B4D8] border-[3px] border-[#1A1A1A] font-bold uppercase tracking-wider"
                whileHover={{
                  y: -2,
                  boxShadow: "8px 8px 0px #1A1A1A",
                  transition: { type: "spring", stiffness: 400 }
                }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects →
              </motion.button>

              <motion.a
                href="https://drive.google.com/file/d/12RrICg-Xr377IepjkzoHqpPJa6KM4Woj"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  boxShadow: "5px 5px 0px #1A1A1A",
                  fontFamily: 'var(--font-mono)'
                }}
                className="inline-flex items-center px-8 py-4 bg-transparent border-[3px] border-[#1A1A1A] font-bold uppercase tracking-wider"
                whileHover={{
                  y: -2,
                  boxShadow: "8px 8px 0px #1A1A1A",
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                Download Resume ↓
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - 40% */}
          <motion.div
            className="lg:col-span-2 relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="tag-chip-container flex flex-wrap justify-center gap-3 lg:block lg:relative h-auto lg:h-[500px] mt-8 lg:mt-0">
              {[
                { text: "#FullStack", top: "8%", left: "55%", delay: 0 },
                { text: "#GenAI", top: "25%", left: "10%", delay: 0.15 },
                { text: "#AgenticAI", top: "45%", left: "60%", delay: 0.3 },
                { text: "#OpenSource", top: "65%", left: "15%", delay: 0.45 },
                { text: "#DSA", top: "80%", left: "50%", delay: 0.6 },
              ].map((tag, index) => (
                <motion.div
                  key={index}
                  className="tag-chip relative lg:absolute bg-[#F5F0E8] border-[2px] border-[#1A1A1A] px-4 py-2"
                  style={{
                    boxShadow: "3px 3px 0px #1A1A1A",
                    "--d-top": tag.top,
                    "--d-left": tag.left,
                  } as React.CSSProperties}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -8, 0],
                    rotate: [-2, 2, -2],
                  }}
                  transition={{
                    opacity: { delay: 1 + tag.delay, duration: 0.3 },
                    scale: { delay: 1 + tag.delay, duration: 0.3 },
                    y: { duration: 3 + index * 0.4, repeat: Infinity, ease: "easeInOut", delay: tag.delay },
                    rotate: { duration: 4 + index * 0.3, repeat: Infinity, ease: "easeInOut", delay: tag.delay },
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 600 }}>
                    {tag.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
