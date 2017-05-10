import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../services/pagetitle.service';


@Component({
  moduleId: module.id,
  selector: 'grid-list-parent',
  templateUrl: 'grid-list-parent.html',
  styleUrls: ['gridlist-parent.css'],
  encapsulation: ViewEncapsulation.None,
})
export class GridListParent implements OnInit {
    screenshots: Object[] = [
    { name: 'Porter', human: 'Kara' },
    { name: 'Mal', human: 'Jeremy' },
    { name: 'Koby', human: 'Igor' },
    { name: 'Razzle', human: 'Ward' },
    { name: 'Molly', human: 'Rob' },
    { name: 'Husi', human: 'Matias' },
  ];
    constructor(private pageTitleService: PageTitleService) {
  }

  ngOnInit() {
        this.pageTitleService.setTitle('Grid List');
    }
}
