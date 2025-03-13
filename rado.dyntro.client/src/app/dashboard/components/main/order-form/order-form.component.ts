import { Component, ElementRef, ViewChild } from '@angular/core';
import { OrderStatusNames, OrderCategoryNames, OrderPriorityNames } from '../../../enums/OrderEnums';
import { Order } from '../../../Services/api-handler.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-form',
  standalone: false,

  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.css'
})
export class OrderFormComponent {


  //orderStatuses = Object.values(OrderStatusNames);
  //orderCategories = Object.values(OrderCategoryNames);
  //orderPriorities = Object.values(OrderPriorityNames);


  //selectedStatus = '';
  //selectedCategory = '';
  //selectedPriority = '';


  //@ViewChild('selectClientName') clientName!: ElementRef;
  //@ViewChild('topic') inputTopic!: ElementRef;  
  //@ViewChild('selectStatus') searchStatus!: ElementRef;
  //@ViewChild('selectCategory') searchCategory!: ElementRef;
  //@ViewChild('selectPriority') searchPriority!: ElementRef;


  //createNewTicket(): void{
  //  const newOrder: Order = {
  //    id: 1,
  //    firstName: this.clientName.nativeElement.value,
  //    lastName: "test",
  //    topic: this.inputTopic.nativeElement.value,
  //    status: this.selectedStatus = this.searchStatus.nativeElement.value,
  //    category: this.selectedCategory = this.searchCategory.nativeElement.value,
  //    priority: this.selectedPriority = this.searchPriority.nativeElement.value,
      
  //  }
  //}

}
