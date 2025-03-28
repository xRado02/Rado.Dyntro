import { Component, OnInit } from '@angular/core';
import { OrderStatusNames, OrderCategoryNames, OrderPriorityNames } from '@enums/OrderEnums';
import { OrderService } from '../../../Services/order.service';
import { ApiHandlerService, Order } from '../../../Services/api-handler.service';
import { OrderFilter } from '../../../models/order/order-filter-model'

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
  selectedStatus = '';
  selectedCategory = '';
  selectedPriority = '';
  searchedByUser = '';
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

  onFiltersChange(event: string[]): void {

    const [status, category, priority, user, sortByElement, sortByDirection] = event;

    this.selectedStatus = status;
    this.selectedCategory = category;
    this.selectedPriority = priority;
    this.searchedByUser = user;

    const filter: OrderFilter = {
      status,
      category,
      priority,
      user,
      sortByElement,
      sortByDirection
    };

    this.orderService.loadOrdersByParams(filter).subscribe({
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



