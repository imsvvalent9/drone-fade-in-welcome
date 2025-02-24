
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Index = () => {
  const [isIntro, setIsIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <AnimatePresence mode="wait">
        {isIntro ? (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center min-h-screen"
          >
            <motion.div
              initial={{ scale: 0.5, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              transition={{
                duration: 2,
                ease: "easeOut"
              }}
              className="w-64 h-64 bg-white rounded-full"
            />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center justify-center min-h-screen text-white"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-sm uppercase tracking-widest mb-4"
            >
              Bienvenido a
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-5xl font-light tracking-wider mb-8"
            >
              Drone Experience
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-lg text-gray-400 max-w-md text-center"
            >
              Explora el futuro de la tecnología de drones con nosotros
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
