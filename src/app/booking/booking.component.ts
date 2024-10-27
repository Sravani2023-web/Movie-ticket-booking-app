import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Movie {
  name: string;
  price: number;
}

interface Theater {
  id: number;
  name: string;
  showTimes: string[];
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  selectedMovie: Movie | null = null;
  selectedTheater: Theater | null = null;
  selectedShowTime: string | null = null;
  price: number = 200;

  theaters: Theater[] = [
    { id: 1, name: 'AAA Cinemas:Ameerpet', showTimes: ['10:00 AM', '1:00 PM'] },
    { id: 2, name: 'AMB Cinemas:Gachibowli', showTimes: ['11:00 AM', '2:00 PM'] },
    { id: 3, name: 'Asian Cineplant Multiplex:Kompally', showTimes: ['02:15 pM', '7:30 PM'] }
  ];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.selectedMovie = navigation.extras.state['movie'];
    }
  }

  selectShowTime(theaterId: number, showTime: string) {
    this.selectedTheater = this.theaters.find(theater => theater.id === theaterId) || null;
    this.selectedShowTime = showTime;
    console.log(`Selected Theater: ${this.selectedTheater?.name}, Show Time: ${this.selectedShowTime}`);
    // You can navigate to the seat selection page here, if desired
     
  }
  bookTicket() {
        
    this.router.navigate(['/seat-selection']);
    }
}


    
    
  
  



