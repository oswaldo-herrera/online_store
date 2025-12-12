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
                    <h1 className="text-3xl">AVISO DE PRIVACIDAD DE AGRÍCOLA EMSA</h1>
                    <p className="my-3">1. Identidad y Domicilio del Responsable
                        Agrícola EMSA (en adelante "La Empresa"), con domicilio en AGREGAR DOMICILIO. , es responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:</p>
                    <p className="my-3">2. Datos Personales que Recabamos
                        Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:
                        * Nombre completo o Razón Social.
                        * Dirección fiscal y de entrega.
                        * Registro Federal de Contribuyentes (RFC).
                        * Teléfono y correo electrónico de contacto.
                        * Datos sobre la maquinaria de su propiedad (para historial de servicio).</p>
                    <p className="my-3">3. Finalidades del Tratamiento de los Datos
                        Los datos personales que recabamos de usted los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
                        * Prestación de servicios: Venta de maquinaria, refacciones y realización de servicios de mantenimiento preventivo y correctivo.
                        * Facturación y Cobranza: Emisión de comprobantes fiscales vigentes.
                        * Seguimiento Técnico: Recordatorios de mantenimiento para sus equipos y garantías.
                        * Contacto: Para dar seguimiento a cotizaciones, pedidos y estatus de reparaciones en taller.</p>
                    <p className="my-3">4. Protección de Datos
                        La Empresa implementa medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado.</p>
                    <p className="my-3">5. Derechos ARCO
                        Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición).
                        Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través del correo electrónico: [Inserta correo de contacto] o directamente en nuestras oficinas.</p>
                    <p className="my-3">6. Cambios al Aviso de Privacidad
                        El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; o de nuestras prácticas de privacidad. Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso a través de nuestro sitio web o en los tableros de avisos en nuestra sucursal.</p>



                    <Button onClick={() => router.push("/")}>Volver al inicio</Button>
                </div>
            </div>
        </div>
    );
}

export default PageSuccess;