import { Component, Inject,ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {trigger, transition, state, animate, style} from "@angular/animations";

@Component({
    moduleId: module.id,
    selector: 'material-scrolltop',
    templateUrl: 'material-scrolltop.html',
    styleUrls: ['material-scrolltop.css'],
    animations: [
  trigger('heroState', [
    state('inactive', style({
      backgroundColor: '#eee',
      transform: 'scale(1)'
    })),
    state('active',   style({
      backgroundColor: '#cfd8dc',
      transform: 'scale(1.1)'
    })),
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('100ms ease-out'))
  ])
]
})

export class MaterialScrollTop {
    constructor(@Inject(DOCUMENT) private document: any, private _element: ElementRef) {
    }
    currentURL = this.document.location.href

    scrollTop() {
        let elem = document.getElementById("top");
            elem.scrollIntoView();  
    }

}
