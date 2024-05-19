import {inject} from '@angular/core';
import {ResolveFn} from '@angular/router';
import {GameService} from "../../../data/impl/game.service";
import {NewsService} from "../../../data/impl/news.service";
import {CategoryService} from "../../../data/impl/category.service";
import {ShopService} from "../../../data/impl/shop.service";
import {forkJoin} from "rxjs";

export const overviewResolver: ResolveFn<any> = () => {
  const gameService = inject(GameService);
  const categoryService = inject(CategoryService);
  const newsService = inject(NewsService);
  const shopService = inject(ShopService);

  return forkJoin({
    gameCount: gameService.getCount(),
    categoryCount: categoryService.getCount(),
    newsCount: newsService.getCount(),
    shopCount: shopService.getCount()
  })
};
