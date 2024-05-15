import {Game} from "./game";

export class Category {
  categoryId: number;
  name: string;
  games: Game[];

  constructor(categoryId: number, name: string, games: Game[]) {
    this.categoryId = categoryId;
    this.name = name;
    this.games = games;
  }
}
