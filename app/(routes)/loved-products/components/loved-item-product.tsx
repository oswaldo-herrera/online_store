///* eslint-disable @next/next/no-img-element */
import ProductImageMinuature from "@/components/shared/product-image-miniature";
import ProductTasteOrigin from "@/components/shared/product-taste-origin";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";
//import { useRouter } from "next/navigation";

interface LovedItemProductProps {
    product: ProductType
}

const LovedItemProduct = (props: LovedItemProductProps) => {
    const { product } = props
    //const router = useRouter()
    const { removeLovedItem } = useLovedProducts()
    const { addItem } = useCart()

    // 🛑 1. DEFINIR LA IMAGEN A USAR
    // Asumimos que la imagen es un array plano (product.images) como en tus otros componentes.
    const firstImage = product.images && product.images.length > 0 ? product.images[0] : null;

    // 🛑 2. VERIFICAR y CONSTRUIR LA URL
    if (!firstImage || !firstImage.url) {
        // Opción segura: si no hay imagen, devolver un placeholder o un mensaje de advertencia.
        console.warn(`Producto amado ID ${product.id} no tiene una imagen válida.`);
        // Podrías devolver un <li> con un mensaje o un placeholder.
        return (
            <li className="flex p-6 border-b text-red-500">
                Error: Producto {product.productName} no tiene imagen.
            </li>
        ); 
    }
    
    const imageUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}${firstImage.url}`;


    const addToCheckout = () => {
        addItem(product)
        removeLovedItem(product.id)
    }

    return (
        <li className="flex p-6 border-b">
            <ProductImageMinuature slug={product.slug} url={imageUrl} />

            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-bold">{product.productName}</h2>
                    <p className="font-bold">{formatPrice(product.price)}</p>

                    <ProductTasteOrigin origin={product.origin} taste={product.taste} />

                    <Button className="mt-5 rounded-full" onClick={addToCheckout}>Añadir al carrito</Button>
                </div>
                <div>
                    <button className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition")}>
                        <X size={20} onClick={() => removeLovedItem(product.id)} />
                    </button>
                </div>
            </div>
        </li>
    );
}

export default LovedItemProduct;