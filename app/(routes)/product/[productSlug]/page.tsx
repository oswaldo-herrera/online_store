"use client"

import { useGetProductBySlug } from "@/api/getProductBySlug";
import { ResponseType } from "@/types/response";
import { useParams } from "next/navigation"
import SkeletonProduct from "./components/skeleton-product";
import CarouselProduct from "./components/carousel-product";
import InfoProduct from "./components/info-product";


export default function Page() {
    const params = useParams()
    const { productSlug } = params;

    const { result }: ResponseType = useGetProductBySlug(productSlug as string)

    // 🛑 1. Verificación de Carga y Array Vacío (CRÍTICO)
    if (result === null || result.length === 0) {
        // Si no hay resultados o si el array está vacío, muestra el skeleton/mensaje.
        return <SkeletonProduct /> 
        // return <div>Producto no encontrado</div>; // O un mensaje de error 404
    }

    // if (result === null) {
    //     return <SkeletonProduct />
    // }

    // 🛑 2. Asignación del producto y verificación de estructura
    // Ya sabemos que result[0] existe. 
    const product = result[0];

    // 🛑 3. Acceso SEGURO a las imágenes (Asumimos la estructura PLANA)
    // Tus otros endpoints eran planos, por lo que las imágenes deberían ser un array directamente:
    const imagesArray = product.images; 
    
    // Si tu API usa la estructura Strapi v4 (anidada), usa:
    // const imagesArray = product.attributes?.images;
    
    // 🛑 Filtro final por si las imágenes no están populadas
    if (!imagesArray || imagesArray.length === 0) {
        return <div>Imágenes del producto no disponibles.</div>;
    }

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-32 sm:px-24 lg:min-h-[80vh]">
            <div className="grid sm:grid-cols-2">
                <div>
                    <CarouselProduct images={imagesArray} />
                </div>

                <div className="sm:px-12">
                    <InfoProduct product={result[0]} />
                </div>
            </div>
        </div>
    )
}