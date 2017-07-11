/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverlayModule, MdCommonModule} from '../core';
import {MdMenu} from './menu-directive';
import {MdMenuItem} from './menu-item';
import {MdMenuTrigger} from './menu-trigger';
import {MdRippleModule} from '../core/ripple/index';


@NgModule({
  imports: [
    OverlayModule,
    CommonModule,
    MdRippleModule,
    MdCommonModule,
  ],
  exports: [MdMenu, MdMenuItem, MdMenuTrigger, MdCommonModule],
  declarations: [MdMenu, MdMenuItem, MdMenuTrigger],
})
export class MdMenuModule {}


export * from './menu';
export {fadeInItems, transformMenu} from './menu-animations';
