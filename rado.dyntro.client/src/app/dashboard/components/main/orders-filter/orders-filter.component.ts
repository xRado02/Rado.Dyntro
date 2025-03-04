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

  @Output() selectedParams: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() userSearched: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchStatus') searchStatus!: ElementRef;
  @ViewChild('searchCategory') searchCategory!: ElementRef;
  @ViewChild('searchPriority') searchPriority!: ElementRef;
  @ViewChild('searchByUser') searchByUser!: ElementRef;
  @ViewChild('sortByDirection') sortByDirection!: ElementRef;
  @ViewChild('sortByElement') sortByElement!: ElementRef;

  orderStatuses = Object.values(OrderStatusNames);
  orderCategories = Object.values(OrderCategoryNames);
  orderPriorities = Object.values(OrderPriorityNames);

  selectedStatus = '';
  selectedCategory = '';
  selectedPriority = '';
  searchedUser = '';


  
  orders: Order[] = [];  
  filteredOrders: Order[] = [];

  ngOnInit() {
    this.orderService.loadOrders();
  }

  onSelectedParams(): void {
    const selectedStatus = this.searchStatus.nativeElement.value;
    const selectedCategory = this.searchCategory.nativeElement.value;
    const selectedPriority = this.searchPriority.nativeElement.value;
    const sortByElement = this.sortByElement.nativeElement.value;
    const sortByDirection = this.sortByDirection.nativeElement.value;

    this.selectedParams.emit([selectedStatus, selectedCategory, selectedPriority, sortByElement, sortByDirection]);
  }

  onSearchedUser(): void {
    const searchedUser = this.searchByUser.nativeElement.value;
    this.userSearched.emit(searchedUser);

  }




}


