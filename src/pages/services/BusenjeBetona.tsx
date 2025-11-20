import Layout from "@/components/Layout/Layout";
import { Check } from "lucide-react";

const BusenjeBetona = () => {
  const services = [
    "Bušenje rupa u zidu",
    "Bušenje rupa u stropu",
    "Bušenje otvora za odvod",
    "Bušenje otvora za grijanje",
    "Bušenje otvora za električnu instalaciju",
    "Bušenje otvora za kanalizaciju",
    "Bušenje rupa za bojler i dimnjak",
    "Bušenje rupa za napu",
    "Bušenje rupa u slučaju nužde",
    "Bušenje rupa za klima uređaje",
    "Bušenje betonskih deka, zidova, stropova i greda",
    "Bušenje rupa prema vlastitim zahtjevima",
  ];

  return (
    <Layout>
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Bušenje betona
          </h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg leading-relaxed text-foreground">
              Bušenje betona uz minimalnu prašinu odrađujemo s dijamantnim krunama uz 
              zalijevanje vodom. Kruna se pričvršćuje na glavu bušilice. Kako je dijamant 
              najčvršći prirodni materijal to nam omogućuje bušenje i kroz armirani beton 
              uz veliku preciznost rada. Radovi se izvode tako da se prašina svede na minimum. 
              Bušimo tehnikom sa vakumom bez bušenja tipli, tako da iza nas ostaje samo čista rupa.
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
        </div>
      </div>
    </Layout>
  );
};

export default BusenjeBetona;
