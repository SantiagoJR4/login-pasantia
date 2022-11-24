import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfazComponent } from './pages/interfaz/interfaz.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InterfazComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule
  ],
  exports:[
    InterfazComponent
  ]
})
export class LoginModule { }
