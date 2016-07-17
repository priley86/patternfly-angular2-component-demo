import { Component } from '@angular/core';
import { BadgeComponent } from './badge';
import { ProgressComponent } from './progress';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [BadgeComponent, ProgressComponent]
})
export class AppComponent {
  title = 'Patternfly Ng2 Web Component Spike!';

  constructor() {
  }
}
