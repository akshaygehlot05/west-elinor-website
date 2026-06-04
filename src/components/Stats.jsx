import { motion } from "framer-motion";

const stats = [
  {
    number: "50+",
    label: "Projects",
  },
  {
    number: "20+",
    label: "Clients",
  },
  {
    number: "5+",
    label: "Years Experience",
  },
  {
    number: "24/7",
    label: "Support",
  },
];

const Stats = () => {
  return (
    <section className="relative bg-slate-950 py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-20 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-3xl p-8 text-center hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]"
          >
            <h2 className="text-5xl font-bold text-blue-500">
              {item.number}
            </h2>

            <p className="mt-3 text-slate-400 text-lg">
              {item.label}
            </p>
          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Stats;