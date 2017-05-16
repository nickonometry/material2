import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../services/pagetitle.service';


@Component({
  moduleId: module.id,
  selector: 'radio-parent',
  templateUrl: 'radio-parent.html',
  styleUrls: ['radio-parent.css'],
})
export class RadioParent implements OnInit {
  screenshots: Object[] = [
    { name: 'Porter', human: 'Kara' },
    { name: 'Mal', human: 'Jeremy' },
    { name: 'Koby', human: 'Igor' },
    { name: 'Razzle', human: 'Ward' },
    { name: 'Molly', human: 'Rob' },
    { name: 'Husi', human: 'Matias' },
  ];
  resources: Object[] = [
    { name: 'Material Guidelines', url: 'urlHere' },
    { name: 'UX Patterns', url: 'urlHere' },
    { name: 'Tyler UI', url: 'urlHere' },
  ];
  constructor(private pageTitleService: PageTitleService) {
  }

  ngOnInit() {
    this.pageTitleService.setTitle('Radio');
  }
}
