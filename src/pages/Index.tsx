import Layout from "@/components/Layout/Layout";
import HeroSlider from "@/components/Home/HeroSlider";
import Gallery from "@/components/Home/Gallery";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSeo } from "@/hooks/use-seo";
import concreteCutting from "@/assets/concrete-cutting.jpg";
import concreteDrilling from "@/assets/concrete-drilling.jpg";
import concreteMilling from "@/assets/brusenje-betona.jpg";

const Index = () => {
  useSeo({
    title: "PROFI-REZ - Dijamantno rezanje i bušenje betona | Hrvatska",
    description: "Profesionalne usluge dijamantnog rezanja betona, bušenja betona i frezanja betona. Brzo, precizno i učinkovito. Pokrivamo cijelu Hrvatsku.",
    canonical: "/",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "PROFI-REZ SIM d.o.o.",
      "description": "Profesionalne usluge dijamantnog rezanja betona, bušenja betona i frezanja betona u Hrvatskoj.",
      "url": "https://profi-rez.hr",
      "telephone": "+385955096599",
      "email": "info@profi-rez.hr",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Botanička ulica 14",
        "addressLocality": "Donje Dvorišće",
        "addressCountry": "HR"
      },
      "openingHours": ["Mo-Sa 00:00-24:00"],
      "areaServed": "HR",
      "serviceType": ["Rezanje betona", "Bušenje betona", "Dijamantno rezanje betona", "Frezanje betona", "Rušenje objekata"]
    }
  });

  return (
    <Layout>
      <HeroSlider />
      
      {/* Section 1 - Concrete Cutting */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={concreteCutting}
                alt="Dijamantno rezanje betona"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-foreground mb-4">Dijamantno rezanje betona</h2>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Dijamantno rezanje betona je jedini način koji osigurava brzo, učinkovito i 
                precizno rezanje tzv mokrom tehnikom. Ne oslabljuje rezani materijal a može 
                rezati gotovo sve debljine materijala. Dijamantno rezanje betona najčešće se 
                koristi za rušenje objekata, mostova i tunela.
              </p>
              <div className="flex justify-end">
                <Button asChild>
                  <Link to="/usluge/rezanje-betona">Saznajte više</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Concrete Drilling */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Bušenje betona</h2>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Bušenje betona uz minimalnu prašinu odrađujemo s dijamantnim krunama uz 
                zalijevanje vodom. Kruna se pričvršćuje na glavu bušilice. Kako je dijamant 
                najčvršći prirodni materijal to nam omogućuje bušenje i kroz armirani beton 
                uz veliku preciznost rada. Radovi se izvode tako da se prašina svede na minimum.
              </p>
              <div className="flex justify-end">
                <Button asChild>
                  <Link to="/usluge/busenje-betona">Saznajte više</Link>
                </Button>
              </div>
            </div>
            <div>
              <img
                src={concreteDrilling}
                alt="Bušenje betona"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Concrete Milling */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={concreteMilling}
                alt="Brušenje i frezanje betona"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-foreground mb-4">Brušenje i frezanje betona</h2>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Frezanje (glodanje betona) i brušenje betonskog poda zahtijeva posebnu opremu. 
                Ovdje je važno biti svjestan da se ravan i gladak betonski pod najčešće koristi 
                u proizvodnim i skladišnim halama jer omogućuje prijenos ekstremnih tereta i uz 
                to mora biti otporan na mnoge za njega nepovoljne čimbenike. Uz kvalitetnu opremu 
                brusimo i frežemo beton, ciglu, mramor, asfalt, kamen i ostalo.
              </p>
              <div className="flex justify-end">
                <Button asChild>
                  <Link to="/usluge/brusenje-frezanje">Saznajte više</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Gallery />
    </Layout>
  );
};

export default Index;
