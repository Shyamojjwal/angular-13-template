import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SvgIconComponent } from './components';
import { MaterialModule } from './material.module';


const SHARED_MODULES: any = [
  CommonModule,
  FormsModule,
  RouterModule,
  MaterialModule,
  ReactiveFormsModule,
]

const SHARED_COMPONENTS: any = [SvgIconComponent]

@NgModule({
  declarations: [...SHARED_COMPONENTS],
  imports: [...SHARED_MODULES],
  exports: [...SHARED_MODULES, ...SHARED_COMPONENTS]
})
export class SharedModule { }
