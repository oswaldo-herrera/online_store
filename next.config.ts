// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // 1. DESARROLLO LOCAL
      {
        protocol: 'http',
        hostname: 'localhost', 
        port: '1337',
        pathname: '/uploads/**', 
      },
      // 2. PRODUCCIÓN (RENDER/API) - Lo mantienes por si acaso
      {
        protocol: 'https', 
        hostname: 'backend-store-h9it.onrender.com', 
        port: '', 
        pathname: '/**', // Cambié a '/**' para más flexibilidad de rutas de la API
      },
      // 3. 🖼️ DOMINIO DE ALMACENAMIENTO (CLOUDINARY) - ¡CRÍTICO!
      {
        protocol: 'https', 
        hostname: 'res.cloudinary.com', // Dominio estándar de Cloudinary
        port: '', 
        pathname: '/**', // Permite cualquier ruta dentro de Cloudinary
      },
    ],
  },
};

export default nextConfig;