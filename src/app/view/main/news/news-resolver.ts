import {ResolveFn} from "@angular/router";
import {inject} from "@angular/core";
import {NewsService} from "../../../data/impl/news.service";

export const newsResolver: ResolveFn<any> = () => {
  const newsService = inject(NewsService);
  return newsService.getAll();
}
