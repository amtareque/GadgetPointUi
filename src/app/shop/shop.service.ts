import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { map, Observable, of } from 'rxjs';
import { Brand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { Product } from '../shared/models/product';
import { ShopParams } from '../shared/models/shopParams';
import { Type } from '../shared/models/type';


@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = environment.baseUrl;
  pagination?: IPagination<Product[]>;


  constructor(private http: HttpClient) { }

  // getProducts(): Observable<IPagination<Product>> {
  //   return this.http.get<IPagination<Product>>(this.baseUrl + 'products');
  // }

  // getProducts(){
  //   return this.http.get<IPagination>(this.baseUrl +'products?pageSize=50');
  // }

  // getProducts(): Observable<IPagination<Product>> {
  //   return this.http.get<IPagination<Product>>(this.baseUrl + 'products?pageSize=50');
  // }
  

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'products?pageSize=50');
  }
  
  
  getBrands() {
    // if (this.brands.length > 0) return of(this.brands);

    return this.http.get<Brand[]>(this.baseUrl + 'products/brands');
    // .pipe(
    //   map(brands => this.brands = brands)
    // );
  }

  getTypes() {
    // if (this.types.length > 0) return of(this.types);

    return this.http.get<Type[]>(this.baseUrl + 'products/types');
    // .pipe(
    //   map(types => this.types = types)
    // );
  }
}


