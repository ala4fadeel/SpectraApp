import { Component, OnInit } from '@angular/core';
import{ MenuItem} from '../menu-item';
@Component({
  selector: 'app-responsive-toolbar',
  templateUrl: './responsive-toolbar.component.html',
  styleUrls: ['./responsive-toolbar.component.css']
})
export class ResponsiveToolbarComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      label: 'SERVICES',
      icon: 'login',
      url:'/services',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true

    },
    {
      label: 'ABOUT US',
      icon: 'help',
      url:'/about',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true

    },
    {
      label: 'CONTACT',
      icon: 'attach_money',
      url:'/contact',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true

    },
    {
      label: 'OUR TEAM',
      icon: 'notes',
      url:'/team',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true

    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
