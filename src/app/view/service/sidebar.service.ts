import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  isSidebarOpen: boolean = false;

  toggle() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
