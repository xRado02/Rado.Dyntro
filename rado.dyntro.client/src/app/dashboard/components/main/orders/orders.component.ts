import { Component, OnInit } from '@angular/core';
import { OrderStatusNames, OrderCategoryNames, OrderPriorityNames } from '../../../Enums/OrderEnums';
import { OrderService } from '../../../Services/order.service';
import { OrderFilter } from '../../../models/order/order-filter-model'
import { Order } from '../../../models/order/order-model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrderStatus, OrderPriority, OrderCategory } from '../../../Enums/OrderEnums';

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
  selectedOrdersIds: string[] = [];
  selectAllCheckbox: boolean = false;

  public Status = OrderStatus;
  public Category = OrderCategory;
  public Priority = OrderPriority;

  newOrder = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    topic: new FormControl('', Validators.required),
    status: new FormControl(OrderStatus.Canceled, Validators.required),
    category: new FormControl(OrderCategory.EmailCampaing, Validators.required),
    priority: new FormControl(OrderPriority.Medium, Validators.required)
  });

  orderStatuses = Object.values(OrderStatusNames);
  orderCategories = Object.values(OrderCategoryNames);
  orderPriorities = Object.values(OrderPriorityNames);
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getOrders().subscribe({
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
        console.log(this.filteredOrders);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  createNewOrder(): void {
    if (this.newOrder.valid) {
      const createdOrder: Partial<Order> = {
        firstName: this.newOrder.value.firstName,
        lastName: this.newOrder.value.lastName,
        topic: this.newOrder.value.topic,
        status: Number(this.newOrder.value.status),
        category: Number(this.newOrder.value.category),
        priority: Number(this.newOrder.value.priority),
      };
      this.orderService.addNewOrder(createdOrder).subscribe({
        next: (response) => {
          this.newOrder.reset();
          this.loadOrders();
        },
        error: (error) => {
          console.log(error);
        }
      })
    }
  }

  deleteOrders(): void {
    this.orderService.deleteOrders(this.selectedOrdersIds).subscribe({
      next: (response) => {
        this.selectedOrdersIds = [];
        this.selectAllCheckbox = false;
        this.loadOrders();
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  isSelected(orderId: string): boolean {
    return this.selectedOrdersIds.includes(orderId);
  }

  toogleSelection(orderId: string, checked: boolean): void {
    if (checked) {
      this.selectedOrdersIds.push(orderId);
    } else {
      this.selectedOrdersIds = this.selectedOrdersIds.filter(id => id !== orderId);
    }
    this.updateSelectAllCheckboxState();
  }

  toogleSelectionAll(): void {
    this.selectAllCheckbox = !this.selectAllCheckbox;
    if (this.selectAllCheckbox) {
      this.selectedOrdersIds = this.filteredOrders
        .map(order => order.id)
        .filter(id => id !== undefined) as string[];
    } else {
      this.selectedOrdersIds = [];
    }
  }


  getCheckboxChecked(event: Event): boolean {
    return (event.target as HTMLInputElement).checked;
  }

  updateSelectAllCheckboxState(): void {
    this.selectAllCheckbox = this.filteredOrders.length > 0 &&
      this.filteredOrders.every(order => order.id != null && this.selectedOrdersIds.includes(order.id));
  }




}



