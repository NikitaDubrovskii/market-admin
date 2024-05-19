import {ResolveFn} from "@angular/router";
import {inject} from "@angular/core";
import {CategoryService} from "../../../data/impl/category.service";

export const categoriesResolver: ResolveFn<any> = () => {
  const categoryService = inject(CategoryService);
  return categoryService.getAll();
}
