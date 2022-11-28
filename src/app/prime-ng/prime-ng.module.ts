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
import {StepsModule} from 'primeng/steps';
import {ToastModule} from 'primeng/toast';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {AvatarModule} from 'primeng/avatar';

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
    DividerModule,
    StepsModule,
    ToastModule,
    RadioButtonModule,
    DropdownModule,
    DividerModule,
    FileUploadModule,
    HttpClientModule,
    CheckboxModule,
    TableModule,
    CalendarModule,
    AvatarModule
  ]
})
export class PrimeNgModule { }
