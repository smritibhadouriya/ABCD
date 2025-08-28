import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({
  logoText = "MARCADEO",
  navLinks = [
    {
      name: "Our Products",
      subMenu: [
        { name: "Trackopia", to: "https://trackopia.com/" },
        { name: "Festinator", to: "https://festinator.com/" },
        { name: "Earnadda", to: "https://earnadda.co.in/" },
        { name: "Cashbackgullak", to: "http://cashbackgullak.com/" },
        { name: "Rewarddunia", to: "https://www.rewarddunia.com/" },
        { name: "CashIntern", to: "https://cashintern.com/" },
      ],
    },
    { name: "Services", to: "/services" },
    { name: "About Us", to: "/about" },
  ],
  contactText = "Contact Us",
}) => {
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolledUp(currentScrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setHoveredMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMouseEnter = (index) => {
    setHoveredMenu(index);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

 return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 w-full py-4 transition-all duration-300 ${
        isScrolledUp ? "bg-white shadow-md" : "bg-transparent"
      } w-[calc(100%-48px)] mx-auto font-inter`} // Added font-inter
    >
      <div className="px-4 lg:px-10 mx-auto flex items-center justify-between cursor-pointer">
        <motion.div
          className={`${
            isScrolledUp ? "text-orange-600" : "text-orange-500"
          } text-3xl sm:text-4xl font-bold font-inter`} // Added font-inter
          onClick={() => navigate("/")}
        >
          {logoText}
        </motion.div>
        <div className="flex items-center space-x-6">
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link, index) => (
              <div
                key={index}
                ref={link.subMenu ? menuRef : null}
                className="relative group"
              >
                {link.subMenu ? (
                  <span
                    className={`${
                      isScrolledUp
                        ? "text-orange-600 text-lg font-bold hover:text-orange-600"
                        : "text-orange-500 font-bold text-lg hover:text-orange-600"
                    } cursor-pointer relative inline-flex items-center gap-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-current after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out font-inter`} // Added font-inter
                    onMouseEnter={() => handleMouseEnter(index)}
                  >
                    {link.name}
                    <motion.svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{
                        rotate: hoveredMenu === index ? -180 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </span>
                ) : (
                  <Link
                    to={link.to}
                    className={`${
                      isScrolledUp
                        ? "text-orange-600 font-bold text-lg hover:text-orange-600"
                        : "text-orange-500 font-bold text-lg hover:text-orange-600"
                    } relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-current after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out font-inter`} // Added font-inter
                  >
                    {link.name}
                  </Link>
                )}

                {/* Enhanced Dropdown Menu */}
                {link.subMenu && hoveredMenu === index && (
                  <div
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 20, scale: 0.95 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      className="absolute top-full left-0 mt-3 w-56 rounded-xl shadow-2xl bg-white border border-gray-100 py-3 overflow-hidden font-inter" // Added font-inter
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,1) 100%)",
                        backdropFilter: "blur(10px)",
                        boxShadow:
                          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                      }}
                    >
                      <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45"></div>

                      {link.subMenu.map((subItem, i) => (
                        <motion.a
                          key={i}
                          href={subItem.to}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: i * 0.1,
                            duration: 0.3,
                            ease: "easeOut",
                          }}
                          className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-50 hover:text-orange-700 transition-all duration-300 group relative overflow-hidden font-inter" // Added font-inter
                        >
                          <div className="flex items-center justify-between">
                            <span className="relative z-10">
                              {subItem.name}
                            </span>
                            <motion.svg
                              className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              initial={{ x: -10 }}
                              whileHover={{ x: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </motion.svg>
                          </div>

                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-black to-orange-500 opacity-0 group-hover:opacity-5"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                          />

                          <motion.div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 w-0 group-hover:w-full transition-all duration-300" />
                        </motion.a>
                      ))}
                    </motion.div>
                  </div>
                )}
              </div>
            ))}
            <motion.button
              className={`${
                isScrolledUp
                  ? "bg-orange-600 font-semibold text-white hover:bg-orange-700"
                  : "bg-orange-500 font-semibold text-white hover:bg-orange-600"
              } px-4 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 font-inter`} // Added font-inter
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
            >
              {contactText}
            </motion.button>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="hamburger focus:outline-none"
            >
              <span className={`text-3xl ${isScrolledUp ? "text-orange-600" : "text-orange-500"} font-inter`}> 
                ☰
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-50 font-inter`} 
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-xl text-orange-600 font-inter" 
        >
          ✖
        </button>
        <div className="mt-12 p-4">
          {navLinks.map((link, index) => (
            <div key={index} className="mb-4">
              {link.subMenu ? (
                <div>
                  <span className="block text-gray-800 font-medium py-2 font-inter"> 
                    {link.name}
                  </span>
                  <div className="ml-4">
                    {link.subMenu.map((subItem, i) => (
                      <a
                        key={i}
                        href={subItem.to}
                        className="block text-gray-600 hover:text-orange-600 py-2 text-sm font-inter" 
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={link.to}
                  className="block text-gray-800 hover:text-orange-600 py-2 font-medium font-inter" 
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <button
            className="bg-orange-600 text-white px-4 py-2 rounded-full w-full mt-4 hover:bg-orange-700 transition-colors duration-300 font-inter" // Added font-inter
            onClick={() => navigate("/contact")}
          >
            {contactText}
          </button>
        </div>
      </motion.div>
    </motion.nav>
);
};

export default Navbar;