import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { UcsTableComponent } from './ucs-table/ucs-table.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    UcsTableComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    UcsTableComponent
  ]
})
export class SharedModule { }
