import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CommonService} from "./common.service";

export const CATEGORY_URL_TOKEN = new InjectionToken<string>('url');

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends CommonService<any> {

  constructor(private http: HttpClient,
              @Inject(CATEGORY_URL_TOKEN) private baseUrl: string) {
    super(http, baseUrl)
  }
}
