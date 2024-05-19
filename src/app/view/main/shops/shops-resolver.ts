import {ResolveFn} from "@angular/router";
import {inject} from "@angular/core";
import {ShopService} from "../../../data/impl/shop.service";

export const shopsResolver: ResolveFn<any> = () => {
  const shopService = inject(ShopService);
  return shopService.getAll();
}
