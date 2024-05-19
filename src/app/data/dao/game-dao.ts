import {Observable} from "rxjs";

export interface GameDao {

  getGameOfTheDay(): Observable<any>;

  addGameOfTheDay(gameId: number, discount: number): Observable<any>;

  /*getPopular(): Observable<Game[]>;

  getNew(): Observable<Game[]>;*/

  getSale(): Observable<any>;

}
