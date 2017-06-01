import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../services/pagetitle.service';

@Component({
  moduleId: module.id,
  selector: 'button-toggle-parent',
  templateUrl: 'button-toggle-parent.html',
})
export class ButtonToggleParent {
  isDisabled: boolean = false;
  clickCounter: number = 0;
  screenshots: Object[] = [
    { name: 'screenshot1', title: 'Screenshot Example 1' },
    { name: 'screenshot2', title: 'Screenshot Example 2' },
    { name: 'screenshot3', title: 'Screenshot Example 3' },
    { name: 'screenshot4', title: 'Screenshot Example 4' },
    { name: 'screenshot5', title: 'Screenshot Example 5' },
    { name: 'screenshot6', title: 'Screenshot Example 6' },
  ];
  screenshotPath: string;
  constructor(private pageTitleService: PageTitleService) {
  }

  ngOnInit() {
    this.pageTitleService.setTitle('Button Toggle');
    this.screenshotPath = "../assets/images/" + this.pageTitleService.title.value.replace(/\s+/g, '').toLowerCase() + '/';
    console.log("The screenshot path for the button toggle is " + this.screenshotPath)
  }

}
