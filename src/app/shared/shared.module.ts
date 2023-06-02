import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SvgIconComponent } from './components';


const SHARED_MODULES: any = [
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule,
  // BrowserAnimationsModule,
]

const SHARED_COMPONENTS: any = [SvgIconComponent]

@NgModule({
  declarations: [...SHARED_COMPONENTS],
  imports: [...SHARED_MODULES],
  exports: [...SHARED_MODULES, ...SHARED_COMPONENTS]
})
export class SharedModule { }
