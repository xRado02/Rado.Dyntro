import { Injectable } from '@angular/core';
import { ApiHandlerService, Order } from '../Services/api-handler.service';
import { OrderStatusNames, OrderCategoryNames, OrderPriorityNames, OrderStatus, OrderPriority, OrderCategory, SortByDirectionNames, SortByElementNames, SortByDirection, SortByElement } from '@enums/OrderEnums';
import { Observable } from 'rxjs';
import { OrderFilter } from '../models/order/order-filter-model'

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

  loadOrdersByParams(filter: OrderFilter): Observable<Order[]> {
    const enumStatusKey = Object.keys(OrderStatusNames).find(
      key => OrderStatusNames[key as unknown as OrderStatus] === filter.status
    );
    const orderStatusEnum = enumStatusKey ? Number(enumStatusKey) as OrderStatus : undefined;

    const enumCategoryKey = Object.keys(OrderCategoryNames).find(
      key => OrderCategoryNames[key as unknown as OrderCategory] === filter.category
    );
    const orderCategoryEnum = enumCategoryKey ? Number(enumCategoryKey) as OrderCategory : undefined;

    const enumPriorityKey = Object.keys(OrderPriorityNames).find(
      key => OrderPriorityNames[key as unknown as OrderPriority] === filter.priority
    );   

    const enumSortElementKey = Object.keys(SortByElementNames).find(
      key => SortByElementNames[key as unknown as SortByElement] === filter.sortByElement
    );

    const enumSortDirectionsKey = Object.keys(SortByDirectionNames).find(
      key => SortByDirectionNames[key as unknown as SortByDirection] === filter.sortByDirection
    );
    const orderPriorityEnum = enumPriorityKey ? Number(enumPriorityKey) as OrderPriority : undefined;

    const preparedFiltrer: OrderFilter =
    {
      status: enumStatusKey,
      category: enumCategoryKey,
      priority: enumPriorityKey,
      user: filter.user,
      sortByDirection: enumSortDirectionsKey,
      sortByElement: enumSortElementKey,
    }

    return this.apiHandlerService.getOrdersByParams(preparedFiltrer)
  }

  //createNewOrder(newOrder: Order): Observable<Order> {

  //  return this.apiHandlerService.addNewOrder(newOrder);

  //}


}
