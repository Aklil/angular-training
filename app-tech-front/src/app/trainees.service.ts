import {Injectable} from '@angular/core';
import {Trainee} from './trainee.model';

@Injectable()
export class TraineesService {

  getTrainees(): Trainee[]{
    return  [
      {
        id: 1,
        firstName: 'Abebe',
        lastName: 'kebede'
      },
      {
        id: 1,
        firstName: 'Abebe',
        lastName: 'kebede'
      },
      {
        id: 1,
        firstName: 'Abebe',
        lastName: 'kebede'
      },
      {
        id: 1,
        firstName: 'Abebe',
        lastName: 'kebede'
      }
    ];
  }

  getTrainee(id: number): Trainee{
    return this.getTrainees().find(x => x.id === id);
  }
}
