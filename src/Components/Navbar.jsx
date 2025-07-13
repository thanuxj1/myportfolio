import { cn } from "@/lib/utils";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down
        setShowNav(false);
      } else {
        // scrolling up
        setShowNav(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-300 transform",
          isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5",
          showNav ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="container flex items-center justify-between">
          <a
            className="text-xl font-bold text-primary flex items-center"
            href="#hero"
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground"> Thanuja </span>{" "}
              Weerasekara
            </span>
          </a>

          {/* desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 p-2"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* mobile nav button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={cn(
              "md:hidden p-2 transition-all duration-300",
              isMenuOpen ? "z-50 relative text-foreground" : "z-50 text-foreground"
            )}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-30 md:hidden transition-all duration-500 ease-in-out",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Blurred Background */}
        <div 
          className="absolute inset-0 bg-background/90 backdrop-blur-lg"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <div className={cn(
            "flex flex-col items-center space-y-8 text-2xl font-medium",
            "transition-all duration-700 ease-out",
            isMenuOpen 
              ? "opacity-100 translate-y-0 scale-100" 
              : "opacity-0 translate-y-10 scale-95"
          )}>
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className={cn(
                  "text-foreground/80 hover:text-primary transition-all duration-300",
                  "transform hover:scale-110 hover:text-glow",
                  "py-2 px-4 rounded-lg hover:bg-primary/10",
                  "animate-fade-in"
                )}
                style={{ animationDelay: `${key * 0.1}s` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            {/* Theme Toggle in Mobile Menu */}
            <button
              onClick={() => {
                toggleTheme();
                setIsMenuOpen(false);
              }}
              className={cn(
                "text-foreground/80 hover:text-primary transition-all duration-300",
                "transform hover:scale-110 p-3 rounded-full hover:bg-primary/10",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${navItems.length * 0.1}s` }}
            >
              {isDarkMode ? (
                <Sun className="h-6 w-6" />
              ) : (
                <Moon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};