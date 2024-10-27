import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
 export class MovieDetailsComponent implements OnInit {
      movie: any; // Define a proper interface for movie
      movies = [
        { id: 1, name: 'Devara', rating: 8.2, duration: '2h 57m', description: 'The film backdrop is centred around the far and forgetten coastal land of India.', genre: 'Action,Drama,Thriller', poster: 'assets/movie1.jpg' },
        { id: 2, name: 'Swag', rating: 8.3, duration: '2h 40m', description: 'Swag ia a Telugu movie starring sree vishnu,Ritu Varma,Meera Jasmine and Daksha Nagarkar in prominent roles.', genre: 'Comedy,Thriller', poster: 'assets/movie2.jpeg' },
        { id: 3, name: 'Satyam Sundaram', rating: 7.0, duration: '2h 6m', description: 'Satyam Sundaram is centred around tha far and forgetten coastal land of India.', genre: 'Drama', poster: 'assets/movie3.jpeg' },
        { id: 4, name: 'Viswam', rating: 8.4, duration: '2h 35m', description: 'Viswam is a Telugu movie starring Tottempudi Gopichand and kavya Thapar in prominent roles.', genre: 'Action,Comedy,Drama', poster: 'assets/movie4.jpeg' },
      ];
      price: number = 200;
    
      constructor(private route: ActivatedRoute, private router: Router) {}
    
      ngOnInit() {
        // Check if the parameter exists
        const movieId = this.route.snapshot.paramMap.get('id');
        if (movieId) {
          const id = +movieId; // Convert to number
          this.movie = this.movies.find(m => m.id === id);
          if (!this.movie) {
            console.error(`Movie with id ${id} not found.`);
          }
        } else {
          console.error('Movie ID not found in route parameters.');
        }
      }
    
      bookTicket() {
        
        this.router.navigate(['/booking'], { state: { movie: this.movie } });
        }
      }
    
    
  
  




