import { Component, OnInit } from '@angular/core';
import { JourneyService } from '../../services/journey.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Journey } from '../../models/Journey';

/**
 * Describe the detail of the journey
 */
@Component({
  selector: 'app-journey-detail',
  templateUrl: './journey-detail.component.html',
  styleUrls: ['./journey-detail.component.scss']
})
export class JourneyDetailComponent implements OnInit {

  journey: Journey;
  // TODO 2019/08 : Delete when there will be more informations about the journey
  sleeps: string[];

  constructor(private journeyService: JourneyService, private router: ActivatedRoute) { }

  ngOnInit() {
    // Get the journeyId parameter through the routing
    this.router.queryParamMap.subscribe(params => {
      this.searchById(params.get('journeyId'));
    });

    // TODO 2019/08 : Delete when there will be more informations about the journey
    this.sleeps = ['In the street', 'In my bed', 'Neverland'];
  }

  /**
   * Get the journey details
   * @param id id of the journey
   */
  private searchById(id: string) {
    this.journeyService.searchById(id)
      .pipe(tap(result => console.log(result)))
      .subscribe(
        (response) => {
          this.journey = response;
        },
        (err) => console.error(err),
        () => console.log('JourneyDetail : Done searching by id !')
      );
  }

}
