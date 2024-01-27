import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  fetchProducts() {
    return this.http.get("http://localhost:3000/product")
  }
  addProduct(data: any) {
    return this.http.post('http://localhost:3000/product', data);
  }
  removeproduct(id: any) {
    return this.http.delete("http://localhost:3000/product/" + id)
  }
  updateproduct(id:any,data:any){
 return this.http.put("http://localhost:3000/product/" + id,data)
  }
  findById(id:any){
return this.http.get("http://localhost:3000/product/" + id);
  }
}
