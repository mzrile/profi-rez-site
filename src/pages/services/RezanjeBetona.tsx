import Layout from "@/components/Layout/Layout";
import { Check } from "lucide-react";

const RezanjeBetona = () => {
  const services = [
    "Otvor za prozore, krovne prozore i vrata",
    "Otvor za stepenice",
    "Otvor kanala za odvod, dovod i kanalizaciju",
    "Otvor za lift",
    "Ulaz za garaže",
    "Rezanje i uklanjanje balkona",
    "Rezanje cestovnih rubnjaka",
    "Rezanje industrijskih podova",
    "Rezanje nosivih zidova",
    "Rezanje mostova",
    "Rezanje parapeta",
    "Rezanje proširenja za vrata",
  ];

  return (
    <Layout>
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Rezanje betona
          </h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg leading-relaxed text-foreground mb-6">
              Dijamantno rezanje betona je jedini način koji osigurava brzo, učinkovito i 
              precizno rezanje tzv mokrom tehnikom. Ne oslabljuje rezani materijal a može 
              rezati gotovo sve debljine materijala. Dijamantno rezanje betona najčešće se 
              koristi za rušenje objekata, mostova i tunela. Armirani beton se reže isključivo 
              posebno dizajniranim strojevima, jer je armirani beton snažan i čvrst.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              Nudimo usluge rezanja običnog betona, armiranog betona i ostalih materijala.
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

export default RezanjeBetona;
