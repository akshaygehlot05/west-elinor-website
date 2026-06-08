import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 text-white py-24 px-6"
    >
      {/* Background Glow */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
            Let's Build Something Amazing Together
          </h2>

          <p className="text-center text-slate-400 text-lg mb-16 max-w-3xl mx-auto">
            We help businesses turn ideas into scalable software,
            websites, cloud solutions and AI-powered products.
          </p>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* Left Card */}
            <div
              className="
              bg-slate-900/70
              backdrop-blur-md
              border border-slate-800
              rounded-3xl
              p-8
              hover:border-blue-500
              hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]
              transition-all duration-300
              "
            >

              <h3 className="text-3xl font-bold text-blue-500 mb-8">
                Get In Touch
              </h3>

              <div className="space-y-6">

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <FaEnvelope />
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">
                      Email
                    </p>

                    <p className="text-lg">
                      info@Westelinortechnologies.com
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">
                      Phone
                    </p>

                    <p className="text-lg">
                      +91 98765 43210
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">
                      Location
                    </p>

                    <p className="text-lg">
                      Jaipur, Rajasthan, India
                    </p>
                  </div>

                </div>

              </div>

              <div className="border-t border-slate-700 mt-8 pt-6">

                <h4 className="font-semibold text-xl mb-2">
                  Working Hours
                </h4>

                <p className="text-slate-400">
                  Monday - Saturday
                </p>

                <p className="text-blue-400">
                  9:00 AM - 7:00 PM
                </p>

              </div>
              {/* Social Icons */}
              <div className="flex gap-5 mt-8">

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  w-12 h-12
                  bg-slate-800
                  rounded-full
                  flex items-center justify-center
                  hover:bg-blue-600
                  hover:scale-110
                  transition-all duration-300
                  "
                >
                  <FaLinkedin className="text-xl" />
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  w-12 h-12
                  bg-slate-800
                  rounded-full
                  flex items-center justify-center
                  hover:bg-blue-600
                  hover:scale-110
                  transition-all duration-300
                  "
                >
                  <FaGithub className="text-xl" />
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  w-12 h-12
                  bg-slate-800
                  rounded-full
                  flex items-center justify-center
                  hover:bg-pink-500
                  hover:scale-110
                  transition-all duration-300
                  "
                >
                  <FaInstagram className="text-xl" />
                </a>

              </div>

            </div>

            {/* Right Card */}
            <form
              className="
              bg-slate-900/70
              backdrop-blur-md
              border border-slate-800
              rounded-3xl
              p-8
              space-y-5
              hover:border-blue-500
              hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]
              transition-all duration-300
              "
            >

              <input
                type="text"
                placeholder="Your Name"
                className="
                w-full
                bg-slate-800
                border border-slate-700
                rounded-xl
                p-4
                outline-none
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/50
                hover:border-blue-500
                transition-all
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                w-full
                bg-slate-800
                border border-slate-700
                rounded-xl
                p-4
                outline-none
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/50
                hover:border-blue-500
                transition-all
                "
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="
                w-full
                bg-slate-800
                border border-slate-700
                rounded-xl
                p-4
                outline-none
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-500/50
                hover:border-blue-500
                transition-all
                "
              ></textarea>

              <button
                type="submit"
                className="
                w-full
                bg-blue-600
                hover:bg-blue-700
                hover:scale-[1.03]
                py-4
                rounded-xl
                font-semibold
                text-lg
                shadow-lg
                transition-all duration-300
                "
              >
                🚀 Send Message
              </button>

            </form>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;