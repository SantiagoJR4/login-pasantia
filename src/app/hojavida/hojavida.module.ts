import { NgModule } from '@angular/core';
import { FormacionAcademicaComponent } from './pages/formacion-academica/formacion-academica.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { StepsComponent } from './pages/steps/steps.component';
import { FormacionComplementariaComponent } from './pages/formacion-complementaria/formacion-complementaria.component';
import { ExperienciaLaboralComponent } from './pages/experiencia-laboral/experiencia-laboral.component';
import { HojavidaRoutingModule } from './hojavida-routing.module';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common'
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FormacionAcademicaComponent,
    StepsComponent,
    FormacionComplementariaComponent,
    ExperienciaLaboralComponent
  ],
  imports: [
    PrimeNgModule,
    HojavidaRoutingModule,
    FormsModule,
    CommonModule,
    SharedModule
  ]
})
export class HojavidaModule { }
