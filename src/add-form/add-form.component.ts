import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerAppService } from 'src/services/customer-app.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  public name: AbstractControl;
  public phone: AbstractControl;
  // public registerForm: FormGroup;

  constructor(private router: Router,
    private custService: CustomerAppService,
  ) {
    // this.registerForm = new FormGroup({
    //   name: new FormControl("", [Validators.required]),
    //   phone: new FormControl("", [Validators.required]),
    // })
  }

  ngOnInit(): void {
    // this.name = this.registerForm.get('name');
    // this.phone = this.registerForm.get('phone');
  }

  onAddClick() {
    // e.preventDefault();
    // this.custService.addCustomer(this.registerForm.value).subscribe(res => {
    //   console.log('Register Response: ' + res);
    // });
    this.router.navigate(['/customer']);
  }

}
