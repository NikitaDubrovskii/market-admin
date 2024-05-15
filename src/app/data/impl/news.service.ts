import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CommonService} from "./common.service";

export const NEWS_URL_TOKEN = new InjectionToken<string>('url');

@Injectable({
  providedIn: 'root'
})
export class NewsService extends CommonService<any>{

  constructor(private http: HttpClient,
              @Inject(NEWS_URL_TOKEN) private baseUrl: string) {
    super(http, baseUrl)
  }
}
