import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";

const teamMembers = [
  {
    name: "Akshay Gehlot",
    role: "Founder & CEO",
    image: team1,
  },
  {
    name: "Rahul Sharma",
    role: "Full Stack Developer",
    image: team2,
  },
  {
    name: "Priya Singh",
    role: "UI/UX Designer",
    image: team3,
  },
  {
    name: "Mohit Jain",
    role: "Cloud Engineer",
    image: team4,
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-5xl font-bold text-center mb-4">
            Meet Our Team
          </h2>

          <p className="text-center text-slate-400 mb-14">
            Experienced professionals building world-class digital solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                bg-slate-900
                rounded-3xl
                overflow-hidden
                border border-slate-800
                hover:border-blue-500
                hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]
                hover:-translate-y-3
                transition-all duration-300
              "
            >

              <div className="h-80 bg-slate-800 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold">
                  {member.name}
                </h3>

                <p className="text-blue-500 mt-2">
                  {member.role}
                </p>

                <button
                  className="
                    mt-5
                    flex
                    items-center
                    gap-2
                    text-slate-400
                    hover:text-blue-500
                    transition
                  "
                >
                  <FaLinkedin />
                  LinkedIn
                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Team;