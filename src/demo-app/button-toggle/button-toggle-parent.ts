import {Component, OnInit} from '@angular/core';
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
        this.pageTitleService.setTitle('Button Toggle');
    }

}
