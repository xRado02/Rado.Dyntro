import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { OrderFilter } from '../models/order/order-filter-model'
import { Order } from '../models/order/order-model';
import { User } from '../models/user/user-model';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {
  constructor(private http: HttpClient) { }

  //Orders

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('/api/order');
  }  

  getOrdersByParams(preparedFilter: OrderFilter): Observable<Order[]> {

    let params: any = {};    

    if (preparedFilter.status != null) {
      params.searchByStatus = preparedFilter.status;
    }
    if (preparedFilter.category != null) {
      params.searchByCategory = preparedFilter.category;
    }
    if (preparedFilter.priority != null) {
      params.searchByPriority = preparedFilter.priority;
    }
    if (preparedFilter.user != null) {
      params.searchByUser = preparedFilter.user;
    }
    if (preparedFilter.sortByElement != null) {
      params.sortByElement = preparedFilter.sortByElement
    }
    if (preparedFilter.sortByDirection != null) {
      params.sortByDirection = preparedFilter.sortByDirection
    }

    return this.http.get<Order[]>('/api/Order/orderFilteredBy', { params });
  }

  addNewOrder(newOrder: Order): Observable<Order> {
    return this.http.post<Order>('api/order', newOrder)
  }

  //Users

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/user');
  }

  addNewUser(newUser: User): Observable<User> {
    return this.http.post<User>('api/user', newUser)
  }
}

