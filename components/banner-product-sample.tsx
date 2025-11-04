import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProductSample = () => {
    return (
        <>

            <div className="h-[350px] bg-cover lg:h-[400px] bg-[url('/banner.png')] bg-center mt-5" />
        </>
    );
}

export default BannerProductSample;