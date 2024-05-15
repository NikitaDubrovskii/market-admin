import {Component, OnInit} from '@angular/core';
import {SidebarService} from "../../service/sidebar.service";
import {ItemSelectionService} from "../../service/item-selection.service";

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrl: './left-panel.component.css'
})
export class LeftPanelComponent implements OnInit {

  // @ts-ignore
  activeItem: number;

  constructor(protected sidebarService: SidebarService,
              private itemSelectionService: ItemSelectionService) {
  }

  ngOnInit(): void {
    this.activeItem = this.itemSelectionService.setActiveItemFromRoute();
  }

  setActiveItem(index: number) {
    // You can also call setActiveItem(index) here if needed
    this.activeItem = index;
  }
  toggleSidebar() {
    this.sidebarService.toggle();
  }

}
