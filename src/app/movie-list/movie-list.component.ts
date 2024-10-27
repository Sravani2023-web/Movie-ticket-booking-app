import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

// src/app/movie-list/movie-list.component.ts


export class MovieListComponent {
  movies = [
    { id: 1, name: 'Devara', poster: 'assets/movie1.jpg' },
    { id: 2, name: 'Swag', poster: "assets/movie2.jpeg" },
    { id: 3, name: 'Satyam Sundaram', poster: "assets/movie3.jpeg" },
    { id: 4, name: 'Viswam', poster: "assets/movie4.jpeg" },
    // Add more movies as needed
  ];

  constructor(private router: Router) {}

  goToDetails(movieId: number) {
    this.router.navigate(['/movie', movieId]);
  }
}




