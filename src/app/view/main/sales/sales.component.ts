import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SidebarService} from "../../../service/sidebar.service";
import {GameService} from "../../../data/impl/game.service";
import {MatTableDataSource} from "@angular/material/table";
import {Game} from "../../../model/game";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['number', 'name', 'price', 'discount', 'priceWithDiscount', 'gameId'];
  dataSource: MatTableDataSource<Game> = new MatTableDataSource<Game>();

  @ViewChild(MatPaginator) paginator: MatPaginator = MatPaginator.prototype;
  @ViewChild(MatSort) sort: MatSort = MatSort.prototype;

  constructor(private sidebarService: SidebarService,
              private gameService: GameService) {
  }

  ngOnInit(): void {
    this.fillTable();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();

    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const searchText = filter.toLowerCase();
      return data.name.toLowerCase().includes(searchText) ||
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

  private fillTable() {
    this.gameService.getSale().subscribe(res => {
      this.dataSource.data = res;
    })
  }
}
