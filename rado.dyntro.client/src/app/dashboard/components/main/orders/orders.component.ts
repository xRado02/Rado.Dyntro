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
  public filteredOrders: Order[] = [];
  public OrderStatusNames = OrderStatusNames;
  public OrderCategoryNames = OrderCategoryNames;
  public OrderPriorityNames = OrderPriorityNames;
  public selectedStatus: string = '';
  constructor(private apiHandlerService: ApiHandlerService, private orderService: OrderService) { }

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders(): void {
    this.apiHandlerService.getOrders().subscribe({
      next: (orders) => {
        this.filteredOrders = orders;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  onStatusChange(event: string): void {
    this.selectedStatus = event;
    console.log('Wybrany status:', this.selectedStatus);
    console.log('Dostępne zamówienia przed filtrowaniem:', this.orderService.orders);
    this.orderService.loadOrdersByStatus(this.selectedStatus).subscribe({
      next: (orders) => {
        this.filteredOrders = orders;  
        console.log('Zamówienia po filtrowaniu:', this.filteredOrders);
      },
      error: (error) => {
        console.error('Błąd podczas ładowania zamówień:', error);
      }
    });
  }

}
