import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with logo and contact */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="PROFI-REZ Logo" className="h-16 w-auto" />
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="mailto:info@profi-rez.hr" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              <span className="text-sm">info@profi-rez.hr</span>
            </a>
            <a href="tel:+385955096599" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+385 95 509 6599</span>
            </a>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className={`${isMenuOpen ? "block" : "hidden"} md:block border-t md:border-0 border-border py-2`}>
          <ul className="flex flex-col md:flex-row md:items-center md:justify-center gap-2 md:gap-8 py-4 md:py-3">
            <li>
              <Link to="/" className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium">
                Početna
              </Link>
            </li>
            <li className="relative group">
              <button
                className="flex items-center gap-1 px-3 py-2 text-foreground hover:text-primary transition-colors font-medium w-full md:w-auto justify-between md:justify-start"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Usluge
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              <ul className={`${isServicesOpen ? "block" : "hidden"} md:hidden md:group-hover:block md:absolute md:top-full md:left-0 md:bg-background md:border md:border-border md:rounded-md md:shadow-lg md:min-w-[240px] mt-2 md:mt-0 pl-4 md:pl-0`}>
                <li>
                  <Link to="/usluge/rezanje-betona" className="block px-4 py-2 text-foreground hover:text-primary hover:bg-secondary transition-colors">
                    Rezanje betona
                  </Link>
                </li>
                <li>
                  <Link to="/usluge/busenje-betona" className="block px-4 py-2 text-foreground hover:text-primary hover:bg-secondary transition-colors">
                    Bušenje betona
                  </Link>
                </li>
                <li>
                  <Link to="/usluge/busenje-frezanje" className="block px-4 py-2 text-foreground hover:text-primary hover:bg-secondary transition-colors">
                    Bušenje i frezanje betona
                  </Link>
                </li>
                <li>
                  <Link to="/usluge/ojacanja" className="block px-4 py-2 text-foreground hover:text-primary hover:bg-secondary transition-colors">
                    Ojačanja metalnom konstrukcijom
                  </Link>
                </li>
                <li>
                  <Link to="/usluge/rusenje" className="block px-4 py-2 text-foreground hover:text-primary hover:bg-secondary transition-colors">
                    Rušenje objekata
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="https://brekalo.hr/" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium">
                Visokotlačno pranje krova
              </a>
            </li>
            <li>
              <Link to="/o-nama" className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium">
                O nama
              </Link>
            </li>
            <li>
              <Link to="/kontakt" className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium">
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
