import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../services/pagetitle.service';
import { AutocompleteDemo } from './autocomplete-demo';


@Component({
  moduleId: module.id,
  selector: 'autocomplete-parent',
  templateUrl: 'autocomplete-parent.html',
  styleUrls: ['autocomplete-parent.css'],
})
export class AutocompleteParent implements OnInit {
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
        this.pageTitleService.setTitle('Autocomplete');
    }
}
