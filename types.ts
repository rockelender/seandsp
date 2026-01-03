
export type Category = 'HARDWARE' | 'PLUGIN';
export type SubCategory = 'Vocal' | 'Guitar' | 'Bass' | 'Archetype' | 'Multivoicer' | 'Synth';

export interface Product {
  id: string;
  name: string;
  category: Category;
  subCategory?: SubCategory;
  shortDescription: string;
  fullDescription: string;
  price: number;
  image: string;
  isAvailable: boolean;
  isBestseller?: boolean;
  isComingSoon?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
