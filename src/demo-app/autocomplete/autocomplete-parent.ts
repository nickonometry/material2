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
    { name: 'Porter' },
    { name: 'Mal'},
    { name: 'Koby' },
    { name: 'Razzle' },
    { name: 'Molly' },
    { name: 'Husi' },
  ];

    resources: Object[] = [
    { name: 'Material Guidelines', url: 'urlHere' },
    { name: 'UX Patterns', url: 'urlHere'},
    { name: 'Tyler UI', url: 'urlHere'},
  ];

    constructor(private pageTitleService: PageTitleService) {
  }

  ngOnInit() {
        this.pageTitleService.setTitle('Autocomplete');
    }
}
