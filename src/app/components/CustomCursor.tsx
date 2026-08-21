import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [circleSize, setCircleSize] = useState(0); // 0 = hidden, 80 = p, 100 = project-card
  const [onInteractive, setOnInteractive] = useState(false); // true when on button/link
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const circleX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const circleY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const squareX = useSpring(mouseX, { stiffness: 30, damping: 8 });
  const squareY = useSpring(mouseY, { stiffness: 30, damping: 8 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check for button/link first — no circle, no square
      if (target.closest("button, a, .nav-link")) {
        setCircleSize(0);
        setOnInteractive(true);
        return;
      }
      setOnInteractive(false);
      // Project card — large circle
      if (target.closest(".project-card")) {
        setCircleSize(100);
        return;
      }
      // Paragraph text — medium circle
      if (target.tagName === "P") {
        setCircleSize(80);
        return;
      }
      setCircleSize(0);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [mouseX, mouseY, visible]);

  const showCircle = circleSize > 0;
  // Square only shows when: visible, circle not active, not on button/link
  const showSquare = visible && !showCircle && !onInteractive;

  return (
    <>
      {/* Inverting Circle — project-card (100px) or p (80px) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: circleX,
          y: circleY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "white",
          mixBlendMode: "difference",
        }}
        animate={{
          width: showCircle ? `${circleSize}px` : "0px",
          height: showCircle ? `${circleSize}px` : "0px",
          opacity: visible && showCircle ? 1 : 0,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />

      {/* Trailing Square — hidden when circle is active */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: squareX,
          y: squareY,
          translateX: "-50%",
          translateY: "-50%",
          width: "24px",
          height: "24px",
          backgroundColor: "transparent",
          border: "2.5px solid #ffffff",
          mixBlendMode: "difference",
          borderRadius: 0,
          opacity: showSquare ? 1 : 0,
        }}
        animate={{ rotate: 360 }}
        transition={{
          rotate: { repeat: Infinity, duration: 2, ease: "linear" },
        }}
      />
    </>
  );
}
