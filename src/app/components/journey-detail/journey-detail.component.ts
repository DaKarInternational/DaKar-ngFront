import {Component, OnInit} from '@angular/core';
import {JourneyService} from '../../services/journey.service';
import {ActivatedRoute} from '@angular/router';
import {filter, tap} from 'rxjs/operators';
import {Journey} from '../../models/Journey';
import {FormControl} from '@angular/forms';

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
    // TODO 2019/08 : Delete when there will be more information about the journey
    sleeps: string[];
    destination = new FormControl('');
    price = new FormControl('');
    editionMode: boolean;

    constructor(private journeyService: JourneyService, private router: ActivatedRoute) {
    }

    ngOnInit() {
        // Get the journeyId parameter through the routing
        this.router.queryParamMap.subscribe(params => {
            this.searchById(params.get('journeyId'));
        });

        // TODO 2019/08 : Delete when there will be more informations about the journey
        this.sleeps = ['In the street', 'In my bed', 'Neverland'];
        this.editionMode = false;
    }

    /**
     * method executed when user clicks on the update button
     *
     */
    onSubmit() {
        if (!(this.price.value !== undefined && this.price.value.trim().length !== 0)) {
            return;
        }
        if (!(this.destination.value !== undefined && this.destination.value.trim().length !== 0)) {
            return;
        }
        this.updateJourney();
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

    /**
     * method that handles the calls and responses to the journeyService
     */
    private updateJourney() {
        this.journey.destination = this.destination.value;
        this.journeyService.updateJourney(this.journey)
            .pipe(
                tap(result => console.log(result)),
                filter(res => Array.from(res).length > 0),
                tap(result => console.log(result))
            )
            .subscribe(
                (response) => {
                    console.log('JourneyDetail: response that we got from the back', response);
                },
                (err) => console.error(err),
                () => console.log('JourneyDetail: Done updating the journey')
            );
    }
}
