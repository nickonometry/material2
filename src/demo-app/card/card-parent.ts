import { Component, OnInit, Inject } from '@angular/core';
import { PageTitleService } from '../services/pagetitle.service';

@Component({
  moduleId: module.id,
  selector: 'card-parent',
  templateUrl: 'card-parent.html',
  styleUrls: ['card-parent.css'],
})
export class CardParent implements OnInit {

  screenshots: Object[] = [
    { name: 'screenshot1', title: 'Screenshot Example 1'},
    { name: 'screenshot2', title: 'Screenshot Example 2'},
    { name: 'screenshot3', title: 'Screenshot Example 3'},
    { name: 'screenshot4', title: 'Screenshot Example 4'},
    { name: 'screenshot5', title: 'Screenshot Example 5'},
    { name: 'screenshot6', title: 'Screenshot Example 6'},
  ];
  screenshotPath: string;
  constructor(private pageTitleService: PageTitleService,) {
  }
  ngOnInit() {
    this.pageTitleService.setTitle('Card');
    this.pageTitleService.setScreenshotsURL('assets/images/card/');
  }
}
