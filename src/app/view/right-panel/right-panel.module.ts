import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RightPanelComponent} from "./right-panel.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [RightPanelComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [RightPanelComponent]
})
export class RightPanelModule { }
