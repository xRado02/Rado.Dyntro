import { Injectable } from '@angular/core';
import { OrderStatus, OrderPriority, OrderCategory} from '../enums/OrderEnums';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
export interface Order {
  id: number;
  status: OrderStatus;
  topic: string;
  firstName: string;
  lastName: string;
  category: OrderCategory;
  priority: OrderPriority;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {
  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('/api/order');
  }

  getOrdersByParams(orderStatus?: number, searchByCategory?: number, searchByPriority?: number, searchByUser?: string): Observable<Order[]> {

    let params: any = {};

    if (orderStatus != null) {
      params.searchByStatus = orderStatus;
    }
    if (searchByCategory != null) {
      params.searchByCategory = searchByCategory;
    }
    if (searchByPriority != null) {
      params.searchByPriority = searchByPriority;
    }
    if (searchByUser != null) {
      params.searchByUser = searchByUser;
    }

    return this.http.get<Order[]>('/api/Order/orderFilteredBy', { params });
  }



}

