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
      return 0;
    } else if (currentPath.includes('/games')) {
      return 1;
    } else if (currentPath.includes('/shops')) {
      return 2;
    } else if (currentPath.includes('/categories')) {
      return 3;
    } else if (currentPath.includes('/news')) {
      return 4;
    } else if (currentPath.includes('/game-of-the-day')) {
      return 5;
    } else if (currentPath.includes('/sales')) {
      return 6;
    } else if (currentPath.includes('/carousel')) {
      return 7;
    }
    // Add more conditions for other routes if needed
    return -1; // Default or no match
  }

}
