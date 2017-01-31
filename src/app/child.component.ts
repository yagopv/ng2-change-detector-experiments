import {
  Component, AfterViewChecked, ViewChild, ElementRef, NgZone, Renderer,
  ChangeDetectionStrategy, Input
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'child',
  template: `
        <a href="#" #componentBox (click)="clicked()">Child</a>
        <ul>
          <li>
            <grand-child></grand-child>
          </li>
          <li>
            <grand-child></grand-child>
          </li>
        </ul>    
    `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements AfterViewChecked {

  @ViewChild('componentBox') componentBox: ElementRef;

  constructor(private renderer: Renderer, private zone: NgZone) { }

  ngAfterViewChecked() {
    this.renderer.setElementClass(this.componentBox.nativeElement, 'change-detector-check', true);
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.renderer.setElementClass(this.componentBox.nativeElement, 'change-detector-check', false);
      }, 4000);
    })
  }

  clicked() {
    console.log('clicked!!');
  }
}
