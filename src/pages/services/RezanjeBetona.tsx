import Layout from "@/components/Layout/Layout";
import { Check } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";
import rezanje1 from "@/assets/rezanje-1.jpg";
import rezanje2 from "@/assets/rezanje-2.jpg";
import rezanje3 from "@/assets/rezanje-3.jpg";
import rezanje4 from "@/assets/rezanje-4.jpg";
import rezanje5 from "@/assets/rezanje-5.jpg";
import rezanje6 from "@/assets/rezanje-6.jpg";

const galleryImages = [
  { src: rezanje1, alt: "Rezanje betonskog zida - otvori" },
  { src: rezanje2, alt: "Dijamantno rezanje zida strojem" },
  { src: rezanje3, alt: "Radnici na gradilištu - rezanje betona" },
  { src: rezanje4, alt: "Rezanje otvora u betonskom podu" },
  { src: rezanje5, alt: "Izrezani otvor za vrata u zidu" },
  { src: rezanje6, alt: "Rezanje otvora u nosivom zidu" },
];

const RezanjeBetona = () => {
  useSeo({
    title: "Dijamantno rezanje betona - PROFI-REZ | Profesionalne usluge",
    description: "Dijamantno rezanje betona mokrom tehnikom. Rezanje armiranog betona, otvaranje otvora za prozore, vrata, stepenice i liftove. Brzo i precizno.",
    canonical: "/usluge/rezanje-betona",
  });
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

          <h2 className="text-2xl font-bold mt-12 mb-6 text-foreground">
            Galerija radova
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg shadow-lg group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RezanjeBetona;
