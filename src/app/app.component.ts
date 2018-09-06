import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { fade } from './app.animations';

export enum KEY_CODE {
  ESC = 27
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [fade]
})
export class AppComponent {

  constructor(
    private location: Location
  ) {}

  @HostListener('window:keyup', ['$event'])
 keyEvent(event: KeyboardEvent) {
   if (event.keyCode === KEY_CODE.ESC) {
     this.location.back();
   }
 }
}
