import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#F5F0E8] border-b-[3px] border-[#1A1A1A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ fontFamily: 'var(--font-mono)', position: 'relative' }}
            className="nav-link font-bold text-xl group"
          >
            songoku.dev
            <span
              className="absolute bottom-0 left-0 h-[2.5px] bg-[#00B4D8] w-0 group-hover:w-full transition-all duration-[220ms] ease-out"
            />
          </motion.button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{ fontFamily: 'var(--font-mono)' }}
                className="nav-link relative text-sm uppercase tracking-wider group"
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#00B4D8]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {activeSection !== item.id && (
                  <span className="absolute -bottom-1 left-0 h-[2.5px] bg-[#00B4D8] w-0 group-hover:w-full transition-all duration-[220ms] ease-out" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 border-[2px] border-[#1A1A1A]"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t-[3px] border-[#1A1A1A] bg-[#F5F0E8]"
          >
            <div className="flex flex-col px-4 py-4 gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{ fontFamily: 'var(--font-mono)' }}
                  className={`nav-link text-left py-3 px-4 text-sm uppercase tracking-wider border-[2px] border-transparent ${activeSection === item.id
                    ? "bg-[#00B4D8] text-[#F5F0E8] border-[#1A1A1A]"
                    : "hover:bg-[#00B4D8]/20"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
