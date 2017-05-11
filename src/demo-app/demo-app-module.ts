import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoApp, Home} from './demo-app/demo-app';
import {
  MaterialModule,
  OverlayContainer,
  FullscreenOverlayContainer,
  MdSelectionModule,
} from '@angular/material';
import {DEMO_APP_ROUTES} from './demo-app/routes';
import {ProgressBarDemo} from './progress-bar/progress-bar-demo';
import {JazzDialog, ContentElementDialog, DialogDemo, IFrameDialog} from './dialog/dialog-demo';
import {RippleDemo} from './ripple/ripple-demo';
import {IconDemo} from './icon/icon-demo';
import {GesturesDemo} from './gestures/gestures-demo';
import {CardDemo} from './card/card-demo';
import {ChipsDemo} from './chips/chips-demo';
import {RadioDemo} from './radio/radio-demo';
import {ButtonToggleDemo} from './button-toggle/button-toggle-demo';
import {ProgressSpinnerDemo} from './progress-spinner/progress-spinner-demo';
import {TooltipDemo} from './tooltip/tooltip-demo';
import {ListDemo} from './list/list-demo';
import {BaselineDemo} from './baseline/baseline-demo';
import {GridListDemo} from './grid-list/grid-list-demo';
import {LiveAnnouncerDemo} from './live-announcer/live-announcer-demo';
import {OverlayDemo, SpagettiPanel, RotiniPanel} from './overlay/overlay-demo';
import {SlideToggleDemo} from './slide-toggle/slide-toggle-demo';
import {ToolbarDemo} from './toolbar/toolbar-demo';
import {ButtonDemo} from './button/button-demo';
import {MdCheckboxDemoNestedChecklist, CheckboxDemo} from './checkbox/checkbox-demo';
import {SelectDemo} from './select/select-demo';
import {SliderDemo} from './slider/slider-demo';
import {SidenavDemo} from './sidenav/sidenav-demo';
import {SnackBarDemo} from './snack-bar/snack-bar-demo';
import {PortalDemo, ScienceJoke} from './portal/portal-demo';
import {MenuDemo} from './menu/menu-demo';
import {TabsDemo, SunnyTabContent, RainyTabContent, FoggyTabContent} from './tabs/tabs-demo';
import {PlatformDemo} from './platform/platform-demo';
import {AutocompleteDemo} from './autocomplete/autocomplete-demo';
import {InputDemo} from './input/input-demo';
import {StyleDemo} from './style/style-demo';
import { FlexLayoutModule } from '@angular/flex-layout';

import {CardParent} from './card/card-parent';
import {AutocompleteParent} from './autocomplete/autocomplete-parent';
import {ButtonParent} from './button/button-parent';
import {ChipsParent} from './chips/chips-parent';
import {IconParent} from './icon/icon-parent';
import {ParentWrapper} from './parent-wrapper/parent-wrapper';
import {ButtonToggleParent} from './button-toggle/button-toggle-parent';
import {CheckboxParent} from './checkbox/checkbox-parent';
import {DialogParent} from './dialog/dialog-parent';
import {GesturesParent} from './gestures/gestures-parent';
import {GridListParent} from './grid-list/grid-list-parent';
import {InputParent} from './input/input-parent';
import {ListParent} from './list/list-parent';
import {MenuParent} from './menu/menu-parent';
import {OverlayParent} from './overlay/overlay-parent';
import {PortalParent} from './portal/portal-parent';
import {ProgressBarParent} from './progress-bar/progress-bar-parent';
import {ProgressSpinnerParent} from './progress-spinner/progress-spinner-parent';
import {RadioParent} from './radio/radio-parent';
import {RippleParent} from './ripple/ripple-parent';
import {SelectParent} from './select/select-parent';
import {SidenavParent} from './sidenav/sidenav-parent';
import {SlideToggleParent} from './slide-toggle/slide-toggle-parent';
import {SliderParent} from './slider/slider-parent';
import {SnackBarParent} from './snack-bar/snack-bar-parent';
import {TabsParent} from './tabs/tabs-parent';
import {ToolbarParent} from './toolbar/toolbar-parent';
import {TooltipParent} from './tooltip/tooltip-parent';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule.forRoot(DEMO_APP_ROUTES),
    MaterialModule,
    MdSelectionModule,
  ],
  declarations: [
    ParentWrapper,
    AutocompleteDemo,
    AutocompleteParent,
    BaselineDemo,
    SlideToggleParent,
    PortalParent,
    RadioParent,
    ProgressSpinnerParent,
    ButtonDemo,
    OverlayParent,
    ToolbarParent,
    SliderParent,
    SelectParent,
    RippleParent,
    ButtonParent,
    TabsParent,
    TooltipParent,
    SnackBarParent,
    ProgressBarParent,
    ButtonToggleDemo,
    ButtonToggleParent,
    CardDemo,
    SidenavParent,
    CardParent,
    ChipsParent,
    ChipsDemo,
    CheckboxDemo,
    CheckboxParent,
    DemoApp,
    DialogDemo,
    DialogParent,
    GesturesDemo,
    GesturesParent,
    GridListDemo,
    GridListParent,
    Home,
    IconDemo,
    IconParent,
    InputParent,
    InputDemo,
    JazzDialog,
    ContentElementDialog,
    IFrameDialog,
    ListDemo,
    ListParent,
    LiveAnnouncerDemo,
    MdCheckboxDemoNestedChecklist,
    MenuDemo,
    MenuParent,
    SnackBarDemo,
    OverlayDemo,
    PortalDemo,
    ProgressBarDemo,
    ProgressSpinnerDemo,
    RadioDemo,
    RippleDemo,
    RotiniPanel,
    ScienceJoke,
    SelectDemo,
    SidenavDemo,
    SliderDemo,
    SlideToggleDemo,
    SpagettiPanel,
    StyleDemo,
    ToolbarDemo,
    TooltipDemo,
    TabsDemo,
    SunnyTabContent,
    RainyTabContent,
    FoggyTabContent,
    PlatformDemo,
  ],
  providers: [
    {provide: OverlayContainer, useClass: FullscreenOverlayContainer}
  ],
  entryComponents: [
    DemoApp,
    JazzDialog,
    ContentElementDialog,
    IFrameDialog,
    RotiniPanel,
    ScienceJoke,
    SpagettiPanel,
  ],
})
export class DemoAppModule {
  constructor(private _appRef: ApplicationRef) { }

  ngDoBootstrap() {
    this._appRef.bootstrap(DemoApp);
  }
}
