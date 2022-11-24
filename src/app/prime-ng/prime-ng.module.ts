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
import {DropdownModule} from 'primeng/dropdown';
import {DividerModule} from 'primeng/divider';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {CheckboxModule} from 'primeng/checkbox';

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
    RadioButtonModule,
    DropdownModule,
    DividerModule,
    FileUploadModule,
    HttpClientModule,
    CheckboxModule
  ]
})
export class PrimeNgModule { }
