import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, HostListener, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'DaKar-ngFront';
  pageTitle = 'DaKar';

  isMobilePhone: MediaQueryList;

  fillerNav = ['find-journey', 'create-journey', 'list journey'];

  /** Display the home screen button */
  showButton = true;

  private _mobileQueryListener: () => void;
  deferredPrompt: any;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private swUpdate: SwUpdate) {
    this.isMobilePhone = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.isMobilePhone.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    // Manage frontend application versions
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('New version available. Load New Version?')) {
          window.location.reload();
        }
      });
    }
  }

  /**
   * Event to purpose to the user to install application
   * @param e event received
   */
  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e) {
    console.log('onbeforeinstallprompt event : ' + JSON.stringify(e));
    this.deferredPrompt = e;
    this.showButton = true;
  }

  /**
   * Purpose to the user to install the application
   */
  addToHomeScreen() {
    // hide our user interface that shows our A2HS button
    if (this.deferredPrompt) {
      this.showButton = false;
      // Show the prompt
      this.deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      this.deferredPrompt.userChoice
        .then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          this.deferredPrompt = undefined;
        });
    } else {
      console.error('The home screen option is not possible');
    }
  }

  ngOnDestroy(): void {
    this.isMobilePhone.removeListener(this._mobileQueryListener);
  }
}
