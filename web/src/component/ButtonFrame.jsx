import { motion } from "framer-motion";

function Button3D({ children, onClick, className = "", disabled = false }) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative px-16 py-5 bg-white text-black font-extrabold uppercase 
        rounded-[10px] shadow-md text-center transform-gpu 
        perspective-[800px] transition-transform duration-200
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:translate-y-[7px]"}
        ${className}
      `}
      style={{ transform: "rotateX(32deg)" }}
      whileHover={disabled ? {} : { rotateX: 38, y: 7 }}
    >
      {/* Glowy blur effect */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 translate-y-[50px] w-[200%] h-[400%] bg-white/30 blur-[80px] z-[-1]" />
      {children}
    </motion.button>
  );
}

export default Button3D;
