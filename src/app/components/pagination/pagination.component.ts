import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() data: any;
  @Input() total_length: any = "10";
  @Input() by: any = "1";
  @Input() from: any = "5";
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    // throw new Error('Method not implemented.');
  }
  
  previous() { }

  next() { }


}
