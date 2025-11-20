import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        {/* Column 1 - Company Info */}
        <div className="p-8" style={{ backgroundColor: '#222222' }}>
          <h3 className="text-lg font-bold mb-4">Podaci o firmi</h3>
          <div className="space-y-2 text-sm">
            <p className="font-semibold">PROFI-REZ SIM d.o.o.</p>
            <p>Adresa: Botanička ulica 14, Donje Dvorišće</p>
            <p>OIB: 69379696892</p>
            <p>MB: 05470641</p>
          </div>
        </div>

        {/* Column 2 - Working Hours */}
        <div className="p-8" style={{ backgroundColor: '#292929' }}>
          <h3 className="text-lg font-bold mb-4">Radno vrijeme</h3>
          <div className="space-y-2 text-sm">
            <p>Pon - Pet: 08 - 16h</p>
            <p>Subota: 08 - 12h</p>
            <p>Nedjelja: ne radimo</p>
          </div>
        </div>

        {/* Column 3 - Services */}
        <div className="p-8" style={{ backgroundColor: '#1f1f1f' }}>
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

      {/* Bottom Bar */}
      <div className="border-t border-white/20" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="px-4 py-4">
          <p className="text-center text-sm text-white">
            Copyright 2025 | Profi-rez.hr | Powered by remarketing.hr
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
