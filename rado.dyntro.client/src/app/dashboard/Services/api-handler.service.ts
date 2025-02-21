import { Injectable } from '@angular/core';
import { OrderStatus, OrderPriority, OrderCategory, OrderStatusNames, OrderCategoryNames, OrderPriorityNames } from '../enums/OrderEnums';
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
}

