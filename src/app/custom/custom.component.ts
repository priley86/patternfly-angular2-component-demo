import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-custom',
  templateUrl: 'custom.component.html',
  styleUrls: ['custom.component.css']
})
export class CustomComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  username = 'Danny';

  onSelected(e) {
    alert('This is being called from the angular component. ' + e.detail + ' Selected');
  }

  changeName(name) {
    this.username = name;
  }

}
