import {Component, Input, OnInit} from '@angular/core';
import {Trainee} from '../trainee.model';
import {TraineesService} from '../trainees.service';

@Component({
  selector: 'app-trainee-detail',
  templateUrl: './trainee-detail.component.html',
  styleUrls: ['./trainee-detail.component.css']
})
export class TraineeDetailComponent implements OnInit {

  trainee: Trainee;

  constructor(
    private readonly traineesService: TraineesService
  ) { }

  ngOnInit(): void {

    // get id from route
    this.trainee = this.traineesService.getTrainee(1);
  }

}
