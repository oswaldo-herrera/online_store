"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PageSuccess = () => {
    const router = useRouter()

    return (
        <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
            <div className="flex flex-col-reverse gap-2 sm:flex-row">
                {/* <div className="flex justify-center md:min-w-[400px]">
                    <Image src="/success.png" alt="Success" width={450} height={500} className="rounded-lg" />
                </div> */}

                <div>
                    <h1 className="text-3xl">Misión</h1>
                    <p className="my-3">"Proveer soluciones integrales al sector agrícola y forestal mediante la venta de maquinaria de alto rendimiento y un servicio de mantenimiento superior. Nos dedicamos a garantizar la continuidad operativa de nuestros clientes, asegurando que siempre cuenten con el equipo adecuado y el respaldo técnico experto para hacer crecer su producción."</p>
                    

                    <Button onClick={() => router.push("/")}>Volver al inicio</Button>
                </div>
            </div>
        </div>
    );
}

export default PageSuccess;