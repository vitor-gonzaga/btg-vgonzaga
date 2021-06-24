import { Component } from '@angular/core';
import { Imenu } from 'btg-vgonzaga';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mockMenu: Imenu =
    {
      isDarkMode: false,
      menuItems: [
        {
          menuItemName: 'ItemA',
          menuItemRoute: 'routeA',
        },
        {
          menuItemName: 'ItemB',
          menuItemRoute: 'routeB',
        },
        {
          menuItemName: 'ItemC',
          menuItemRoute: 'routeC',
        }
      ]
    };
  title = 'vgonzaga-btg';
}
