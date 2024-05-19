import {Component, OnInit} from '@angular/core';
import {GameService} from "../../../data/impl/game.service";
import {SidebarService} from "../../../service/sidebar.service";
import {Game} from "../../../model/game";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../../dialog/confirm-dialog/confirm-dialog.component";
import {forkJoin, map} from "rxjs";

@Component({
  selector: 'app-game-of-the-day',
  templateUrl: './game-of-the-day.component.html',
  styleUrl: './game-of-the-day.component.css'
})
export class GameOfTheDayComponent implements OnInit {

  gameOfTheDayNow?: Game | null;

  games: Game[] = [];
  selectedGame: Game | null = null;
  gameSearch: string = '';

  discount?: number;
  discountedPrice?: string;

  isSwitchOn: boolean = false;
  isButtonEnabled: boolean = false;

  constructor(private gameService: GameService,
              private sidebarService: SidebarService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.fillGames();
    this.findGameOfTheDay();
  }

  toggleSidebar() {
    this.sidebarService.toggle();
  }

  onGameSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const gameName = input.value;
    this.selectedGame = this.games.find(game => game.name === gameName) || null;

    this.discount = this.selectedGame?.discount;
    this.discountedPrice = this.selectedGame?.priceWithDiscount?.toString();

    this.updateButtonState();
  }

  calculateDiscountedPrice(): void {
    if (this.discount! < 0 || this.discount! > 100) {
      this.discountedPrice = '0.00';
    } else {
      const calculatedPrice = this.selectedGame!.price - (this.selectedGame!.price * this.discount! / 100);
      this.discountedPrice = calculatedPrice.toFixed(2);
    }

    this.updateButtonState();
  }

  updateButtonState(): void {
    if (this.discount) {
      this.isButtonEnabled = this.isSwitchOn && this.discount >= 0 && this.discount <= 100;
    }
  }

  clearGameSearch(): void {
    this.gameSearch = '';
    this.selectedGame = null;
    this.isSwitchOn = false;
    this.updateButtonState();
  }

  selectGameOfTheDay(gameOfDay: Game): void {
    this.gameSearch = gameOfDay.name;
    this.selectedGame = this.games.find(game => game.name === gameOfDay.name) || null;

    this.discount = this.selectedGame?.discount;
    this.discountedPrice = this.selectedGame?.priceWithDiscount?.toString();
    this.isSwitchOn = false;

    this.updateButtonState();
  }

  setGameOfTheDay() {
    if (this.selectedGame && this.discount) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '350px',
        data: {
          title: 'Confirm',
          message: `Are you sure you want to select <strong>${this.selectedGame.name}</strong> as the game of the day?`
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          if (this.selectedGame && this.discount) {
            this.gameService.addGameOfTheDay(this.selectedGame.gameId, this.discount).subscribe(res => {
              this.fillGames();
              this.findGameOfTheDay();
              this.selectedGame = res;
            });
          }
        } else {

        }
      });
    }
  }

  protected dataURI() {
    const bytes = this.selectedGame!.images!.find(img => img.preview)!.imageBytes
    return 'data:image/jpeg;base64,' + bytes;
  }

  private fillGames() {
    /*this.gameService.getAll().subscribe(res => {
      this.games = res;
    })*/

    forkJoin({
      allGames: this.gameService.getAll(),
      saleGames: this.gameService.getSale()
    }).pipe(
      map(({ allGames, saleGames }) => {
        return allGames.filter(game =>
          !saleGames.some(saleGame => saleGame.gameId === game.gameId)
        );
      })
    ).subscribe(filteredGames => {
      this.games = filteredGames;
    });
  }

  private findGameOfTheDay() {
    this.gameService.getGameOfTheDay().subscribe(res => {
      this.gameOfTheDayNow = res;
    })
  }
}
