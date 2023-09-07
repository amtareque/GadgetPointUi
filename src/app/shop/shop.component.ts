import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Brand } from '../shared/models/brand';
import { Product } from '../shared/models/product';
import { ShopParams } from '../shared/models/shopParams';
import { Type } from '../shared/models/type';
import { ShopService } from './shop.service';
import { error } from 'jquery';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  // @ViewChild('search') searchTerm?: ElementRef;
  products: Product[] = [];
  brands: Brand[] = [];
  types: Type[] = [];
  // shopParams: ShopParams;
  // sortOptions = [
  //   {name: 'Alphabetical', value: 'name'},
  //   {name: 'Price: Low to high', value: 'priceAsc'},
  //   {name: 'Price: High to low', value: 'priceDesc'},
  // ];
  // totalCount = 0;


  constructor(private shopService: ShopService) {
    
  }

  ngOnInit(): void {
    // this.shopService.getProducts().subscribe(response =>{
    //   this.products = response.data;
    // }, error => {
    //   console.log(error);
    // })
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  // getProducts() {
  //   this.shopService.getProducts().subscribe({
  //     next: response => {
  //       this.products = response.data;
  //       this.totalCount = response.count;
  //     },
  //     error: error => console.log(error)
  //   })
  // }

  // getProducts(){
  //   this.shopService.getProducts().subscribe(response =>{
  //     this.products = response.data;
  //   }, error =>{
  //     console.log(error);
  //   })
  // }

  getProducts() {
    this.shopService.getProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }


  getBrands() {
    this.shopService.getBrands().subscribe(response =>{
      this.brands = response;
    }, error =>{
      console.log(error);
    })
  }
  getTypes() {
    this.shopService.getTypes().subscribe(response =>{
      this.types = response;
    }, error =>{
      console.log(error);
    })
  }

}
