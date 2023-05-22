import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private isSideBarExpanded: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toogleSidebar = () => {
    var _el = document.querySelector(".wrapper.sidebar-expanded") as HTMLElement;
    
    this.isSideBarExpanded = !this.isSideBarExpanded;

    setTimeout(() => {
      if(this.isSideBarExpanded) {
        if(_el.classList.contains('sidebar-collapse')) {
          _el.classList.remove('sidebar-collapse')
        }
      } else {
        if(!_el.classList.contains('sidebar-collapse')) {
          _el.classList.add('sidebar-collapse')
        }
      }
    }, 100);
  }

}
