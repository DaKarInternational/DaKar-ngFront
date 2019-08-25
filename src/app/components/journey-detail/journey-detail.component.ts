import { Component, OnInit } from '@angular/core';
import { JourneyService } from '../../services/journey.service';

@Component({
  selector: 'app-journey-detail',
  templateUrl: './journey-detail.component.html',
  styleUrls: ['./journey-detail.component.scss']
})
export class JourneyDetailComponent implements OnInit {

  constructor(private journeyService: JourneyService) { }

  ngOnInit() {
  }

}
