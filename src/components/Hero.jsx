import { motion } from "framer-motion";
import heroImage from "../assets/hero.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <span className="text-blue-500 font-semibold">
            Welcome to West Elinor Technologies
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
            Enlightening World with 
            <span className="text-blue-500"> Technology</span>
          </h1>

          <p className="text-slate-400 text-lg mb-8">
            West Elinor Technologies is an IT services and consulting company focused on delivering web, mobile, e-learning, cloud, and AI-powered business solutions.
          </p>

          <div className="flex gap-4">

            <a href="#services">
              <button
                className="
                bg-blue-600
                hover:bg-blue-700
                hover:scale-105
                transition-all duration-300
                px-8 py-3
                rounded-xl
                font-semibold
                "
              >
                Get Started
              </button>
            </a>

            <a href="#contact">
              <button
                className="
                border border-slate-600
                hover:border-blue-500
                hover:text-blue-400
                hover:scale-105
                transition-all duration-300
                px-8 py-3
                rounded-xl
                font-semibold
                "
              >
                Contact Us
              </button>
            </a>

          </div>
        </motion.div>

        <motion.img
          src={heroImage}
          alt="Hero"
          className="
            w-full
            rounded-3xl
            shadow-[0_0_50px_rgba(59,130,246,0.25)]
          "
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />


      </div>
    </section>
  );
};

export default Hero;