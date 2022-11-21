import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfazComponent } from './pages/interfaz/interfaz.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    InterfazComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[
    InterfazComponent
  ]
})
export class LoginModule { }
