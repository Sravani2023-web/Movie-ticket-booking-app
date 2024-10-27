import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css']
})

  export class SeatSelectionComponent {
    seats = [
      { id: 1, number: 'A1', available: true },
      { id: 2, number: 'A2', available: false },
      { id: 3, number: 'A3', available: false },
      { id: 4, number: 'A4', available: true },
      { id: 5, number: 'A5', available: true },
      { id: 6, number: 'A6', available: true},
      { id: 7, number: 'A7', available: false },
      // Add more seats as needed
    ];
  
    constructor(private router: Router) {}
  
    selectSeat(seatId: number) {
      // Logic to select seat
      this.router.navigate(['/payment']);
    }
  }
  

