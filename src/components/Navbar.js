import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo"> Leo Club Of Nakuru</div>

      <div className="desktop-links">
        <a href="/">Rules</a>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-links"
            variants={mobileVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <a href="/">Rules</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
