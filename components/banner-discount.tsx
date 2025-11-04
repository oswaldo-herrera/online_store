import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerDiscount = () => {
    return ( 
        <div className="p-5 sm:p-20 text-center">
            <h2 className="uppercase font-black text-2xl text-primary">
                Consigue hasta un -25% 
            </h2>
            <h3 className="mt-3 font-semibold">
                20% al gastar $100-00 MXN.Usa el codigo &quot;EMSA&quot;
            </h3>
            <div className="mx-w-md mx-auto sm:flex justify-center gap-8 mt-5">
                <Link href="https://api.whatsapp.com/send/?phone=5214361055721&text=Hola%2C+quiero+m%C3%A1s+informaci%C3%B3n+sobre+tus+productos&type=phone_number&app_absent=0" className={buttonVariants()}>Comprar</Link>
                <Link href="#" className={buttonVariants({variant: "outline"})}>Más información</Link>
            </div>

        </div>
     );
}
 
export default BannerDiscount;