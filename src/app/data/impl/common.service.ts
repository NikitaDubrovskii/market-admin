import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommonService<T> {

  private readonly url: string;

  constructor(private httpClient: HttpClient,
              @Inject(String) url: string) {
    this.url = url;
  }

  getAll(): Observable<T[]> {
    return this.httpClient.get<T[]>(this.url)
  }

  getCount(): Observable<T> {
    return this.httpClient.get<T>(this.url + '/admin/count');
  }
}
