import React from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { title: "الرئيسية", to: "home" },
    { title: "من نحن", to: "about" },
    { title: "لماذا نحن", to: "features" },
    { title: "خدماتنا", to: "services" },
    { title: "تواصل معنا", to: "contact" },
  ];

  return (
    <header className="fixed w-full bg-black/90 text-white z-50">
      <div className="container mx-auto px-4 md:px-0 ">
        <div className="flex justify-between items-center h-20">
          <div className="lg:text-2xl font-bold md:text-base sm:text-sm ">
            تنظيم وتنسيق الحفلات والمناسبات داخل وخارج الرياض
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 text-lg font-semibold lg:text-base md:text-sm">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="cursor-pointer border-b-2 border-transparent hover:border-gray-400 transition-colors ml-8"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 text-lg font-semibold">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="block py-2 text-center hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
