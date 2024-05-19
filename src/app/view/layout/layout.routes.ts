import {Routes} from '@angular/router';
import {OverviewComponent} from "../main/overview/overview.component";
import {GamesComponent} from "../main/games/games.component";
import {ShopsComponent} from "../main/shops/shops.component";
import {CategoriesComponent} from "../main/categories/categories.component";
import {NewsComponent} from "../main/news/news.component";
import {GameOfTheDayComponent} from "../main/game-of-the-day/game-of-the-day.component";
import {SalesComponent} from "../main/sales/sales.component";
import {CarouselComponent} from "../main/carousel/carousel.component";

export const LayoutRoutes: Routes = [
  {path: 'overview', component: OverviewComponent},
  {path: 'games', component: GamesComponent},
  {path: 'shops', component: ShopsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'news', component: NewsComponent},
  {path: 'game-of-the-day', component: GameOfTheDayComponent},
  {path: 'sales', component: SalesComponent},
  {path: 'carousel', component: CarouselComponent},
]
