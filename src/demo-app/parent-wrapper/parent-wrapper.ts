import {Component, EventEmitter, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {MaterialScrollTop} from '../material-scrolltop/material-scrolltop';
import {ScreenshotComponent} from '../screenshots/screenshots.component';
import { Router, NavigationStart, RoutesRecognized } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'parent-wrapper',
  templateUrl: 'parent-wrapper.html',
  styleUrls: ['parent-wrapper.css'],
  
})

export class ParentWrapper  {
  constructor(private router: Router, @Inject(DOCUMENT) private document: any) {  
        router.events.subscribe((url: any) => console.log("Parent Wrapper Component - The subscribed URL is " + router.url));      
    }
    screenshotPath = "assets/images" + this.router.url.replace(/-/g, "") + '/'; 
    currentURL = this.document.location.href
}
