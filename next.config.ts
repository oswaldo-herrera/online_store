// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


// next.config.ts

// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost', // Para desarrollo local (si lo usas)
        port: '1337',
        pathname: '/uploads/**', 
      },
      // 🛑 AGREGAR EL DOMINIO DE PRODUCCIÓN DE RENDER (CRÍTICO)
      {
        protocol: 'https', // Debe ser HTTPS en producción
        hostname: 'backend-store-h9it.onrender.com', // 🛑 Tu dominio de Strapi en Render
        port: '', // No necesitas puerto en HTTPS (puerto 443 por defecto)
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
