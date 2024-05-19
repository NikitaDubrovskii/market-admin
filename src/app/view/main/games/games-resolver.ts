import {ResolveFn} from "@angular/router";
import {inject} from "@angular/core";
import {GameService} from "../../../data/impl/game.service";

export const gamesResolver: ResolveFn<any> = () => {
  const gameService = inject(GameService);
  return gameService.getAll();
}
