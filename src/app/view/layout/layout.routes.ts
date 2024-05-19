import {Routes} from '@angular/router';
import {OverviewComponent} from "../main/overview/overview.component";
import {GamesComponent} from "../main/games/games.component";
import {ShopsComponent} from "../main/shops/shops.component";
import {CategoriesComponent} from "../main/categories/categories.component";
import {NewsComponent} from "../main/news/news.component";
import {GameOfTheDayComponent} from "../main/game-of-the-day/game-of-the-day.component";
import {SalesComponent} from "../main/sales/sales.component";
import {CarouselComponent} from "../main/carousel/carousel.component";
import {overviewResolver} from "../main/overview/overview-resolver";
import {gamesResolver} from "../main/games/games-resolver";
import {shopsResolver} from "../main/shops/shops-resolver";
import {categoriesResolver} from "../main/categories/category-resolver";
import {newsResolver} from "../main/news/news-resolver";
import {gameOfTheDayResolver} from "../main/game-of-the-day/game-of-the-day-recolver";
import {salesResolver} from "../main/sales/sales-resolver";

export const LayoutRoutes: Routes = [
  {
    path: 'overview',
    component: OverviewComponent,
    resolve: {
      data: overviewResolver
    }
  },
  {
    path: 'games',
    component: GamesComponent,
    resolve: {
      data: gamesResolver
    }
  },
  {
    path: 'shops',
    component: ShopsComponent,
    resolve: {
      data: shopsResolver
    }
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    resolve: {
      data: categoriesResolver
    }
  },
  {
    path: 'news',
    component: NewsComponent,
    resolve: {
      data: newsResolver
    }
  },
  {
    path: 'game-of-the-day',
    component: GameOfTheDayComponent,
    resolve: {
      data: gameOfTheDayResolver
    }
  },
  {
    path: 'sales',
    component: SalesComponent,
    resolve: {
      data: salesResolver
    }
  },
  {path: 'carousel', component: CarouselComponent},
]
