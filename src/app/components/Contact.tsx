import { motion } from "motion/react";
import { Mail, Github, Linkedin } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A] text-[#F5F0E8] scroll-mt-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
        
        .tooltip-label {
          position: absolute;
          top: -40px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Caveat', cursive;
          font-size: 24px;
          font-weight: 700;
          color: #F0E040;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transform: translateX(-50%) translateY(8px);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .social-icon-wrapper:hover .tooltip-label {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
        
        .social-icon-wrapper:hover .icon-scale {
          transform: scale(1.15);
          transition: transform 0.2s ease;
        }
        
        .icon-scale {
          transition: transform 0.2s ease;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <motion.h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="font-black text-5xl sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Let's build something.
          </motion.h2>

          {/* Sub-text */}
          <motion.p
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-xl sm:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Open for internships, collabs, and cool ideas. Let's talk.
          </motion.p>

          {/* Email Button */}
          <motion.a
            href="mailto:rajshreer80@gmail.com"
            style={{
              boxShadow: "5px 5px 0px #00B4D8",
              fontFamily: 'var(--font-mono)'
            }}
            className="inline-block bg-[#00B4D8] text-[#F5F0E8] border-[3px] border-[#00B4D8] px-8 py-4 font-bold uppercase tracking-wider"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
            whileHover={{
              y: -2,
              boxShadow: "8px 8px 0px #00B4D8",
              transition: { type: "spring", stiffness: 400 }
            }}
          >
            <Mail className="inline w-5 h-5 mr-2" />
            rajshreer80@gmail.com
          </motion.a>

          {/* Social Links */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="social-icon-wrapper relative"
              whileHover={{ y: -2 }}
            >
              <span className="tooltip-label">See my code!</span>
              <a
                href="https://github.com/Rajshree1854"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-mono)' }}
                className="flex items-center gap-2 border-[3px] border-[#F5F0E8] px-6 py-3 uppercase text-sm hover:bg-[#00B4D8] hover:text-[#1A1A1A] hover:border-[#00B4D8] transition-colors"
              >
                <Github className="w-5 h-5 icon-scale" />
                GitHub
              </a>
            </motion.div>

            <motion.div
              className="social-icon-wrapper relative"
              whileHover={{ y: -2 }}
            >
              <span className="tooltip-label">Let's connect!</span>
              <a
                href="https://www.linkedin.com/in/songoku"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-mono)' }}
                className="flex items-center gap-2 border-[3px] border-[#F5F0E8] px-6 py-3 uppercase text-sm hover:bg-[#00B4D8] hover:text-[#1A1A1A] hover:border-[#00B4D8] transition-colors"
              >
                <Linkedin className="w-5 h-5 icon-scale" />
                LinkedIn
              </a>
            </motion.div>

            <motion.div
              className="social-icon-wrapper relative"
              whileHover={{ y: -2 }}
            >
              <span className="tooltip-label">Say hello!</span>
              <a
                href="mailto:rajshreer80@gmail.com"
                style={{ fontFamily: 'var(--font-mono)' }}
                className="flex items-center gap-2 border-[3px] border-[#F5F0E8] px-6 py-3 uppercase text-sm hover:bg-[#00B4D8] hover:text-[#1A1A1A] hover:border-[#00B4D8] transition-colors"
              >
                <Mail className="w-5 h-5 icon-scale" />
                Email
              </a>
            </motion.div>
          </motion.div>

          {/* Footer */}
          <motion.div
            className="pt-16 border-t-[3px] border-[#F5F0E8]/20 mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <p style={{ fontFamily: 'var(--font-mono)' }} className="text-sm opacity-60">
              Built by SonGoku ·{' '}
              <a
                href="https://github.com/Rajshree1854/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#00B4D8', textDecoration: 'none' }}
                className="hover:underline"
              >
                Source code on GitHub
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
