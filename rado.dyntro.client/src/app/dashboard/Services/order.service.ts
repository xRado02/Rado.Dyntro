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
  orderCategories = Object.values(OrderCategoryNames);
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

  loadOrdersByParams(status?: string, category?: string, priority?: string, user?: string, sortByElement?: number, sortByDirection?: number): Observable<Order[]> {
    const enumStatusKey = Object.keys(OrderStatusNames).find(
      key => OrderStatusNames[key as unknown as OrderStatus] === status
    );
    const orderStatusEnum = enumStatusKey ? Number(enumStatusKey) as OrderStatus : undefined;

    const enumCategoryKey = Object.keys(OrderCategoryNames).find(
      key => OrderCategoryNames[key as unknown as OrderCategory] === category
    );
    const orderCategoryEnum = enumCategoryKey ? Number(enumCategoryKey) as OrderCategory : undefined;

    const enumPriorityKey = Object.keys(OrderPriorityNames).find(
      key => OrderPriorityNames[key as unknown as OrderPriority] === priority
    );
    const orderPriorityEnum = enumPriorityKey ? Number(enumPriorityKey) as OrderPriority : undefined;

    return this.apiHandlerService.getOrdersByParams(orderStatusEnum, orderCategoryEnum, orderPriorityEnum, user, sortByElement, sortByDirection)
  }


}
