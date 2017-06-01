import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PageTitleService {
    public title: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    public ScreenshotsURL: BehaviorSubject<string> = new BehaviorSubject<string>(null);

    setTitle(value: string) {
        this.title.next(value);
    }

    setScreenshotsURL(value: string) {
        this.ScreenshotsURL.next(value);
    }
}