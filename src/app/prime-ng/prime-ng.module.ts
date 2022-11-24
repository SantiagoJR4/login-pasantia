import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//PrimeNg

import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {StepsModule} from 'primeng/steps';
import {ToastModule} from 'primeng/toast';
import {RadioButtonModule} from 'primeng/radiobutton';

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
    StepsModule,
    ToastModule,
    RadioButtonModule
  ]
})
export class PrimeNgModule { }
