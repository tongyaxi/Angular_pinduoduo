export interface TabItem {
  title: string;
  icon: string;
  link: string;
  selectedIcon: string;
}

export interface Ad {
  imageUrl: any;
  link: any;
}

export interface Product {
  id: number;
  imageUrl: string;
  title: string;
  tags: string[];
  price: number;
  priceDesc: string;
  buyerAvatars: string[];
}