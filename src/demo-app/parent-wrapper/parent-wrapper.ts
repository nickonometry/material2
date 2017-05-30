import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {MaterialScrollTop} from '../material-scrolltop/material-scrolltop';

@Component({
  moduleId: module.id,
  selector: 'parent-wrapper',
  templateUrl: 'parent-wrapper.html',
  styleUrls: ['parent-wrapper.css'],
})

export class ParentWrapper  {
  constructor(@Inject(DOCUMENT) private document: any) { 
        
    }
    currentURL = this.document.location.href
}
