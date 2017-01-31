import {
  Component, AfterViewChecked, ViewChild,
  ElementRef, NgZone, Renderer
} from '@angular/core';

@Component({
  selector: 'parent',
  template: `
    <div class="tree">
      <ul>      
        <li>
          <a href="#" #componentBox (click)="clicked()">Parent Component</a>
          <ul>
            <li>
              <child parent="person"></child>
            </li>
            <li>
              <child parent="person"></child>
            </li>
            <li>
              <child parent="person"></child>
            </li>
            <li>
              <child parent="person"></child>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  `
})
export class ParentComponent implements AfterViewChecked {


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
    console.log('clicked!');
  }
}
