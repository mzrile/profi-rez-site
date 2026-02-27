import Layout from "@/components/Layout/Layout";
import ContactForm from "@/components/Contact/ContactForm";
import { Clock, Mail, Phone } from "lucide-react";

const Kontakt = () => {
  return (
    <Layout>
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
            Kontakt
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Company Info */}
            <div className="space-y-8">
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-card-foreground">
                  Podaci o firmi
                </h2>
                <div className="space-y-2 text-foreground">
                  <p className="font-semibold">PROFI-REZ SIM d.o.o.</p>
                  <p>Adresa: Botanička ulica 14, Donje Dvorišće</p>
                  <p>OIB: 69379696892</p>
                  <p>MB: 05470641</p>
                  <p>Datum osnivanja: 15.09.2021.</p>
                  <p>Registarsko tijelo: Trgovački sud u Zagrebu</p>
                  <p>Temeljni kapital: 2.654 €</p>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-card-foreground">Radno vrijeme</h2>
                </div>
                <div className="space-y-2 text-foreground">
                  <p>Pon - Pet: 0 - 24h</p>
                  <p>Subota: 0 - 24h</p>
                  <p>Nedjelja: ne radimo</p>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-card-foreground">
                  Kontaktirajte nas
                </h2>
                <div className="space-y-4">
                  <a
                    href="mailto:info@profi-rez.hr"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>info@profi-rez.hr</span>
                  </a>
                  <a
                    href="tel:+385955096599"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span>+385 95 509 6599</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>

          {/* Google Map */}
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-card-foreground">
              Lokacija
            </h2>
            <div className="aspect-video w-full rounded-lg overflow-hidden">
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
        </div>
      </div>
    </Layout>
  );
};

export default Kontakt;
