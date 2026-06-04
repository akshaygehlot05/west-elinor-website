import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="TechNova"
            className="w-20 h-20 object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]"
          />

          <h1 className="text-2xl font-bold text-blue-500">
            TechNova
          </h1>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-slate-300 font-medium">

          <li>
            <a href="#home" className="hover:text-blue-500 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-500 transition">
              About
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-blue-500 transition">
              Services
            </a>
          </li>

          <li>
            <a href="#team" className="hover:text-blue-500 transition">
              Team
            </a>
          </li>

          <li>
            <a href="#portfolio" className="hover:text-blue-500 transition">
              Portfolio
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-500 transition">
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  );
};

export default Navbar;