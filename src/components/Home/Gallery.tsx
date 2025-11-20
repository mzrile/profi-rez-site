import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";

const galleryImages = [
  { id: 1, src: gallery1, alt: "Precizno rezanje betonskog zida" },
  { id: 2, src: gallery2, alt: "Bušenje rupa u betonskom podu" },
  { id: 3, src: gallery3, alt: "Profesionalna oprema na gradilištu" },
  { id: 4, src: gallery4, alt: "Rezanje armiranog betona" },
  { id: 5, src: gallery5, alt: "Građevinski radovi u tijeku" },
  { id: 6, src: gallery6, alt: "Rezanje betonske ploče" },
  { id: 7, src: gallery7, alt: "Bušenje otvora u zidu" },
  { id: 8, src: gallery8, alt: "Rušenje objekta" },
  { id: 9, src: gallery9, alt: "Završeni radovi na betonu" },
];

const Gallery = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Galerija radova
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
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
    </section>
  );
};

export default Gallery;
