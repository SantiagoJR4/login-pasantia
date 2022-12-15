import { NgModule } from '@angular/core';
import { FormacionAcademicaComponent } from './pages/formacion-academica/formacion-academica.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { StepsComponent } from './pages/steps/steps.component';
import { FormacionComplementariaComponent } from './pages/formacion-complementaria/formacion-complementaria.component';
import { ExperienciaLaboralComponent } from './pages/experiencia-laboral/experiencia-laboral.component';
import { HojavidaRoutingModule } from './hojavida-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { ExperienciaDocenteComponent } from './pages/experiencia-docente/experiencia-docente.component'
@NgModule({
  declarations: [
    FormacionAcademicaComponent,
    StepsComponent,
    FormacionComplementariaComponent,
    ExperienciaLaboralComponent,
    ExperienciaDocenteComponent
  ],
  imports: [
    PrimeNgModule,
    HojavidaRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class HojavidaModule { }
