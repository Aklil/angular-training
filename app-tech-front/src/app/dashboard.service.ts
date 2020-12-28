import {Injectable} from '@angular/core';

@Injectable()
export class DashboardService{
  getTotalTrainee(): number{
    return 5000;
  }

  getTotalActiveTrainee(): number{
    return 50;
  }

  getTotalCourse(): number{
    return 20;
  }

  getTotalActiveCourse(): number{
    return 4;
  }
}
