import { Category } from './category';
import { SubCategory } from './sub-category';
import { Brand } from './brand';
import { OrderDetail } from './order-detail';
import { Stock } from './stock';
import { Requisition } from './requisition';

export interface Product {
  productId: number,
  productName: string,
  description: string,
  price: number,
  productImage: string,
  categoryId: number,
  category: Category, // Reference to Category
  subCategoryId: number,
  subCategory: SubCategory, // Reference to SubCategory
  brandId: number,
  brand: Brand, // Reference to Brand
  updatedImage?: string;
}

export class Product implements Product {}


  