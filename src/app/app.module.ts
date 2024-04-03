import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutComponent} from './view/layout/layout.component';
import {LeftPanelModule} from "./view/left-panel/left-panel.module";
import {RightPanelModule} from "./view/right-panel/right-panel.module";
import {OverviewComponent} from "./view/main/overview/overview.component";
import {GamesComponent} from "./view/main/games/games.component";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    OverviewComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeftPanelModule,
    RightPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule { }
