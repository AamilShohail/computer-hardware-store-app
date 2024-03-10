import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductInventory } from '@app/dtos/product-inventory';
import { environment } from '@app/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductInventoryService {
  constructor(private http: HttpClient) {}

  getProductInventories = (): Observable<ProductInventory[]> =>
    this.http.get<ProductInventory[]>(environment.endpoints.productInventory);
}
