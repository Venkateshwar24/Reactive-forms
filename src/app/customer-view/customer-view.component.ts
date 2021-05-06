
import { Component, OnInit } from '@angular/core';
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
  constructor(private customerService: CustomerService) { }

  async ngOnInit() {
    await this.customerService.getDetails().then((res: any) => {
      if (res) {
        this.customers = res;
      }
    });
  }
}