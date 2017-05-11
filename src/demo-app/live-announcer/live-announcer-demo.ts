import {Component} from '@angular/core';
import {LiveAnnouncer} from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'live-announcer',
  templateUrl: 'live-announcer-demo.html',
})
export class LiveAnnouncerDemo {

  constructor(private live: LiveAnnouncer) {}

  announceText(message: string) {
    this.live.announce(message);
  }

}
