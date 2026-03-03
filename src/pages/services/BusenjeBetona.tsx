import Layout from "@/components/Layout/Layout";
import { Check } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";
import busenje1 from "@/assets/busenje-1.jpg";
import busenje2 from "@/assets/busenje-2.jpg";
import busenje3 from "@/assets/busenje-3.jpg";
import busenje4 from "@/assets/busenje-4.jpg";
import busenje5 from "@/assets/busenje-5.jpg";
import busenje6 from "@/assets/busenje-6.jpg";

const galleryImages = [
  { src: busenje1, alt: "Bušenje više rupa u betonskom zidu" },
  { src: busenje2, alt: "Bušenje rupe za napu" },
  { src: busenje3, alt: "Bušenje rupe kroz zid" },
  { src: busenje4, alt: "Bušenje rupa u podu" },
  { src: busenje5, alt: "Bušenje rupe za ventilaciju" },
  { src: busenje6, alt: "Bušenje rupa na fasadi" },
];

const BusenjeBetona = () => {
  useSeo({
    title: "Bušenje betona - PROFI-REZ | Dijamantne krune",
    description: "Profesionalno bušenje betona dijamantnim krunama uz minimalnu prašinu. Bušenje rupa u zidu, stropu, podu. Precizno i čisto izvođenje radova.",
    canonical: "/usluge/busenje-betona",
  });
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

export default BusenjeBetona;
