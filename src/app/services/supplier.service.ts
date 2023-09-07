import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Supplier } from '../shared/models/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  apiUrl: string = environment.baseUrl+'/supplier';

  constructor(private http: HttpClient) { }

  getSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.apiUrl);
  }

  getSupplierById(id: number): Observable<Supplier> {
    return this.http.get<Supplier>(`${this.apiUrl}/${id}`);
  }

  createSupplier(sup: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(this.apiUrl, sup);
  }

  updateSupplier(id: number, sup: Supplier): Observable<Supplier> {
    return this.http.put<Supplier>(`${this.apiUrl}/${id}`, sup);
  }

  deleteSupplier(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
