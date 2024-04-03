import {Component} from '@angular/core';
import {SidebarService} from "../service/sidebar.service";

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrl: './left-panel.component.css'
})
export class LeftPanelComponent {

  activeItem: number = 0;

  constructor(protected sidebarService: SidebarService) {}

  toggleSidebar() {
    this.sidebarService.toggle();
  }

  setActiveItem(index: number) {
    this.activeItem = index;
  }

}
