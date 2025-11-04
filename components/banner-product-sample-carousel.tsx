// BannerProductSampleCarousel.tsx

"use client"; // 🛑 Necesitas "use client" para usar hooks y useEffect
import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, useCarousel } from "@/components/ui/carousel";

const bannerImages = [
    '/emsa_02.png', 
    '/emsa_03.png',  
    '/emsa_04.png',
];

const AUTOPLAY_INTERVAL = 5000; // 🛑 5 segundos en milisegundos

// Componente Wrapper para la lógica de auto-reproducción
const AutoScrollCarousel = () => {
    const { api, scrollNext } = useCarousel();

    React.useEffect(() => {
        if (!api) {
            return;
        }

        const interval = setInterval(() => {
            scrollNext();
        }, AUTOPLAY_INTERVAL);

        return () => {
            clearInterval(interval);
        };
    }, [api, scrollNext]);

    return null;
};

const BannerProductSampleCarousel = () => {
    // 🛑 1. NO RENDERIZAMOS LAS FLECHAS
    
    return (
        <div className="mt-5">
            <Carousel
                opts={{
                    loop: true,
                }}
                // 🛑 2. ELIMINAMOS LAS FLECHAS Y DEJAMOS SOLO EL CAROUSEL
            >
                <AutoScrollCarousel />
                <CarouselContent>
                    {bannerImages.map((url, index) => (
                        <CarouselItem key={index}>
                            <div 
                                className="h-[350px] lg:h-[410px] bg-cover bg-center" 
                                style={{ 
                                    backgroundImage: `url('${url}')` 
                                }}
                            >
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default BannerProductSampleCarousel;