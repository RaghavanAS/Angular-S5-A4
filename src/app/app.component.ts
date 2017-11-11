import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-login></app-login>`,
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  // title = 'app';
}
