import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../services/pagetitle.service';


@Component({
  moduleId: module.id,
  selector: 'dialog-parent',
  templateUrl: 'dialog-parent.html',
  styleUrls: ['dialog-parent.css'],
})
export class DialogParent implements OnInit {
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
    this.pageTitleService.setTitle('Dialogs');
    this.screenshotPath = "../assets/images/" + this.pageTitleService.title.value.toLowerCase() + '/';
    console.log("The screenshot path for the dialog is " + this.screenshotPath)
  }
}
