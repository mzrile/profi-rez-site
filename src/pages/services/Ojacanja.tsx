import Layout from "@/components/Layout/Layout";

const Ojacanja = () => {
  return (
    <Layout>
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Ojačanja metalnom konstrukcijom
          </h1>
          
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed text-foreground">
              Uslijed dugogodišnjeg djelovanja vertikalnih opterećenja, kao i atmosferskih 
              utjecaja dolazi do slabljenja konstrukcije i statike građevina. Građevine s 
              narušenom statikom i oštećenom konstrukcijom postaju nesigurne za stanovanje 
              ili drugu namjenu.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Ojacanja;
