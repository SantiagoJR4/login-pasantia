import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//PrimeNg

import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {ImageModule} from 'primeng/image';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {DividerModule} from 'primeng/divider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonModule,
    PasswordModule,
    InputTextModule,
    CardModule,
    ImageModule,
    CascadeSelectModule,
    DividerModule
  ]
})
export class PrimeNgModule { }
