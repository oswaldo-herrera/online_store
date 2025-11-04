// ChooseCategory.tsx (Lógica corregida)

/* eslint-disable @next/next/no-img-element */
"use client";
import { useGetCategories } from "@/api/getProducts";
import Link from "next/link";
import { ResponseType } from "@/types/response";
// Asegúrate que tu CategoryType esté APLANADO para coincidir con el log
//import { CategoryType } from "@/types/category"; 

const ChooseCategory = () => {
  const { result, loading }: ResponseType = useGetCategories();

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 pb-4 text-3xl sm:pb-8">
        Elige tu categoría favorita
      </h3>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {!loading &&
          result !== null &&
          result.map((category: any) => {
                
                // 🛑 AÑADE ESTO: Acceso directo y filtro de seguridad
                // El objeto category es plano (no tiene attributes)
                const { id, slug, mainImage, categoryName } = category;
                
                // 1. Verificación de existencia de datos esenciales
                if (!slug || !mainImage || !mainImage.url) {
                    console.warn(`Skipping category (ID: ${id}): Missing slug or mainImage URL.`);
                    return null; // Salta la categoría si está incompleta
                }
                
                // 2. ACCESO A LA URL CORREGIDO: Usamos la URL de la imagen principal
                const imageUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}${mainImage.url}`;
                // O usa el formato mediano para mejor rendimiento:
                // const imageUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}${mainImage.formats.medium.url}`;

            return (
              <Link
                key={id} // Usamos 'id' de la categoría plana
                href={`/category/${slug}`} // Usamos 'slug' de la categoría plana
                className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg "
              >
                <img
                  src={imageUrl} // Usamos la URL corregida
                  alt={categoryName} // Usamos 'categoryName' de la categoría plana
                  className="max-w-[270px] transition duration-300 ease-in-out rounded-lg hover:scale-110"
                />
                <p className="absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg">
                  {categoryName} 
                </p>

              </Link>
            );
          })}
        </div>
      
    </div>
  );
};

export default ChooseCategory;