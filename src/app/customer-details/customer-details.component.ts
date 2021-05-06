import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { CustomerService } from '../customer.service';
import{customer} from '../customers';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  public customers:customer[] = [];
  custom:customer;
  constructor(private route: ActivatedRoute,
    private customerService: CustomerService) { }





  ngOnInit() {
    this.customerService.getDetails().then((res: any) => {
      if (res) {
        this.customers = res;
        console.log(res);
        const routeparams = this.route.snapshot.paramMap;
        const customerId = String(routeparams.get("customerid"));
         this.custom=this.customers.find(customer => String(customer.id )== customerId);
      }
    });

  }

}
