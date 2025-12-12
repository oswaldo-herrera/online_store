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
                    <h1 className="text-3xl">Visión</h1>
                    <p className="my-3">"Ser la empresa líder y de mayor confianza en la región para soluciones agroforestales, reconocidos por nuestra capacidad de respuesta en servicio técnico y por contar con el catálogo más completo de maquinaria y refacciones, siendo el aliado estratégico que impulsa la modernización del campo."</p>
                    

                    <Button onClick={() => router.push("/")}>Volver al inicio</Button>
                </div>
            </div>
        </div>
    );
}

export default PageSuccess;