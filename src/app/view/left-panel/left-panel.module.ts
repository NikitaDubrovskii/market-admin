import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LeftPanelComponent} from "./left-panel.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [LeftPanelComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [LeftPanelComponent]
})
export class LeftPanelModule { }
