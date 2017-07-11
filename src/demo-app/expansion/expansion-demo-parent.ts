import { Component, OnInit, Inject } from '@angular/core';
import { PageTitleService } from '../services/pagetitle.service';

@Component({
  moduleId: module.id,
  selector: 'expansion-demo-parent',
  templateUrl: 'expansion-demo-parent.html',
  styleUrls: ['expansion-demo-parent.css'],
})
export class ExpansionPanelParent implements OnInit {

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
    this.pageTitleService.setTitle('Expansion Panels');
    this.pageTitleService.setScreenshotsURL('assets/images/expansionpanel/');
  }
}
