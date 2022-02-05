import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const CUST_API = '';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class CustomerAppService {
    userLoggedIn: boolean = false;


    constructor(private http: HttpClient) { }


    // Get List of Customer from Database
    getCustomers(): Observable<any> {
        return this.http.post(CUST_API + '/api/getCustomerList', httpOptions);
    }


    // Get Particular Customer Data by its ID
    getCustomerData(customerData): Observable<any> {
        let obj = {
            id: customerData.id,
        }
        return this.http.post(CUST_API + '/api/getCustomerData', httpOptions);
    }


    // Get List of products owned by particular Customer
    getProductsForCustomer(customerData: any): Observable<any> {
        let obj = {
            id: customerData.id,
        }
        return this.http.post(CUST_API + '/api/getProductsForCustomer', obj, httpOptions);
    }


    // Add a new Customer 
    addCustomer(userData: any): Observable<any> {

        let obj = {
            firstname: userData.firstName,
            lastname: userData.lastName,
            email: userData.email,
            phonenumber: userData.phoneNumber
        }
        return this.http.post(CUST_API + '/api/addCustomer',
            obj);
    }

}