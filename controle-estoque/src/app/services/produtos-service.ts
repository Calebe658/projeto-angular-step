import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  apiUrl: string = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }
}
