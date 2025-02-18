import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { OrderStatus, OrderPriority, OrderCategory, OrderStatusNames, OrderCategoryNames, OrderPriorityNames } from '../../../Enums/OrderEnums'; 


interface Order {
  id: number;
  status: OrderStatus;
  topic: string;
  firstName: string;
  lastName: string;
  category: OrderCategory;
  priority: OrderPriority;
  date: Date;
}




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
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.http.get<Order[]>('/api/order').subscribe({
      next: (result) => {
        this.orders = result;
      },
      error: (error) => {
        console.error(error);
      }
    });

  }

}
