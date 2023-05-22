import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'sidebar-userbox',
  templateUrl: './sidebar-userbox.component.html',
  styleUrls: ['./sidebar-userbox.component.scss']
})
export class SidebarUserboxComponent implements OnInit {

  @ViewChild('toggleMenuSec') toggleMenuSec: ElementRef | any;
  @ViewChild('toggleButton') toggleButton: ElementRef | any;
  @ViewChild('menuOpt') menuOpt: ElementRef | any;

  public isUserMenuOpen: boolean = false;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      /**
       * Only run when toggleButton is not clicked
       * If we don't check this, all clicks (even on the toggle button) gets into this
       * section which in the result we might never see the menu open!
       * And the menu itself is checked here, and it's where we check just outside of
       * the menu and button the condition abbove must close the menu
       */
      if (e.target !== this.toggleButton.nativeElement && e.target !== this.menuOpt.nativeElement) {
        this.isUserMenuOpen = false;
      }
    });
  }

  ngOnInit(): void {
  }

  toogleMenuBtn = () => {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

}
