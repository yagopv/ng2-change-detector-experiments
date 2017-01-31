import {
  Component, AfterViewChecked, ElementRef, ViewChild, Renderer, NgZone
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'grand-child',
  template: `
      <a href="#" #componentBox (click)="clicked()">Grand Child</a>
  `
})
export class GrandChildComponent implements AfterViewChecked {

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
