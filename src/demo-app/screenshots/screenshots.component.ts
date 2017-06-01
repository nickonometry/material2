import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'screenshot-component',
  templateUrl: 'screenshots.component.html',
})

export class ScreenshotComponent {
   
    @Input('parentData') incomingData: string;
    @Input('testData') incomingData2: string;
    constructor() { }

   screenshots: Object[] = [
    { name: 'screenshot1', title: 'Screenshot Example 1'},
    { name: 'screenshot2', title: 'Screenshot Example 2'},
    { name: 'screenshot3', title: 'Screenshot Example 3'},
    { name: 'screenshot4', title: 'Screenshot Example 4'},
    { name: 'screenshot5', title: 'Screenshot Example 5'},
    { name: 'screenshot6', title: 'Screenshot Example 6'},
  ];
}
