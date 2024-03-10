import { Component, OnInit } from '@angular/core';
import { ProductInventory } from '@app/dtos/product-inventory';
import { ProductInventoryService } from '@app/services/product-inventory.service';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { take } from 'rxjs';

@Component({
  selector: 'app-product-inventory-grid',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './product-inventory-grid.component.html',
  styleUrl: './product-inventory-grid.component.scss',
})
export class ProductInventoryGridComponent implements OnInit {
  pagination = true;
  paginationPageSize = 500;
  paginationPageSizeSelector: number[] = [200, 500, 1000];
  rowData: ProductInventory[] = [];

  colDefs: ColDef[] = [
    { field: 'productName', filter: true, floatingFilter: true },
    { field: 'serialNumber', filter: true },
    { field: 'listPrice' },
    { field: 'discount' },
    { field: 'bufferStock' },
    { field: 'quantity' },
    { field: 'stock' },
    { field: 'productCategoryName', filter: true },
    { field: 'warrantyName', filter: true },
    { field: 'warrantyPeriod' },
    { field: 'vendorName', filter: true },
    { field: 'contactNumber', filter: true },
    { field: 'vendorAddress', filter: true },
  ];

  constructor(private productInventoryService: ProductInventoryService) {}

  ngOnInit(): void {
    this.subscribeToProductInventory();
  }

  private subscribeToProductInventory = (): void => {
    this.productInventoryService
      .getProductInventories()
      .pipe(take(1))
      .subscribe((productInventories: ProductInventory[]) => {
        this.rowData = productInventories;
      });
  };
}
