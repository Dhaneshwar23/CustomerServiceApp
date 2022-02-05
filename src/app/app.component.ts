import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  customersList;


  constructor(private router: Router) {


    this.customersList = [
      { id: 1, name: "Karan" },
      { id: 2, name: "Sharvil" },
      { id: 3, name: "DK" },
      { id: 4, name: "Henil" },
      { id: 5, name: "Vishal" }
    ];
  }
  selectedValue = null;
  title = 'customerApp';



  onAddCustomerClick() {
    this.router.navigate(['/addCustomer']);
  }
}
