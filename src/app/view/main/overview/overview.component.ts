import {Component, OnInit} from '@angular/core';
import {SidebarService} from "../../../service/sidebar.service";
import {ItemSelectionService} from "../../../service/item-selection.service";
import {GameService} from "../../../data/impl/game.service";
import {CategoryService} from "../../../data/impl/category.service";
import {NewsService} from "../../../data/impl/news.service";
import {ShopService} from "../../../data/impl/shop.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit {

  /*games: number = 0;
  news: number = 0;
  shops: number = 0;
  categories: number = 0;*/

  data: any;

  constructor(private sidebarService: SidebarService,
              private route: ActivatedRoute,
              private itemSelectionService: ItemSelectionService,
              private gameService: GameService,
              private categoryService: CategoryService,
              private newsService: NewsService,
              private shopService: ShopService) {

  }


  ngOnInit(): void {
    this.getCount();
  }

  toggleSidebar() {
    this.sidebarService.toggle();
  }

  private getCount() {
    /*this.gameService.getCount().subscribe(res => {
      this.games = res;
    });
    this.shopService.getCount().subscribe(res => {
      this.shops = res;
    });
    this.categoryService.getCount().subscribe(res => {
      this.categories = res;
    });
    this.newsService.getCount().subscribe(res => {
      this.news = res;
    });*/

    this.data = this.route.snapshot.data['data'];
  }
}
