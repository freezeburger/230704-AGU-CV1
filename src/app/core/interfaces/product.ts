export type BrandName = string;
export type ImageUrl = string;
export type TextShort = string;
export type TextLong = string;
export type Category = 'smartphones' | 'laptops' |'fragrances' | 'skincare' | 'groceries' | 'home-decoration';

export type Rating = number;

export interface ProductPreview {
  id: number;
  title: TextShort;
  rating: Rating;
  thumbnail: ImageUrl;
  price: number;
  [key:string]:any;
}

export interface Product extends ProductPreview {
  description:TextLong;
  discountPercentage: number;
  stock: number;
  brand: BrandName;
  category: Category;
  images:ImageUrl[];
}

