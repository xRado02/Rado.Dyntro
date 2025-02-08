import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


interface Order {

  id: number;
  status: string;
  topic: string;
  firstName: string;
  lastName: string;
  category: string;
  priority: string;
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

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.http.get<Order[]>('/order').subscribe({
      next: (result) => {
        this.orders = result;
      },
      error: (error) => {
        console.error(error);
      }
    });


  }






}
