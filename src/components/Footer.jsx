import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-slate-800 text-slate-400">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-blue-500 mb-4">
              TechNova
            </h2>

            <p className="leading-7">
              Delivering innovative digital solutions,
              web applications, mobile apps and AI-powered
              technologies worldwide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-5">
              Services
            </h3>

            <ul className="space-y-3">
              <li className="hover:text-blue-500 cursor-pointer transition">
                Web Development
              </li>

              <li className="hover:text-blue-500 cursor-pointer transition">
                Mobile Apps
              </li>

              <li className="hover:text-blue-500 cursor-pointer transition">
                Cloud Solutions
              </li>

              <li className="hover:text-blue-500 cursor-pointer transition">
                AI Solutions
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="hover:text-blue-500 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-blue-500 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-blue-500 transition"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#portfolio"
                  className="hover:text-blue-500 transition"
                >
                  Portfolio
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-500 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4">

              <p className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500" />
                info@technova.com
              </p>

              <p>
                Jaipur, Rajasthan, India
              </p>

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
                  href="https://github.com/akshaygehlot05"
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
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 text-center">

          <p>
            © 2026 West Elinor Technologies. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;