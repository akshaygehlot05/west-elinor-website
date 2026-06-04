import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-950 text-white py-24 px-6 scroll-mt-24"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        >

        <h2 className="text-4xl font-bold text-center mb-12">
          About Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h3 className="text-3xl font-semibold mb-4 text-blue-500">
              Empowering Businesses Through Technology
            </h3>

            <p className="text-slate-400 leading-8">
              TechNova Solutions is a modern IT company delivering
              innovative digital products, enterprise applications,
              cloud services and AI-powered solutions.
            </p>

            <p className="text-slate-400 mt-6 leading-8">
              Our mission is to help businesses grow faster
              through scalable technology and exceptional user experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="bg-slate-900 p-6 rounded-2xl text-center">
              <h3 className="text-4xl font-bold text-blue-500">50+</h3>
              <p>Projects Delivered</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl text-center">
              <h3 className="text-4xl font-bold text-blue-500">20+</h3>
              <p>Happy Clients</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl text-center">
              <h3 className="text-4xl font-bold text-blue-500">5+</h3>
              <p>Years Experience</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl text-center">
              <h3 className="text-4xl font-bold text-blue-500">24/7</h3>
              <p>Support</p>
            </div>

          </div>

        </div>

        </motion.div>
    </section>
  );
};

export default About;