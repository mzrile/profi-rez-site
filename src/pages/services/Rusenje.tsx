import Layout from "@/components/Layout/Layout";
import { Check } from "lucide-react";

const Rusenje = () => {
  const services = [
    "Djelomično rušenje objekta",
    "Kompletno rušenje objekta",
    "Rušenje kuća i zgrada",
    "Rušenje betonskih konstrukcija",
    "Rušenje nosivih greda",
    "Rušenje parapetnih zidova",
  ];

  return (
    <Layout>
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Rušenje objekata
          </h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg leading-relaxed text-foreground">
              Rušenju građevinskih objekata pristupa se zbog potrebe oslobađanja prostora 
              za novu izgradnju ili korištenja postojećeg prostora za druge namjene, što može 
              biti motivirano ekonomskim, tehničkim, sigurnosnim ili ekološkim razlozima. 
              Najčešće se rušenju pristupa zbog dotrajalosti građevine ili potrebe za 
              prenamjenom prostora, što je posebno uočljivo u razvijenim urbanim sredinama 
              gdje vrijednost zemljišta određuje tip i vrstu, a time i vrijednost građevine 
              koja se na tom prostoru može nalaziti.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-lg">
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

export default Rusenje;
