import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { inputText, inputLabel } from '../core/input';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  inputs = inputText;
  labels = inputLabel;
  showCategoryList: boolean = true;
  breadcrumbs: any = ['Categories']

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    
  }
  showCat(value: any) {
    if (this.showCategoryList) {
      this.breadcrumbs.push('Add Category')
    } else {
      this.breadcrumbs.splice(1, 1);
    }
    this.showCategoryList = value;
  }


}
