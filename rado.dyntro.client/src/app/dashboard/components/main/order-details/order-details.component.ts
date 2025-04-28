import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../Services/order.service';
import { Order } from '../../../models/order/order-model'; 
import { ActivatedRoute, Router } from '@angular/router';
import { OrderStatusNames, OrderCategoryNames, OrderPriorityNames } from '../../../Enums/OrderEnums';

@Component({
  selector: 'app-order-details',
  standalone: false,
  
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent implements OnInit {

  orderId: string | null = null;
  orderDetails?: Order;
  isLoading?: boolean;
  public OrderStatusNames = OrderStatusNames;
  public OrderCategoryNames = OrderCategoryNames;
  public OrderPriorityNames = OrderPriorityNames;
  constructor(private orderService: OrderService, private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.orderId = this.route.snapshot.paramMap.get('id');
    console.log('Pobrane ID zamówienia:', this.orderId);

    if (this.orderId) {
      this.loadOrderDetails(this.orderId);
    } else {
      console.error('Brak ID zamówienia w URL!');
    }
  }

  loadOrderDetails(id: string): void {
    this.isLoading = true; 
    this.orderService.getOrderDetails(id).subscribe({
      next: (response) => {
        this.orderDetails = response;
        this.isLoading = false; 
      },
      error: (error) => {
        console.error(error);
        this.isLoading = false; 
      }
    });
  }

}
