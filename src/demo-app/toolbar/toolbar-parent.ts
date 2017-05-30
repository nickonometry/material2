import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../services/pagetitle.service';


@Component({
  moduleId: module.id,
  selector: 'toolbar-parent',
  templateUrl: 'toolbar-parent.html',
  styleUrls: ['toolbar-parent.css'],
})
export class ToolbarParent implements OnInit {
  screenshots: Object[] = [
    { name: 'screenshot1', title: 'Screenshot Example 1'},
    { name: 'screenshot2', title: 'Screenshot Example 2'},
    { name: 'screenshot3', title: 'Screenshot Example 3'},
    { name: 'screenshot4', title: 'Screenshot Example 4'},
    { name: 'screenshot5', title: 'Screenshot Example 5'},
    { name: 'screenshot6', title: 'Screenshot Example 6'},
  ];
  constructor(private pageTitleService: PageTitleService) {
  }

  ngOnInit() {
    this.pageTitleService.setTitle('Toolbar');
  }
}
