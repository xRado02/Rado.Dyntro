import { Component, AfterViewInit } from '@angular/core';
import { Tooltip } from 'bootstrap';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'] 
})
export class FooterComponent implements AfterViewInit {

  
  ngAfterViewInit(): void {   
    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(tooltipTriggerEl => {
      new Tooltip(tooltipTriggerEl);
    });
  }
}
