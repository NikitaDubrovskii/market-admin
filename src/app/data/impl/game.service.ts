import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {CommonService} from "./common.service";
import {GameDao} from "../dao/game-dao";
import {Observable} from "rxjs";
import {Game} from "../../model/game";

export const GAME_URL_TOKEN = new InjectionToken<string>('url');

@Injectable({
  providedIn: 'root'
})
export class GameService extends CommonService<any> implements GameDao {

  constructor(private http: HttpClient,
              @Inject(GAME_URL_TOKEN) private baseUrl: string) {
    super(http, baseUrl)
  }

  getGameOfTheDay(): Observable<Game> {
    return this.http.get<Game>(this.baseUrl + '/gameOfTheDay');
  }

  addGameOfTheDay(gameId: number, discount: number): Observable<any> {
    let params = new HttpParams().set('discount', discount.toString());
    return this.http.put<Game>(`${this.baseUrl}/addGameOfTheDay/${gameId}`, {}, { params });
  }

  getSale(): Observable<Game[]> {
    return this.http.get<Game[]>(this.baseUrl + '/saleGame');
  }

}
