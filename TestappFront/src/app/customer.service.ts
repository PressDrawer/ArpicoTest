import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  //formData : Product;
  readonly rootUrl = 'https://localhost:44361/api/customers';
  
  constructor( private http : HttpClient  ) { }

  postCustomer(formData : Customer){
    return this.http.post(this.rootUrl,formData);
  }

  getAll(){
    return this.http.get<any[]>(this.rootUrl);
  }

  updateProduct(formData : Customer){
    return this.http.put(this.rootUrl + '/' + formData.nic,formData)
  }

  deleteProoduct(id){
    return this.http.delete(this.rootUrl + '/' + id);
   }

}
