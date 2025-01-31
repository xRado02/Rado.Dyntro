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

  public order: Order[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    
  }

}
