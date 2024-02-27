import {Component, Input, OnInit} from '@angular/core';
import {Tournoi} from "../../models/Auth";

@Component({
  selector: 'app-tournoi-getone',
  templateUrl: './tournoi-getone.component.html',
  styleUrl: './tournoi-getone.component.css'
})
export class TournoiGetoneComponent implements OnInit{
@Input() tournoi!:Tournoi[]


  products!: Product[];

  statuses!: SelectItem[];

  clonedProducts: { [s: string]: Product } = {};

  constructor(private productService: ProductService, private messageService: MessageService) {}

  ngOnInit() {
    this.productService.getProductsMini().then((data) => {
      this.products = data;
    });

    this.statuses = [
      { label: 'In Stock', value: 'INSTOCK' },
      { label: 'Low Stock', value: 'LOWSTOCK' },
      { label: 'Out of Stock', value: 'OUTOFSTOCK' }
    ];
  }

  onRowEditInit(product: Product) {
    this.clonedProducts[product.id as string] = { ...product };
  }

  onRowEditSave(product: Product) {
    if (product.price > 0) {
      delete this.clonedProducts[product.id as string];
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Price' });
    }
  }

  onRowEditCancel(product: Product, index: number) {
    this.products[index] = this.clonedProducts[product.id as string];
    delete this.clonedProducts[product.id as string];
  }
}
