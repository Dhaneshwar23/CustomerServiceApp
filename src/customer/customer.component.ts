import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customers: any[];

  constructor() {
    this.customers = [
      {
        name: 'Karan',
        phone: '647-679-2304'
      },
      {
        name: 'Sharvil',
        phone: '647-679-6767'
      },
      {
        name: 'Dk',
        phone: '647-767-8737'
      }
    ]
  }

  ngOnInit(): void {
  }

}
