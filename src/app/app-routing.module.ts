import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrandComponent } from './components/brand/brand.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'header', component: HeaderComponent },
  { path: 'brand', component: BrandComponent },
  { path: 'supplier', component: SupplierComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'product', component: ProductComponent },
  { path: 'subcategory', component: SubCategoryComponent },


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }