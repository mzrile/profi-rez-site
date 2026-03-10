import Layout from "@/components/Layout/Layout";
import { Check } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";
import brusenje1 from "@/assets/brusenje-1.jpg";
import brusenje2 from "@/assets/brusenje-2.jpg";

const BusenjeFrezanje = () => {
  useSeo({
    title: "Brušenje i frezanje betona - PROFI-REZ",
    description: "Frezanje i brušenje betonskog poda. Uklanjanje betona, sanacija oštećenog betona, uklanjanje premaza. Profesionalna oprema.",
    canonical: "/usluge/brusenje-frezanje",
  });
  const services = [
    "Uklanjanje betona",
    "Ravnjanje razlika u betonu",
    "Sanacija oštećenog betona",
    "Uklanjanje premaza s podova",
    "Uklanjanje prljavih slojeva",
    "Zatvaranje pukotina",
  ];

  return (
    <Layout>
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Brušenje i frezanje betona
          </h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg leading-relaxed text-foreground">
              Frezanje (glodanje betona) i brušenje betonskog poda zahtijeva posebnu opremu. 
              Ovdje je važno biti svjestan da se ravan i gladak betonski pod najčešće koristi 
              u proizvodnim i skladišnim halama jer omogućuje prijenos ekstremnih tereta i uz 
              to mora biti otporan na mnoge za njega nepovoljne čimbenike. Uz kvalitetnu opremu 
              brusimo i frežemo beton, ciglu, mramor, asfalt, kamen i ostalo…
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <h2 className="text-2xl font-bold mb-6 text-card-foreground">
              Usluge koje nudimo:
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Galerija radova</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img src={brusenje1} alt="Brušenje betona - radnik na terenu" className="w-full h-auto rounded-lg shadow-lg" />
              <img src={brusenje2} alt="Brušeni betonski pod - završni rezultat" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BusenjeFrezanje;
