import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {SidebarService} from "../../../service/sidebar.service";
import {NewsService} from "../../../data/impl/news.service";
import {News} from "../../../model/news";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['number', 'title', 'description', 'dateOfPublication', 'newsId'];
  dataSource: MatTableDataSource<News> = new MatTableDataSource<News>();

  @ViewChild(MatPaginator) paginator: MatPaginator = MatPaginator.prototype;
  @ViewChild(MatSort) sort: MatSort = MatSort.prototype;


  constructor(private newsService: NewsService,
              private route: ActivatedRoute,
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
    /*this.newsService.getAll().subscribe(res => {
      this.dataSource.data = res;
    })*/
    this.dataSource.data = this.route.snapshot.data['data'];
  }

  // фильтр поиска по некоторым критериям
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();

    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const searchText = filter.toLowerCase();
      return data.title.toLowerCase().includes(searchText) ||
        data.description.toLowerCase().includes(searchText) ||
        data.newsId.toString().includes(searchText);
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
