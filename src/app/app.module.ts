import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutComponent} from './view/layout/layout.component';
import {LeftPanelModule} from "./view/left-panel/left-panel.module";
import {RightPanelModule} from "./view/right-panel/right-panel.module";
import {OverviewComponent} from "./view/main/overview/overview.component";
import {GamesComponent} from "./view/main/games/games.component";
import {GAME_URL_TOKEN} from "./data/impl/game.service";
import {HttpClientModule} from "@angular/common/http";
import {CATEGORY_URL_TOKEN} from "./data/impl/category.service";
import {NEWS_URL_TOKEN} from "./data/impl/news.service";
import {SHOP_URL_TOKEN} from "./data/impl/shop.service";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import { ShopsComponent } from './view/main/shops/shops.component';
import { CategoriesComponent } from './view/main/categories/categories.component';
import { NewsComponent } from './view/main/news/news.component';
import { SalesComponent } from './view/main/sales/sales.component';
import { CarouselComponent } from './view/main/carousel/carousel.component';
import { GameOfTheDayComponent } from './view/main/game-of-the-day/game-of-the-day.component';
import { ConfirmDialogComponent } from './view/dialog/confirm-dialog/confirm-dialog.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    OverviewComponent,
    GamesComponent,
    ShopsComponent,
    CategoriesComponent,
    NewsComponent,
    SalesComponent,
    CarouselComponent,
    GameOfTheDayComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LeftPanelModule,
    RightPanelModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: GAME_URL_TOKEN,
      useValue: 'http://localhost:8080/game'
    },
    {
      provide: CATEGORY_URL_TOKEN,
      useValue: 'http://localhost:8080/category'
    },
    {
      provide: NEWS_URL_TOKEN,
      useValue: 'http://localhost:8080/news'
    },
    /*{
      provide: CAROUSEL_URL_TOKEN,
      useValue: 'http://localhost:8080/carousel'
    },*/
    {
      provide: SHOP_URL_TOKEN,
      useValue: 'http://localhost:8080/shop'
    },
    provideAnimationsAsync(),
  ],

  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule {
}
