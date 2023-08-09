import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  tableHeader: any  = [
    'trans #',
    'prod #',
    'type',
    'transaction date',
    'qty',
    'supplier',
    'note',
    'actions'  ]
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
