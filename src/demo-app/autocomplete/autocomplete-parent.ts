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
    { name: 'screenshot1', title: 'Screenshot Example 1'},
    { name: 'screenshot2', title: 'Screenshot Example 2'},
    { name: 'screenshot3', title: 'Screenshot Example 3'},
    { name: 'screenshot4', title: 'Screenshot Example 4'},
    { name: 'screenshot5', title: 'Screenshot Example 5'},
    { name: 'screenshot6', title: 'Screenshot Example 6'},
  ];

    resources: Object[] = [
    { name: 'Material Guidelines', url: 'https://material.io/guidelines/components/text-fields.html' },
  ];

    constructor(private pageTitleService: PageTitleService) {
  }

  ngOnInit() {
        this.pageTitleService.setTitle('Autocomplete');
    }
}
