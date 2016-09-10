import { Component, OnInit } from '@angular/core';
import { TabsComponent } from '../tabs';

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [TabsComponent]
})
export class NavbarComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
