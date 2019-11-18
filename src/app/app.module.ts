import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule,
    MatDividerModule, MatButtonToggleModule, MatSlideToggleModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GraphQLModule} from './graphql.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {JourneyComponent} from './components/journey/journey.component';
import {FindJourneyComponent} from './components/find-journey/find-journey.component';
import { CreateJourneyComponent } from './components/create-journey/create-journey.component';
import { JourneyDetailComponent } from './components/journey-detail/journey-detail.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: 'find-journey', component: FindJourneyComponent },
  { path: 'create-journey', component: CreateJourneyComponent },
  { path: 'journey-detail', component: JourneyDetailComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    JourneyComponent,
    FindJourneyComponent,
    CreateJourneyComponent,
    JourneyDetailComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        ReactiveFormsModule,
        FormsModule,
        MatRadioModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatSelectModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatPaginatorModule,
        MatDividerModule,
        GraphQLModule,
        HttpClientModule,
        RouterModule.forRoot(
            appRoutes
            // ,{ enableTracing: true } // <-- debugging purposes only
        ),
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        MatButtonToggleModule,
        MatSlideToggleModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
