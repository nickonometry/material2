import {Component, OnInit} from '@angular/core';
import { PageTitleService } from '../services/pagetitle.service';


@Component({
  moduleId: module.id,
  selector: 'card-demo',
  templateUrl: 'card-demo.html',
  styleUrls: ['card-demo.css'],
})
export class CardDemo implements OnInit {
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
        this.pageTitleService.setTitle('Card');
    }
}
