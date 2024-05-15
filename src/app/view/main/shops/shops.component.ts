import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ShopService} from "../../../data/impl/shop.service";
import {SidebarService} from "../../../service/sidebar.service";
import {Shop} from "../../../model/shop";

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrl: './shops.component.css'
})
export class ShopsComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = ['number', 'name', 'address', 'phone', 'shopId'];
  dataSource: MatTableDataSource<Shop> = new MatTableDataSource<Shop>();

  @ViewChild(MatPaginator) paginator: MatPaginator = MatPaginator.prototype;
  @ViewChild(MatSort) sort: MatSort = MatSort.prototype;


  constructor(private shopService: ShopService,
              private sidebarService: SidebarService) {
  }

  ngOnInit(): void {
    this.fillTable();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private fillTable() {
    this.shopService.getAll().subscribe(res => {
      this.dataSource.data = res;
    })
  }

  // фильтр поиска по некоторым критериям
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();

    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const searchText = filter.toLowerCase();
      return data.name.toLowerCase().includes(searchText) ||
        data.address.toString().includes(searchText) ||
        data.shopId.toString().includes(searchText);
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
