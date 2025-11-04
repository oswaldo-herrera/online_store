///* eslint-disable @next/next/no-img-element */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// interface CarouselProductProps {
//   images: {
//     data: {
//       id: number;
//       attributes: {
//         url: string;
//       };
//     }[];
//   };
// }

interface CarouselProductProps {
    // Si estás usando la ImageType plana que definimos antes
    images: { id: number; url: string; formats: any }[]; 
}

const CarouselProduct = (props: CarouselProductProps) => {
  const { images } = props;
  

  return (
    <div className="sm:px-16">
      <Carousel>
        <CarouselContent>
          {/* 🛑 3. Iteramos sobre el array de imágenes directamente */}
          {images.map((image) => {
              
              // Verificación de seguridad (necesaria si un producto puede tener una imagen nula)
              if (!image.url) {
                  return null;
              }
              
              // 🛑 4. Construcción de la URL de la imagen (PLANA)
              const fullImageUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`;

              return (
                <CarouselItem key={image.id}>
                  <img
                    src={fullImageUrl}
                    alt="Image product"
                    className="rounded-lg"
                  />
                </CarouselItem>
              );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselProduct;
