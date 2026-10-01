export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  stock: number;
  imageUrl: string;
  badge?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface DefectItem {
  id: string;
  title: string;
  category: string;
  severity: 'Critical' | 'Major' | 'Minor';
  location: string;
  description: string;
  selector: string;
  expectedCategory: string;
  howCreated: string;
  expectedFix: string;
}
