import {Component, Input} from '@angular/core';
import {Journey} from '../../models/Journey';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent {

  @Input('journey') journey: Journey;

  constructor(private router: Router) {
  }

  private goToJourneyDetail(journeyId: string) {
    this.router.navigate(['/journey-detail'], { queryParams: { id: journeyId } });
  }
}
