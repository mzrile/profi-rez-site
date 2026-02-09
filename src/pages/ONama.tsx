import Layout from "@/components/Layout/Layout";
import oNamaImage from "@/assets/o-nama.jpg";

const ONama = () => {
  return (
    <Layout>
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            O nama
          </h1>
          
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed text-foreground mb-6">
              Fokus našeg poslovanja je okrenut isključivo prema potrebama naših klijenata 
              stoga im nudimo vrhunske alate za bušenje i rezanje betona koje su dostupni 
              na tržištu. Vođeni iskustvom i željom za kontinuiranim rastom ne prestajemo 
              pružati odličnu uslugu nudeći samo globano priznate i certificirane strojeve 
              za bušenje i rezanje betona uz najkvalitetniju uslugu te brzo i precizno 
              izvođenje radova.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              Usluge dijamantnog rezanja, bušenja, brušenja i frezanja nudimo na području 
              cijele RH. Obratite nam se s povjerenjem!
            </p>
          </div>

          <div className="mt-10">
            <img
              src={oNamaImage}
              alt="PROFI-REZ dostavno vozilo"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ONama;
