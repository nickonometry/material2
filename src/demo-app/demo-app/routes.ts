import {Routes} from '@angular/router';
import {Home} from './demo-app';
import {ButtonDemo} from '../button/button-demo';
import {BaselineDemo} from '../baseline/baseline-demo';
import {ButtonToggleDemo} from '../button-toggle/button-toggle-demo';
import {TabsDemo} from '../tabs/tabs-demo';
import {GridListDemo} from '../grid-list/grid-list-demo';
import {GesturesDemo} from '../gestures/gestures-demo';
import {LiveAnnouncerDemo} from '../live-announcer/live-announcer-demo';
import {ListDemo} from '../list/list-demo';
import {IconDemo} from '../icon/icon-demo';
import {ToolbarDemo} from '../toolbar/toolbar-demo';
import {CheckboxDemo} from '../checkbox/checkbox-demo';
import {OverlayDemo} from '../overlay/overlay-demo';
import {PortalDemo} from '../portal/portal-demo';
import {ProgressBarDemo} from '../progress-bar/progress-bar-demo';
import {ProgressSpinnerDemo} from '../progress-spinner/progress-spinner-demo';
import {SelectDemo} from '../select/select-demo';
import {SidenavDemo} from '../sidenav/sidenav-demo';
import {SlideToggleDemo} from '../slide-toggle/slide-toggle-demo';
import {SliderDemo} from '../slider/slider-demo';
import {RadioDemo} from '../radio/radio-demo';
import {CardDemo} from '../card/card-demo';
import {ChipsDemo} from '../chips/chips-demo';
import {MenuDemo} from '../menu/menu-demo';
import {RippleDemo} from '../ripple/ripple-demo';
import {DialogDemo} from '../dialog/dialog-demo';
import {TooltipDemo} from '../tooltip/tooltip-demo';
import {SnackBarDemo} from '../snack-bar/snack-bar-demo';
import {TABS_DEMO_ROUTES} from '../tabs/routes';
import {PlatformDemo} from '../platform/platform-demo';
import {AutocompleteDemo} from '../autocomplete/autocomplete-demo';
import {InputDemo} from '../input/input-demo';
import {StyleDemo} from '../style/style-demo';
import {DatepickerDemo} from '../datepicker/datepicker-demo';
import {DataTableDemo} from '../data-table/data-table-demo';
import {TypographyDemo} from '../typography/typography-demo';
import {ExpansionDemo} from '../expansion/expansion-demo';

import {AutocompleteParent} from '../autocomplete/autocomplete-parent';
import {CardParent} from '../card/card-parent';
import {ButtonParent} from '../button/button-parent';
import {ChipsParent} from '../chips/chips-parent';
import {IconParent} from '../icon/icon-parent';
import {ButtonToggleParent} from '../button-toggle/button-toggle-parent';
import {CheckboxParent} from '../checkbox/checkbox-parent';
import {DialogParent} from '../dialog/dialog-parent';
import {GesturesParent} from '../gestures/gestures-parent';
import {GridListParent} from '../grid-list/grid-list-parent';
import {InputParent} from '../input/input-parent';
import {ListParent} from '../list/list-parent';
import {MenuParent} from '../menu/menu-parent';
import {OverlayParent} from '../overlay/overlay-parent';
import {PortalParent} from '../portal/portal-parent';
import {ProgressBarParent} from '../progress-bar/progress-bar-parent';
import {ProgressSpinnerParent} from '../progress-spinner/progress-spinner-parent';
import {RadioParent} from '../radio/radio-parent';
import {RippleParent} from '../ripple/ripple-parent';
import {SelectParent} from '../select/select-parent';
import {SidenavParent} from '../sidenav/sidenav-parent';
import {SlideToggleParent} from '../slide-toggle/slide-toggle-parent';
import {SliderParent} from '../slider/slider-parent';
import {SnackBarParent} from '../snack-bar/snack-bar-parent';
import {TabsParent} from '../tabs/tabs-parent';
import {ToolbarParent} from '../toolbar/toolbar-parent';
import {TooltipParent} from '../tooltip/tooltip-parent';
import {DataTableParent} from '../data-table/data-table-parent';
import {DatepickerParent} from '../datepicker/datepicker-parent';

export const DEMO_APP_ROUTES: Routes = [
  {path: '', component: Home},
  {path: 'autocomplete', component: AutocompleteParent},
  {path: 'button', component: ButtonParent},
  {path: 'card', component: CardParent},
  {path: 'chips', component: ChipsParent},
  {path: 'radio', component: RadioParent},
  {path: 'select', component: SelectParent},
  {path: 'data-table', component: DataTableParent},
  {path: 'datepicker', component: DatepickerParent},
  {path: 'sidenav', component: SidenavParent},
  {path: 'slide-toggle', component: SlideToggleParent},
  {path: 'slider', component: SliderParent},
  {path: 'progress-spinner', component: ProgressSpinnerParent},
  {path: 'progress-bar', component: ProgressBarParent},
  {path: 'portal', component: PortalParent},
  {path: 'overlay', component: OverlayParent},
  {path: 'checkbox', component: CheckboxParent},
  {path: 'input', component: InputParent},
  {path: 'toolbar', component: ToolbarParent},
  {path: 'icon', component: IconParent},
  {path: 'list', component: ListParent},
  {path: 'menu', component: MenuParent},
  {path: 'live-announcer', component: LiveAnnouncerDemo},
  {path: 'gestures', component: GesturesParent},
  {path: 'grid-list', component: GridListParent},
  {path: 'tabs', component: TabsParent, children: TABS_DEMO_ROUTES},
  {path: 'button-toggle', component: ButtonToggleParent},
  {path: 'baseline', component: BaselineDemo},
  {path: 'ripple', component: RippleParent},
  {path: 'dialog', component: DialogParent},
  {path: 'tooltip', component: TooltipParent},
  {path: 'snack-bar', component: SnackBarParent},
  {path: 'platform', component: PlatformDemo},
  {path: 'style', component: StyleDemo},
  {path: 'typography', component: TypographyDemo},
  {path: 'expansion', component: ExpansionDemo},
];
