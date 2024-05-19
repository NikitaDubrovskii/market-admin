import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Game} from "../../../model/game";
import {MatSort} from "@angular/material/sort";
import {GameService} from "../../../data/impl/game.service";
import {SidebarService} from "../../../service/sidebar.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['number', 'name', 'price', 'date', 'rating', 'gameId'];
  dataSource: MatTableDataSource<Game> = new MatTableDataSource<Game>();

  @ViewChild(MatPaginator) paginator: MatPaginator = MatPaginator.prototype;
  @ViewChild(MatSort) sort: MatSort = MatSort.prototype;

  constructor(private gameService: GameService,
              private route: ActivatedRoute,
              private sidebarService: SidebarService) {
  }

  ngOnInit(): void {
    this.fillTable();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private fillTable() {
    /*this.gameService.getAll().subscribe(res => {
      this.dataSource.data = res;
    })*/
    this.dataSource.data = this.route.snapshot.data['data'];
  }

  // фильтр поиска по некоторым критериям
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();

    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const searchText = filter.toLowerCase();
      return data.name.toLowerCase().includes(searchText) ||
        data.price.toString().includes(searchText) ||
        data.gameId.toString().includes(searchText);
    };

    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  toggleSidebar() {
    this.sidebarService.toggle();
  }
}
