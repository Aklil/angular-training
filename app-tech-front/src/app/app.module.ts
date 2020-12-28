import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { TraineesComponent } from './trainees/trainees.component';
import { TraineeDetailComponent } from './trainee-detail/trainee-detail.component';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {TraineesService} from './trainees.service';
import { CoursesComponent } from './courses/courses.component';
import {DashboardService} from './dashboard.service';
import {routes} from './routes';

  @NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      TraineesComponent,
      TraineeDetailComponent,
      CoursesComponent
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatCardModule,
      MatButtonModule,
      MatListModule,
      RouterModule.forRoot(routes),
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule
    ],
    providers: [DashboardService, TraineesService],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
