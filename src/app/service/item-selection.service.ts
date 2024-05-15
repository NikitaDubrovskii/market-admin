import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ItemSelectionService {

  constructor(private router: Router) { }

  setActiveItemFromRoute(): number {
    const currentPath = this.router.url;
    if (currentPath.includes('/overview')) {
      return 0; // Overview page
    } else if (currentPath.includes('/games')) {
      return 1; // Games page
    } else if (currentPath.includes('/shops')) {
      return 2; // Games page
    } else if (currentPath.includes('/categories')) {
      return 3; // Games page
    } else if (currentPath.includes('/news')) {
      return 4; // Games page
    }
    // Add more conditions for other routes if needed
    return -1; // Default or no match
  }

}
