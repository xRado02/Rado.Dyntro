import { Component, ViewChild, ElementRef } from '@angular/core';
import { OrderStatusNames, OrderCategoryNames, OrderPriorityNames } from '../../../enums/OrderEnums';
import { OrderService } from '../../../Services/order.service';
import { ApiHandlerService, Order } from '../../../Services/api-handler.service';

@Component({
  selector: 'app-orders-filter',
  standalone: false,  
  templateUrl: './orders-filter.component.html',
  styleUrl: './orders-filter.component.css'
})
export class OrdersFilterComponent {
  constructor(private orderService: OrderService, private apiHandlerService: ApiHandlerService) {

  }

  @ViewChild('searchStatus') searchStatus!: ElementRef;

  orderStatuses = Object.values(OrderStatusNames);
  orderKategories = Object.values(OrderCategoryNames);
  orderPriorities = Object.values(OrderPriorityNames);
  selectedStatus = '';
  orders: Order[] = [];
  filteredOrders: Order[] = [];

  ngOnInit() {   
    this.orderService.loadOrders();
  }  

  onSelectedStatus(): void {
    this.selectedStatus = this.searchStatus.nativeElement.value;    
    console.log('Wybrany status:', this.selectedStatus);
    console.log('Dostępne zamówienia przed filtrowaniem:', this.orderService.orders); 
    this.filteredOrders = this.orderService.searchByStatus(this.selectedStatus);
    console.log('Zamówienia po filtrowaniu:', this.filteredOrders); 
  }


  




 

}
