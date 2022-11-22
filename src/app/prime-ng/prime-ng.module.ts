import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//PrimeNg

import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {ImageModule} from 'primeng/image';

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
    ImageModule
  ]
})
export class PrimeNgModule { }
