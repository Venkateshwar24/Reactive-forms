
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CustomerService } from '../customer.service';


import { customer } from '../customers';
@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  public customers: customer[] = [];
  // Customers=customers;
  constructor(private customerService: CustomerService,
    private fb:FormBuilder) { }

  async ngOnInit() {
    await this.customerService.getDetails().then((res: any) => {
      if (res) {
        this.customers = res;
      }
    });
  }
  dateForm=this.fb.group({
    dob:[''],
    age:['']
  });

todayDate=new Date();
year=this.todayDate.getFullYear();
inAge=this.dateForm.get('age');
inDob=this.dateForm.get('dob');
//yearindate=this.inDob.value.split("");
//val=this.yearindate[14];
agecalci()
{
  this.inAge.patchValue(this.inDob.value);
}
}