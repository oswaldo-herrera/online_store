"use client";
import { useGetCategoryProduct } from "@/api/getCategoryProduct";
import { Separator } from "@/components/ui/separator";
import { ResponseType } from "@/types/response";
//import { useParams, useRouter } from "next/navigation";
import { useParams} from "next/navigation";
//import FiltersControlsCategory from "./components/filters-controls-category";
import SkeletonSchema from "@/components/skeletonSchema";
import ProductCard from "./components/product-card";
import { ProductType } from "@/types/product";
import { useState } from "react";
//import { useMemo,useState } from "react";

export default function Page() {
  const params = useParams();
  const { categorySlug } = params;
  const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug as string);
  //const [filterOrigin, setFilterOrigin] = useState("");
  const [filterOrigin] = useState("");
  //const router = useRouter();
  console.log("hola",filterOrigin);

  const filteredProducts =
    result !== null &&
    !loading &&
    (filterOrigin === ""
      ? result
      : result.filter(
          (product: ProductType) => {
            // 🛑 CORRECCIÓN CLAVE: Verificar que product.origin existe antes de usar toLowerCase()
            if (!product.origin) {
              return false; // Ignorar productos sin origen definido
            }

            return (
              product.origin.toLowerCase() === filterOrigin.toLowerCase()
            );
          }
        ));
    
    const firstProduct = filteredProducts?.[0] || result?.[0];
    const categoryName = firstProduct?.category?.categoryName;

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      {categoryName && (
        <h1 className="text-3xl font-medium">
          Productos {categoryName}
        </h1>
      )}
      {/* {result !== null && !loading && categoryName !== 0 && (
        <h1 className="text-3xl font-medium">
          Café {categoryName}
        </h1>
      )} */}
      <Separator />

      <div className="sm:flex sm:justify-between">
        {/* <FiltersControlsCategory setFilterOrigin={setFilterOrigin} /> */}

        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {loading && <SkeletonSchema grid={3} />}

          {!loading && filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts.map((product: ProductType) => (
                <ProductCard key={product.id} product={product} />
            ))
          ) : (
            !loading && filterOrigin !== "" && <p>No hay productos con este filtro.</p>
          )}

          {/* {filteredProducts !== null &&
            !loading &&
            filteredProducts.map((product: ProductType) => (
              <ProductCard key={product.id} product={product} />
          ))} */}
          
        </div>
      </div>
    </div>
  );
}
