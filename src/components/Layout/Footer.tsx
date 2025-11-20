import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Podaci o firmi</h3>
            <div className="space-y-2 text-sm">
              <p className="font-semibold">PROFI-REZ SIM d.o.o.</p>
              <p>Adresa: Botanička ulica 14, Donje Dvorišće</p>
              <p>OIB: 69379696892</p>
              <p>MB: 05470641</p>
            </div>
          </div>

          {/* Column 2 - Working Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4">Radno vrijeme</h3>
            <div className="space-y-2 text-sm">
              <p>Pon - Pet: 08 - 16h</p>
              <p>Subota: 08 - 12h</p>
              <p>Nedjelja: ne radimo</p>
            </div>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Usluge koje nudimo</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/usluge/rezanje-betona" className="hover:text-accent transition-colors">
                  Rezanje betona
                </Link>
              </li>
              <li>
                <Link to="/usluge/busenje-betona" className="hover:text-accent transition-colors">
                  Bušenje betona
                </Link>
              </li>
              <li>
                <Link to="/usluge/busenje-frezanje" className="hover:text-accent transition-colors">
                  Brušenje i frezanje betona
                </Link>
              </li>
              <li>
                <Link to="/usluge/ojacanja" className="hover:text-accent transition-colors">
                  Ojačanja metalnom konstrukcijom
                </Link>
              </li>
              <li>
                <Link to="/usluge/rusenje" className="hover:text-accent transition-colors">
                  Rušenje objekata
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm">
            Copyright 2025 | Profi-rez.hr | Powered by remarketing.hr
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
