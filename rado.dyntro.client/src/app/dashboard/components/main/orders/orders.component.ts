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
    this.selectedStatus = event[0] || '';
    this.selectedCategory = event[1] || '';
    this.selectedPriority = event[2] || '';

    console.log('Wybrany status:', this.selectedStatus);
    console.log('Wybrana kategoria:', this.selectedCategory);
    console.log('Wybrany priorytet:', this.selectedPriority);
    console.log('Wpisany uzytkownik', this.searchedByUser);


    this.orderService.loadOrdersByParams(this.selectedStatus, this.selectedCategory, this.selectedPriority, this.searchedByUser).subscribe({
      next: (orders) => {
        this.filteredOrders = orders;
        console.log('Zamówienia po filtrowaniu:', this.filteredOrders);
      },
      error: (error) => {
        console.error('Błąd podczas ładowania zamówień:', error);
      }
    });
  }

  onUserSearched(user: string): void {
    this.searchedByUser = user || '';

    console.log('Wpisany uzytkownik', this.searchedByUser);

    this.orderService.loadOrdersByParams(undefined, undefined, undefined, this.searchedByUser).subscribe({
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
