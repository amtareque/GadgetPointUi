import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Product } from '../shared/models/product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string = environment.baseUrl+'/product';

  constructor(private _http: HttpClient) {}


  addProduct(data: any): Observable<any> {
    return this._http.post<Product>(this.apiUrl, data);
  }


  updateProduct(id: number, data: any): Observable<any> {
    return this._http.put<Product>(`${this.apiUrl}/${id}`, data);
  }

  getProductList(): Observable<any> {
    return this._http.get<Product[]>(this.apiUrl);
  }

  deleteProduct(id: number): Observable<any> {
    return this._http.delete<void>(`${this.apiUrl}/${id}`);
  }

}