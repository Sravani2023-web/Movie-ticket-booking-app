import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { BookingComponent } from './booking/booking.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'movie/:id', component: MovieDetailsComponent }, // Ensure this line is present
  { path: 'booking', component: BookingComponent },
  { path: 'seat-selection', component:SeatSelectionComponent},
  {path:'payment',component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
