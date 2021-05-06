import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) { }

  getDetails() {
    return this.http.get('https://jsonplaceholder.typicode.com/users').toPromise().then((res: any) => {
      if (res) {
        return res;
      }

    });
  }
}
