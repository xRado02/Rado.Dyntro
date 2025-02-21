import { Injectable } from '@angular/core';
import { ApiHandlerService, Order } from '../Services/api-handler.service';
import { OrderStatusNames, OrderCategoryNames, OrderPriorityNames, OrderStatus, OrderPriority, OrderCategory } from '../enums/OrderEnums';

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

  list(): Order[] {
    return this.orders;

  }

  searchByStatus(status: string): Order[] {  

    return this.list().filter(   
       order => OrderStatusNames[order.status] === status
    );
  }



}
