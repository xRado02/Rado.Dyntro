import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-orders-filter',
  standalone: false,
  
  templateUrl: './orders-filter.component.html',
  styleUrl: './orders-filter.component.css'
})
export class OrdersFilterComponent {

  //@ViewChild('searchStatus') searchStatus!: ElementRef;
  //selectedStatusOn: string = 'W realizacji';
  //selectedStatusOff: string = 'Zamknięte';


  //onSelectedStatus(): void {
  //  this.selectedStatusOn = this.searchStatus.nativeElement.value;
  //  alert(this.selectedStatusOn);
  //}

}
