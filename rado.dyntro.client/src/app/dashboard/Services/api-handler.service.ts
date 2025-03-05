import { Injectable } from '@angular/core';
import { OrderStatus, OrderPriority, OrderCategory} from '../enums/OrderEnums';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { OrderFilter } from '../models/order/order-filter-model'
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



}

