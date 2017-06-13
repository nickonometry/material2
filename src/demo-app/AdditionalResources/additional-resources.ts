import { Component, Directive } from '@angular/core';
import { Router, NavigationStart, RoutesRecognized } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'additional-resources',
    templateUrl: 'additional-resources.html',
    styleUrls: ['additional-resources.css'],
})

export class AdditionalResources {

    materialGuidelinesURL: string;
    TylerUIURL: string;
    ConfluenceURL: string;

    constructor(router: Router) {
        router.events.subscribe((url: any) => console.log("Additonal Resources Component - The subscribed URL is " + url));
        var thisUrl = router.url

        switch (thisUrl) {
            case "/button":
                this.materialGuidelinesURL = "https://material.io/guidelines/components/buttons.html";
                this.TylerUIURL = "tyler UI test";
                this.ConfluenceURL = "C test";
                break;
            case "/autocomplete":
                this.materialGuidelinesURL = "https://material.io/guidelines/components/text-fields.html";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/card":
                this.materialGuidelinesURL = "https://material.io/guidelines/components/cards.html";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/chips":
                this.materialGuidelinesURL = "https://material.io/guidelines/components/chips.html";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/datepicker":
                this.materialGuidelinesURL = "https://material.io/guidelines/components/pickers.html";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/data-table":
                this.materialGuidelinesURL = "https://material.io/guidelines/components/data-tables.html";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/radio":
                this.materialGuidelinesURL = "https://material.io/guidelines/components/selection-controls.html#selection-controls-radio-button";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/select":
                this.materialGuidelinesURL = "https://material.io/guidelines/components/selection-controls.html";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/sidenav":
                this.materialGuidelinesURL = "https://material.io/guidelines/layout/structure.html#structure-side-nav";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/slide-toggle":
                this.materialGuidelinesURL = "https://material.io/guidelines/components/selection-controls.html#selection-controls-switch";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/slider":
                this.materialGuidelinesURL = "https://material.io/guidelines/components/sliders.html";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/progress-spinner":
                this.materialGuidelinesURL = "https://material.io/guidelines/components/progress-activity.html";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/progress-bar":
                this.materialGuidelinesURL = "https://material.io/guidelines/components/progress-activity.html";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/portal":
                this.materialGuidelinesURL = "";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/overlay":
                this.materialGuidelinesURL = "";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/checkbox":
                this.materialGuidelinesURL = "https://material.io/guidelines/components/selection-controls.html#selection-controls-checkbox";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/input":
                this.materialGuidelinesURL = "https://material.io/guidelines/components/text-fields.html#";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/toolbar":
                this.materialGuidelinesURL = "https://material.io/guidelines/components/toolbars.html";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/icon":
                this.materialGuidelinesURL = "https://material.io/guidelines/style/icons.html";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/list":
                this.materialGuidelinesURL = "https://material.io/guidelines/components/lists.html";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/menu":
                this.materialGuidelinesURL = "https://material.io/guidelines/components/menus.html";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/live-announcer":
                this.materialGuidelinesURL = "";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/gestures":
                this.materialGuidelinesURL = "https://material.io/guidelines/patterns/gestures.html";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/grid-list":
                this.materialGuidelinesURL = "https://material.io/guidelines/components/grid-lists.html";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/tabs":
                this.materialGuidelinesURL = "https://material.io/guidelines/components/tabs.html";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/button-toggle":
                this.materialGuidelinesURL = "https://material.io/guidelines/components/buttons.html#buttons-toggle-buttons";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/baseline":
                this.materialGuidelinesURL = "";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/ripple":
                this.materialGuidelinesURL = "https://material.io/guidelines/motion/material-motion.html#";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/dialog":
                this.materialGuidelinesURL = "https://material.io/guidelines/components/dialogs.html";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/tooltip":
                this.materialGuidelinesURL = "https://material.io/guidelines/components/tooltips.html";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/snack-bar":
                this.materialGuidelinesURL = "https://material.io/guidelines/components/snackbars-toasts.html";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/platform":
                this.materialGuidelinesURL = "";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            case "/style":
                this.materialGuidelinesURL = "";
                this.TylerUIURL = "";
                this.ConfluenceURL = "";
                break;
            default:
                this.materialGuidelinesURL = "";
        }

    }

}
