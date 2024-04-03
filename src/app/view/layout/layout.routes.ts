import {Routes} from '@angular/router';
import {OverviewComponent} from "../main/overview/overview.component";
import {GamesComponent} from "../main/games/games.component";

export const LayoutRoutes: Routes = [
  {path: 'overview', component: OverviewComponent},
  {path: 'games', component: GamesComponent}
]
