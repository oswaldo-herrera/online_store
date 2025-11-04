// export type CategoryType = {
//   id: number;
//   attributes: {
//     categoryName: string;
//     slug: string;
//     mainImage: {
//       data: {
//         attributes: {
//           url: string;
//         };
//       };
//     };
//   };
// };

// types/category.tsx (Estructura APLANADA)

// Definición de la Imagen (MainImage) basada en tu JSON:
export type ImageType = {
    id: number;
    documentId: string;
    name: string;
    url: string; // <-- La URL principal está aquí
    width: number;
    height: number;
    formats: {
        large: { url: string };
        medium: { url: string };
        small: { url: string };
        thumbnail: { url: string };
    };
    // ... otros campos
};

// Definición de la Categoría (PLANA)
export type CategoryType = {
    id: number;
    documentId: string;
    categoryName: string;
    slug: string;
    description: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    
    // La imagen es un OBJETO directamente, no anidado.
    mainImage: ImageType; 
};