import { Injectable } from '@angular/core';
import { OrderStatusNames, OrderCategoryNames, OrderPriorityNames, OrderStatus, OrderPriority, OrderCategory, SortByDirectionNames, SortByElementNames, SortByDirection, SortByElement } from '../Enums/OrderEnums';
import { Observable } from 'rxjs';
import { OrderFilter } from '../models/order/order-filter-model'
import { Order } from '../models/order/order-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService { 

  public orders: Order[] = [];

  orderStatuses = Object.values(OrderStatusNames);
  orderCategories = Object.values(OrderCategoryNames);
  orderPriorities = Object.values(OrderPriorityNames); 
  constructor(private http: HttpClient) { } 

  //POST

  addNewOrder(newOrder: Order): Observable<Order> {
    return this.http.post<Order>('api/order', newOrder)
  }

  //GET

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

  loadOrders(): void {
    this.getOrders().subscribe({
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

    return this.getOrdersByParams(preparedFiltrer)
  }

  //createNewOrder(newOrder: Order): Observable<Order> {

  //  return this.apiHandlerService.addNewOrder(newOrder);

  //}

}
