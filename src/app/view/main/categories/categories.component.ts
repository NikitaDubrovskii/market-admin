import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {SidebarService} from "../../../service/sidebar.service";
import {CategoryService} from "../../../data/impl/category.service";
import {Category} from "../../../model/category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['number', 'name', 'categoryId'];
  dataSource: MatTableDataSource<Category> = new MatTableDataSource<Category>();

  @ViewChild(MatPaginator) paginator: MatPaginator = MatPaginator.prototype;
  @ViewChild(MatSort) sort: MatSort = MatSort.prototype;


  constructor(private categoryService: CategoryService,
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
    this.categoryService.getAll().subscribe(res => {
      this.dataSource.data = res;
    })
  }

  // фильтр поиска по некоторым критериям
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();

    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const searchText = filter.toLowerCase();
      return data.name.toLowerCase().includes(searchText) ||
        data.categoryId.toString().includes(searchText);
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
