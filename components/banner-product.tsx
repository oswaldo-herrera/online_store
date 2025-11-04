import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
    return (
        <>
            <div className="mt-4 text-center">
                <p>Aprovecha tu</p>
                <h4 className="mt-2 text-5xl font-extrabold upperce">Crédito</h4>
                <p className="my-2 text-lg">y llevate los mejores productos de fuerza</p>
                <Link href="https://api.whatsapp.com/send/?phone=5214361055721&text=Hola%2C+quiero+m%C3%A1s+informaci%C3%B3n+sobre+tus+productos&type=phone_number&app_absent=0" className={buttonVariants()}>Comprar</Link>
            </div>
            <div className="h-[350px] bg-cover lg:h-[400px] bg-[url('/banner_2.png')] bg-center mt-5" />
        </>
    );
}

export default BannerProduct;