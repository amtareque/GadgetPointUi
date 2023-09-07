import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { CategoryComponent } from './components/category/category.component';
import { CustomerComponent } from './components/customer/customer.component';
import { InspectionComponent } from './components/inspection/inspection.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { PackAndDeliveryComponent } from './components/pack-and-delivery/pack-and-delivery.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProductComponent } from './components/product/product.component';
import { RequisitionComponent } from './components/requisition/requisition.component';
import { ReturnComponent } from './components/return/return.component';
import { StockComponent } from './components/stock/stock.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrandService } from './services/brand.service';
import { SharedService } from './services/shared.service';
import { RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { ShopModule } from './shop/shop.module';
import { SectionHeaderComponent } from './core/section-header/section-header.component';
// import { NavBarComponent } from './core/nav-bar/nav-bar.component';

import { MatButtonModule } from '@angular/material/button';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { ButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { DataTablesModule } from 'angular-datatables';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
// import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductAddEditComponent } from './components/product-add-edit/product-add-edit.component';

  


@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    CategoryComponent,
    CustomerComponent,
    InspectionComponent,
    InvoiceComponent,
    OrderComponent,
    OrderDetailComponent,
    PackAndDeliveryComponent,
    PaymentComponent,
    ProductComponent,
    RequisitionComponent,
    ReturnComponent,
    StockComponent,
    SupplierComponent,
    SubCategoryComponent,
    ProductAddEditComponent,    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    BrowserAnimationsModule,
    CoreModule,
    ShopModule,
    DataTablesModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,

    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
// MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
