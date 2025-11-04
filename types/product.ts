// 

// types/product.tsx

// 1. Define la estructura de la imagen tal como viene en el array 'images'
export type ImageFormat = {
    ext: string;
    url: string;
    // ... otros campos como hash, mime, size, width, height
    width: number;
    height: number;
};

export type ImageType = {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
        large: ImageFormat;
        small: ImageFormat;
        medium: ImageFormat;
        thumbnail: ImageFormat;
    };
    url: string; // <-- La URL de la imagen principal está aquí
    // ... otros campos como provider, createdAt, updatedAt
};

// 2. Define la estructura de la categoría (también aplanada)
export type CategoryType = {
    id: number;
    documentId: string;
    categoryName: string;
    slug: string;
    description: string | null;
    // ... otros campos
};

// 3. Define la estructura del producto principal (¡PLANA!)
export type ProductType = {
    id: number;
    documentId: string;
    productName: string;
    slug: string;
    description: string;
    active: boolean;
    isFeatured: boolean;
    taste: string;
    origin: string;
    price: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    
    // Las relaciones vienen como arrays de objetos planos (no envueltos en { data: [...] })
    images: ImageType[];
    category: CategoryType; // O CategoryType | null si puede faltar
};