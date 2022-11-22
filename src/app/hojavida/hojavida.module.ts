import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormacionAcademicaComponent } from './pages/formacion-academica/formacion-academica.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { StepsComponent } from './pages/steps/steps.component';

@NgModule({
  declarations: [
    FormacionAcademicaComponent,
    StepsComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class HojavidaModule { }
