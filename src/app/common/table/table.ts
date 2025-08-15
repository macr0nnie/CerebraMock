import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';



@Component({
  selector: 'app-table',
  standalone: false,

  templateUrl: './table.html',
  styleUrl: './table.scss'
})
export class Table {
products = [
  { code: 'A100', name: 'Product A', category: 'Category 1', quantity: 10 },
  // more products...
];

cols = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'quantity', header: 'Quantity' },
];
}
