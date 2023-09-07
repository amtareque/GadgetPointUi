import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/services/product.service';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { MessagesService } from 'src/app/shared/messages.service';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';
import { BrandService } from 'src/app/services/brand.service';

import { Category } from 'src/app/shared/models/category';
import { SubCategory } from 'src/app/shared/models/sub-category';
import { Brand } from 'src/app/shared/models/brand';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, AfterViewInit {
  products: Product[] = [];
  selectedProduct: Product | undefined;
  newProductName: string = '';
  newProductDescription: string = '';
  newProductPrice: number = 0;
  newProductImage: string = '';
  selectedCategoryId: number | undefined;
  selectedSubCategoryId: number | undefined;
  selectedBrandId: number | undefined;
  isEditing: boolean = false;

  selectedImageFile: File | undefined;

  categories: Category[] = [];
  subcategories: SubCategory[] = [];
  brands: Brand[] = [];

  dataSource = new MatTableDataSource<Product>([]);
  displayedColumns: string[] = ['serialNumber', 'productName', 'description', 'price', 'productImage', 'category', 'subCategory', 'brand', 'action'];
  pageSize = 5;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private productService: ProductService,
    private _messageService: MessagesService,
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    private brandService: BrandService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
    this.getSubCategories();
    this.getBrands();
  }

  ngAfterViewInit(): void {
    // Initialize the paginator and sort after the view is ready
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getProducts(): void {
    this.productService.getProductList().subscribe((products) => {
      this.products = products;
      this.updateDataSource();
    });
  }

  getCategories(): void {
    this.categoryService.getCategory().subscribe((categories) => {
      this.categories = categories;
    });
  }

  getSubCategories(): void {
    this.subCategoryService.getSubCategory().subscribe((subcategories) => {
      this.subcategories = subcategories;
    }, (error: any) => {
      console.error('Error fetching subcategories:', error);
    });
  }
  

  getBrands(): void {
    this.brandService.getBrands().subscribe((brands) => {
      this.brands = brands;
    });
  }

  updateDataSource(): void {
    const currentPage = this.paginator.pageIndex;
    const itemsPerPage = this.paginator.pageSize;
    const startIndex = currentPage * itemsPerPage;
    this.products.slice(startIndex, startIndex + itemsPerPage).forEach((product, index) => {
      const adjustedIndex = startIndex + index + 1;
      (product as any)['serialNumber'] = adjustedIndex;
    });
    this.dataSource.data = this.products;
  }

  onSelectForEdit(product: Product): void {
    this.selectedProduct = { ...product };
    this.isEditing = true;
  }

  cancelEdit(): void {
    this.selectedProduct = undefined;
    this.isEditing = false;
  }

  createProduct(): void {
    if (
      this.selectedCategoryId === undefined ||
      this.selectedSubCategoryId === undefined ||
      this.selectedBrandId === undefined
    ) {
      // Handle the case where one of the IDs is undefined (e.g., show an error message)
      console.error('Category, subcategory, or brand is undefined');
      return;
    }
  
    const newProduct: Product = {
      productId: 0,
      productName: this.newProductName,
      description: this.newProductDescription,
      price: this.newProductPrice,
      productImage: this.newProductImage,
      categoryId: this.selectedCategoryId,
      category: this.categories.find((c) => c.categoryId === this.selectedCategoryId)!,
      subCategoryId: this.selectedSubCategoryId,
      subCategory: this.subcategories.find((sc) => sc.subCategoryId === this.selectedSubCategoryId)!,
      brandId: this.selectedBrandId,
      brand: this.brands.find((b) => b.brandId === this.selectedBrandId)!,
    };
  
    this.productService.addProduct(newProduct).subscribe((createdProduct) => {
      this.products.push(createdProduct);
      this.selectedProduct = undefined;
      this.newProductName = '';
      this.newProductDescription = '';
      this.newProductPrice = 0;
      this.newProductImage = '';
      this.selectedCategoryId = undefined;
      this.selectedSubCategoryId = undefined;
      this.selectedBrandId = undefined;
      this.getProducts();
      this._messageService.openSnackBar('Product created!', 'done');
    });
  }

  updateProduct(): void {
    if (this.selectedProduct) {
      this.productService.updateProduct(this.selectedProduct.productId, this.selectedProduct).subscribe((updatedProduct) => {
        const index = this.products.findIndex((p) => p.productId === updatedProduct.productId);
        if (index !== -1) {
          this.products[index] = updatedProduct;
        }
        this.getProducts();
        this.selectedProduct = undefined;
      });
    }
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter((p) => p.productId !== id);
      this.selectedProduct = undefined;
      this._messageService.openSnackBar('Product deleted!', 'done');
      this.getProducts();
    });
  }

  // Presentation logic from BrandComponent
  calculateRomanNumeral(index: number): string {
    const currentPage = this.paginator.pageIndex;
    const itemsPerPage = this.paginator.pageSize;
    const adjustedIndex = currentPage * itemsPerPage + index + 1;
    return this.toRoman(adjustedIndex);
  }

  toRoman(num: number): string {
    const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV'];
    return num >= 1 && num <= romanNumerals.length ? romanNumerals[num - 1] : '';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Ensure that this.selectedProduct is defined
      if (this.selectedProduct) {
        // Store the selected image file
        this.selectedImageFile = file;
  
        // Optionally, you can display a preview of the selected image
        const reader = new FileReader();
        reader.onload = (e: any) => {
          // Ensure that this.selectedProduct is still defined
          if (this.selectedProduct) {
            this.selectedProduct.updatedImage = e.target.result;
          }
        };
        reader.readAsDataURL(file);
      }
    }
  }
  
}
