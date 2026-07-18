export type Category =
  | "category1"
  | "category2"
  | "category3";

export type SelectedCategory =
  | Category
  | "all";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category; 
  details: string;
}