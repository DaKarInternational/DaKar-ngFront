import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { JourneyService } from '../../services/journey.service';
import { tap, filter } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-journey',
  templateUrl: './create-journey.component.html',
  styleUrls: ['./create-journey.component.scss']
})
export class CreateJourneyComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private journeyService: JourneyService,
    private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      destination: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.journeyService.createJourney(this.formGroup.get('destination').value, this.formGroup.get('price').value)
    .pipe(
      tap(result => console.log(result)),
      filter(res => Array.from(res).length > 0),
      tap(result => console.log(result))
    )
    .subscribe(
      (response) => {
        console.log(JSON.stringify(response));
      },
      (err) => console.error(err),
      () => {
        console.log('done searching by criteria !')
        this.router.navigate(['/']);
      }
    );

  }



}
