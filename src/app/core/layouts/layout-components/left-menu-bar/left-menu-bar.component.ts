import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'left-menu-bar',
  templateUrl: './left-menu-bar.component.html',
  styleUrls: ['./left-menu-bar.component.scss']
})
export class LeftMenuBarComponent implements OnInit {

  public menuItems: Array<any> = [
    {
      title: "Navigation Menu",
      isHeader: true
    },
    {
      title: "Dashboard",
      isHeader: false,
      icon: 'bi bi-sliders2-vertical',
      link: '/'
    },
    {
      title: "Others",
      icon: 'bi bi-arrow-down-right-circle',
      isHeader: false,
      subMenu: [
        {
          title: 'Link - 1',
          link: "/link-1"
        },
        {
          title: 'Link - 2',
          link: "/link-2"
        }
      ]

    }
  ]

  public openMenuIndex: any = null;

  constructor() { }

  ngOnInit(): void {
  }

  toogleSubMenu = (_menuIndex: number) => {
    if(this.openMenuIndex != _menuIndex) {
      this.openMenuIndex = _menuIndex
    } else {
      this.openMenuIndex = null;
    }
  }

}
