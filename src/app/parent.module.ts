import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { ChildComponent } from "./child.component";
import { GrandChildComponent } from "./grand-child.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    ParentComponent,
    ChildComponent,
    GrandChildComponent
  ],
  bootstrap: [ParentComponent]
})
export class ParentModule { }
