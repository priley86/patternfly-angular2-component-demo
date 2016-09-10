import { Component, OnInit } from '@angular/core';
import { CardsComponent } from '../cards';
import { ListViewComponent } from '../list-view';
import { EmptyStateComponent } from '../empty-state';

@Component({
  moduleId: module.id,
  selector: 'app-tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.css'],
  directives: [CardsComponent, ListViewComponent, EmptyStateComponent]
})
export class TabsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

}
