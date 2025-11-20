import Layout from "@/components/Layout/Layout";
import HeroSlider from "@/components/Home/HeroSlider";
import Gallery from "@/components/Home/Gallery";
import concreteCutting from "@/assets/concrete-cutting.jpg";
import concreteDrilling from "@/assets/concrete-drilling.jpg";

const Index = () => {
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
              <p className="text-lg leading-relaxed text-foreground">
                Dijamantno rezanje betona je jedini način koji osigurava brzo, učinkovito i 
                precizno rezanje tzv mokrom tehnikom. Ne oslabljuje rezani materijal a može 
                rezati gotovo sve debljine materijala. Dijamantno rezanje betona najčešće se 
                koristi za rušenje objekata, mostova i tunela.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Concrete Drilling */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg leading-relaxed text-foreground">
                Bušenje betona uz minimalnu prašinu odrađujemo s dijamantnim krunama uz 
                zalijevanje vodom. Kruna se pričvršćuje na glavu bušilice. Kako je dijamant 
                najčvršći prirodni materijal to nam omogućuje bušenje i kroz armirani beton 
                uz veliku preciznost rada. Radovi se izvode tako da se prašina svede na minimum.
              </p>
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

      <Gallery />
    </Layout>
  );
};

export default Index;
