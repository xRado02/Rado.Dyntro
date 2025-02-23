import { Injectable } from '@angular/core';
import { ApiHandlerService, Order } from '../Services/api-handler.service';
import { OrderStatusNames, OrderCategoryNames, OrderPriorityNames, OrderStatus, OrderPriority, OrderCategory } from '../enums/OrderEnums';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public orders: Order[] = [];
  constructor(private apiHandlerService: ApiHandlerService) { }

  orderStatuses = Object.values(OrderStatusNames);
  orderKategories = Object.values(OrderCategoryNames);
  orderPriorities = Object.values(OrderPriorityNames);

  loadOrders(): void {
    this.apiHandlerService.getOrders().subscribe({
      next: (orders) => {
        this.orders = orders;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  loadOrdersByStatus(status: string): Observable<Order[]> {
    const enumKey = Object.keys(OrderStatusNames).find(
      key => OrderStatusNames[key as unknown as OrderStatus] === status
    );
    const orderStatusEnum = Number(enumKey) as OrderStatus;
    return this.apiHandlerService.getOrdersByStatus(orderStatusEnum);
  }

}
