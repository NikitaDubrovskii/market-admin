import {Component} from '@angular/core';
import {SidebarService} from "../../service/sidebar.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {

  constructor(private sidebarService: SidebarService) {}

  toggleSidebar() {
    this.sidebarService.toggle();
  }

}
