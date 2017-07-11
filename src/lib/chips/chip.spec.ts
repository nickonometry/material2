import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement}  from '@angular/core';
import {By} from '@angular/platform-browser';
import {MdChipList, MdChip, MdChipEvent, MdChipsModule} from './index';

describe('Chips', () => {
  let fixture: ComponentFixture<any>;
  let chipDebugElement: DebugElement;
  let chipListNativeElement: HTMLElement;
  let chipNativeElement: HTMLElement;
  let chipInstance: MdChip;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MdChipsModule],
      declarations: [
        BasicChip, SingleChip
      ]
    });

    TestBed.compileComponents();
  }));

  describe('MdBasicChip', () => {

    beforeEach(() => {
      fixture = TestBed.createComponent(BasicChip);
      fixture.detectChanges();

      chipDebugElement = fixture.debugElement.query(By.directive(MdChip));
      chipNativeElement = chipDebugElement.nativeElement;
      chipInstance = chipDebugElement.injector.get(MdChip);

      document.body.appendChild(chipNativeElement);
    });

    afterEach(() => {
      document.body.removeChild(chipNativeElement);
    });

    it('adds the `mat-basic-chip` class', () => {
      expect(chipNativeElement.classList).toContain('mat-chip');
      expect(chipNativeElement.classList).toContain('mat-basic-chip');
    });
  });

  describe('MdChip', () => {
    let testComponent: SingleChip;

    describe('basic behaviors', () => {

      beforeEach(() => {
        fixture = TestBed.createComponent(SingleChip);
        fixture.detectChanges();

        chipDebugElement = fixture.debugElement.query(By.directive(MdChip));
        chipListNativeElement = fixture.debugElement.query(By.directive(MdChipList)).nativeElement;
        chipNativeElement = chipDebugElement.nativeElement;
        chipInstance = chipDebugElement.injector.get(MdChip);
        testComponent = fixture.debugElement.componentInstance;

        document.body.appendChild(chipNativeElement);
      });

      afterEach(() => {
        document.body.removeChild(chipNativeElement);
      });

      it('adds the `md-chip` class', () => {
        expect(chipNativeElement.classList).toContain('mat-chip');
      });

      it('does not add the `mat-basic-chip` class', () => {
        expect(chipNativeElement.classList).not.toContain('mat-basic-chip');
      });

      it('emits focus on click', () => {
        spyOn(chipInstance, 'focus').and.callThrough();

        chipNativeElement.click();

        expect(chipInstance.focus).toHaveBeenCalledTimes(1);
      });

      it('emits destroy on destruction', () => {
        spyOn(testComponent, 'chipDestroy').and.callThrough();

        // Force a destroy callback
        testComponent.shouldShow = false;
        fixture.detectChanges();

        expect(testComponent.chipDestroy).toHaveBeenCalledTimes(1);
      });

      it('allows color customization', () => {
        expect(chipNativeElement.classList).toContain('mat-primary');

        testComponent.color = 'warn';
        fixture.detectChanges();

        expect(chipNativeElement.classList).not.toContain('mat-primary');
        expect(chipNativeElement.classList).toContain('mat-warn');
      });

      it('allows selection', () => {
        spyOn(testComponent, 'chipSelect');
        expect(chipNativeElement.classList).not.toContain('mat-chip-selected');

        testComponent.selected = true;
        fixture.detectChanges();

        expect(chipNativeElement.classList).toContain('mat-chip-selected');
        expect(testComponent.chipSelect).toHaveBeenCalledWith({ chip: chipInstance });
      });

      it('should update the aria-label for disabled chips', () => {
        expect(chipNativeElement.getAttribute('aria-disabled')).toBe('false');

        testComponent.disabled = true;
        fixture.detectChanges();

        expect(chipNativeElement.getAttribute('aria-disabled')).toBe('true');
      });

    });
  });
});

@Component({
  template: `
    <md-chip-list>
      <div *ngIf="shouldShow">
        <md-chip [color]="color" [selected]="selected" [disabled]="disabled"
                 (focus)="chipFocus($event)" (destroy)="chipDestroy($event)"
                 (select)="chipSelect($event)" (deselect)="chipDeselect($event)">
          {{name}}
        </md-chip>
      </div>
    </md-chip-list>`
})
class SingleChip {
  disabled: boolean = false;
  name: string = 'Test';
  color: string = 'primary';
  selected: boolean = false;
  shouldShow: boolean = true;

  chipFocus: (event?: MdChipEvent) => void = () => {};
  chipDestroy: (event?: MdChipEvent) => void = () => {};
  chipSelect: (event?: MdChipEvent) => void = () => {};
  chipDeselect: (event?: MdChipEvent) => void = () => {};
}

@Component({
  template: `<md-basic-chip>{{name}}</md-basic-chip>`
})
class BasicChip {
}
