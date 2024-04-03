import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {LayoutRoutes} from "./layout.routes";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes),
  ]
})
export class LayoutModule { }
