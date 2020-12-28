import {Component, Input, OnInit} from '@angular/core';
import {Trainee} from '../trainee.model';
import {TraineesService} from '../trainees.service';

@Component({
  selector: 'app-trainees',
  templateUrl: './trainees.component.html',
  styleUrls: ['./trainees.component.css']
})
export class TraineesComponent implements OnInit {

  trainees: Trainee[];

  constructor(private readonly traineesService: TraineesService) { }

  ngOnInit(): void {
    this.trainees = this.traineesService.getTrainees();
  }
}
