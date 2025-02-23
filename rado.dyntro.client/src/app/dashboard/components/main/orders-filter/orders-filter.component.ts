import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
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
  @Output() statusSelected: EventEmitter<string> = new EventEmitter<string>();
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
    this.statusSelected.emit(this.selectedStatus);
  }



}


