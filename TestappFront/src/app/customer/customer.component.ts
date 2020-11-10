import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomerService } from '../customer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  cus : Customer = {
    nic : null,
    firstName : '', 
    lastName : '',
    address : '',
    email : '',
    mobile : '',
    birthday : ''
  }
  customerlist : Customer[] = [];


  constructor( private cusservice : CustomerService) { }

  ngOnInit(): void {

    this.cusservice.getAll()
    .subscribe((data : any) =>{
     console.log(data);
     this.customerlist = data;
     console.log(this.customerlist);
    })

  }

  onSubmit(form : NgForm){
   if(this.cus.nic == null){
    this.cusservice.postCustomer(form.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err)
        console.log(form.value);
      }
    )

  } 
  else  {
    this.cusservice.updateProduct(this.cus).subscribe(
    res => {
      console.log(res);
    },
    err => {
      console.log(err)
      console.log(form.value);
    }
  )
  } 
  
    window.location.reload();
   
}

populateForm(cus : Customer){
  this.cus = cus;
}

onDelete(id){
  this.cusservice.deleteProoduct(id)
  .subscribe(res=>{
    console.log("Success");
  },
    err=>{
      console.log(err);
    })
 
      window.location.reload();
     
}



}
