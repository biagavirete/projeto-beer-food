export interface IBeer {
    id: number;
    image_url: string;
    name: string;
    tagline: string;
    description: string;
}

export interface ICategory {
    categories: ICategoryItem[];
}

export interface ICategoryItem {
    idCategory: string;
    strCategory: string;
}