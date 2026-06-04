import { motion } from "framer-motion";
import {
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaRobot,
  FaPalette,
  FaBullhorn,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    desc: "Custom websites and web applications built with modern technologies.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Development",
    desc: "Scalable Android and iOS applications with premium user experience.",
  },
  {
    icon: <FaPalette />,
    title: "UI / UX Design",
    desc: "Beautiful and intuitive designs focused on user engagement.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Solutions",
    desc: "Secure cloud infrastructure, migration and deployment services.",
  },
  {
    icon: <FaRobot />,
    title: "AI Solutions",
    desc: "AI-powered automation and intelligent business systems.",
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    desc: "SEO, branding and marketing strategies for business growth.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center mb-4">
            Our Services
          </h2>

          <p className="text-center text-slate-400 mb-14">
            Delivering innovative digital solutions for modern businesses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="
                bg-slate-800/70
                backdrop-blur-md
                border border-slate-700
                rounded-3xl
                p-8
                hover:border-blue-500
                hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]
                hover:scale-105
                hover:-translate-y-3
                transition-all duration-300
              "
            >

              <div className="text-5xl text-blue-500 mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-slate-400">
                {service.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;