import {Route} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TraineesComponent} from './trainees/trainees.component';
import {CoursesComponent} from './courses/courses.component';
import {TraineeDetailComponent} from './trainee-detail/trainee-detail.component';

export const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'trainees', component: TraineesComponent},
  {path: 'trainees/:id', component: TraineeDetailComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'home', redirectTo: '', pathMatch: 'full'},
  {path: 'dashboard', redirectTo: '', pathMatch: 'full'}
];
