import { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import '@fontsource/montserrat';

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-6 flex flex-col justify-center items-center px-4 relative overflow-hidden font-['Montserrat']">
      <ReactConfetti
        width={windowSize.width}
        height={windowSize.height}
        numberOfPieces={200}
        recycle={true}
      />
      
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        className="text-center text-white mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">
          Special VIP Access
        </h1>
        <p className="text-xl md:text-2xl">From Kane Brown</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 text-center transform hover:shadow-2xl transition-all"
          >
            <img 
              src="/boy1.jpeg" 
              alt="Ryan Poynter" 
              className="w-full h-64 object-cover rounded-xl mb-4 shadow-lg hover:shadow-xl transition-all"
            />
            <motion.p 
              className="text-white text-2xl font-semibold mb-2"
              whileHover={{ scale: 1.1 }}
            >
              Justin Lowery
            </motion.p>
            <p className="text-white/80">VIP Access Granted</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 text-center transform hover:shadow-2xl transition-all"
          >
            <img 
              src="/main_lady.jpeg" 
              alt="Nickie Poynter" 
              className="w-full h-64 object-cover rounded-xl mb-4 shadow-lg hover:shadow-xl transition-all"
            />
            <motion.p 
              className="text-white text-2xl font-semibold mb-2"
              whileHover={{ scale: 1.1 }}
            >
              Nickie Poynter
            </motion.p>
            <p className="text-white/80">Special Guest of Honor</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 text-center transform hover:shadow-2xl transition-all"
          >
            <img 
              src="/boy3.jpeg" 
              alt="Justin Lowery" 
              className="w-full h-64 object-cover rounded-xl mb-4 shadow-lg hover:shadow-xl transition-all"
            />
            <motion.p 
              className="text-white text-2xl font-semibold mb-2"
              whileHover={{ scale: 1.1 }}
            >
              Ryan Poynter
            </motion.p>
            <p className="text-white/80">VIP Access Granted</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-12 text-center text-white"
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-4">🎵 Welcome to My Concert 🎵</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
          To my beautiful family, I can't wait to share this special evening with you all.
          Get ready for an unforgettable night of country music and memories!
        </p>
        <motion.div 
          className="mt-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all transform hover:translate-y-[-2px]">
            See You There! ❤️
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
