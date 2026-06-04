import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";

const projects = [
  {
    title: "Student Task Tracker",
    image: project1,
    description: "MERN Stack application for task management.",
    tech: ["React.js", "Node.js", "MongoDB"],
    live: "https://student-task-tracker-dekn.vercel.app/#",
    github: "https://github.com/akshaygehlot05/student-task-tracker"
  },
  {
    title: "Expense Tracker",
    image: project2,
    description: "Track income, expenses and financial analytics with ease.",
    tech: ["React.js", "Express.js", "MongoDB"],
    live: "https://expense-tracker-tau-murex.vercel.app/",
    github: "https://github.com/akshaygehlot05/expense-tracker"
  }
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center mb-4">
            Featured Projects
          </h2>

          <p className="text-center text-slate-400 mb-14">
            Real-world projects built using React, Node.js, Express and MongoDB.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="
                bg-slate-900
                rounded-3xl
                overflow-hidden
                border border-slate-800
                hover:border-blue-500
                hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]
                hover:-translate-y-3
                transition-all duration-300
                flex flex-col
              "
            >

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-48
                    object-cover
                    object-top
                    hover:scale-110
                    transition duration-700
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              <div className="p-8 flex flex-col flex-grow">

                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="
                        bg-blue-600/20
                        text-blue-400
                        border border-blue-500/30
                        px-4 py-2
                        rounded-full
                        text-sm
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <button
                      className="
                      w-full
                      bg-blue-600
                      hover:bg-blue-700
                      py-3
                      rounded-xl
                      flex items-center
                      justify-center
                      gap-2
                      font-semibold
                      text-lg
                      transition-all duration-300
                      hover:scale-105
                      shadow-lg shadow-blue-600/30
                      "
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </button>
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <button
                      className="
                      w-full
                      bg-slate-800
                      border border-slate-700
                      hover:border-blue-500
                      hover:bg-slate-700
                      py-3
                      rounded-xl
                      flex items-center
                      justify-center
                      gap-2
                      font-semibold
                      text-lg
                      transition-all duration-300
                      hover:scale-105
                      "
                    >
                      <FaGithub />
                      GitHub
                    </button>
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Portfolio;