import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 w-full">
        {/* Column 1 - Company Info */}
        <div className="p-6" style={{ backgroundColor: '#222222' }}>
          <h3 className="text-base font-bold mb-3">Podaci o firmi</h3>
          <div className="space-y-1.5 text-sm">
            <p className="font-semibold">PROFI-REZ SIM d.o.o.</p>
            <p>Adresa: Botanička ulica 14, Donje Dvorišće</p>
            <p>OIB: 69379696892</p>
            <p>MB: 05470641</p>
            <p>
              Email:{" "}
              <a href="mailto:info@profi-rez.hr" className="hover:text-accent transition-colors">
                info@profi-rez.hr
              </a>
            </p>
            <p>
              Mob:{" "}
              <a href="tel:+385955096599" className="hover:text-accent transition-colors">
                +385 95 509 6599
              </a>
            </p>
          </div>
        </div>

        {/* Column 2 - Working Hours */}
        <div className="p-6" style={{ backgroundColor: '#292929' }}>
          <h3 className="text-base font-bold mb-3">Radno vrijeme</h3>
          <div className="space-y-1.5 text-sm">
            <p>Pon - Pet: 0 - 24h</p>
            <p>Subota: 0 - 24h</p>
            <p>Nedjelja: ne radimo</p>
          </div>
        </div>

        {/* Column 3 - Google Location */}
        <div className="p-6" style={{ backgroundColor: '#252525' }}>
          <h3 className="text-base font-bold mb-3">Google lokacija</h3>
          <div className="w-full aspect-video rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.3059191763514!2d16.27663917664499!3d45.81927700967685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47666ff20b3ba5e9%3A0xc73a7f4facb7b150!2zQm90YW5pxI1rYSB1bGljYSAxNCwgMTAzNzAsIERvbmplIER2b3JpxaHEh2U!5e1!3m2!1sen!2shr!4v1770659542793!5m2!1sen!2shr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokacija PROFI-REZ"
            />
          </div>
        </div>

        {/* Column 4 - Services */}
        <div className="p-6" style={{ backgroundColor: '#1f1f1f' }}>
          <h3 className="text-base font-bold mb-3">Usluge koje nudimo</h3>
          <ul className="space-y-1.5 text-sm">
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
        <div className="px-4 py-3">
          <p className="text-center text-sm text-white">
            Copyright 2025 | Profi-rez.hr | Powered by remarketing.hr
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
