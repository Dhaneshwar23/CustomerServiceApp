import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productList: any[];

  constructor() {
    this.productList = [
      {
        name: 'Phone',
        price: '$200'
      },
      {
        name: 'Laptop',
        price: '$500'
      },
    ]
  }

  ngOnInit(): void {
  }


}
