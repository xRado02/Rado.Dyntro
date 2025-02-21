import { Component, OnInit } from '@angular/core';
import { OrderStatusNames, OrderCategoryNames, OrderPriorityNames } from '../../../enums/OrderEnums'; 
import { OrderService } from '../../../Services/order.service';
import { ApiHandlerService, Order } from '../../../Services/api-handler.service';

@Component({
  selector: 'app-orders',
  standalone: false,  
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {
  public orders: Order[] = [];
  public OrderStatusNames = OrderStatusNames;
  public OrderCategoryNames = OrderCategoryNames;
  public OrderPriorityNames = OrderPriorityNames;
  constructor(private apiHandlerService: ApiHandlerService, private orderService: OrderService) { }

  ngOnInit() {
    this.loadOrders();
  }

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
}
