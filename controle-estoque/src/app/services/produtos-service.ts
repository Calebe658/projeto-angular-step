import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  apiUrl: string = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  getProdutos() {
    return this.http.get(this.apiUrl);
  }
}
