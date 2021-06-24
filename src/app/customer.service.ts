import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  private baseUrl = 'http://localhost:8082/customers/getAll';

  constructor(private httpClient: HttpClient) { }

  getCustomerList(): Observable<Customer[]>{

    return this.httpClient.get<Customer[]>('http://localhost:8082/customers/getAll');

  }
}
