import { Component, Inject,ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    moduleId: module.id,
    selector: 'material-scrolltop',
    templateUrl: 'material-scrolltop.html',
    styleUrls: ['material-scrolltop.css'],
})

export class MaterialScrollTop {
    constructor(@Inject(DOCUMENT) private document: any, private _element: ElementRef) {
    }
    currentURL = this.document.location.href

    scrollTop() {
        let elem = document.getElementById("top");
            elem.scrollIntoView();  
    }

}
