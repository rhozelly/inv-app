import { Component, OnInit } from '@angular/core';
import { inputText, inputLabel } from '../core/input';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  inputs = inputText;
  labels = inputLabel;
  tableHeader: any = [
    'prod #',
    'name',
    'description',
    'category',
    'quantity on hand',
    'supplier',
    'price',
    'unit',
    'reorder qty',
    'date added',
    'latest update',
    'action',
  ]
  showList: boolean = true;
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addProductShow(){
    this.showList = false;
  }
  addProductHide(){
    this.showList = true;
  }
}
