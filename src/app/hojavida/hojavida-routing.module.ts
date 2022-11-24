import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormacionAcademicaComponent } from './pages/formacion-academica/formacion-academica.component';
import { FormacionComplementariaComponent } from './pages/formacion-complementaria/formacion-complementaria.component';
import { ExperienciaLaboralComponent } from './pages/experiencia-laboral/experiencia-laboral.component';
import { StepsComponent } from './pages/steps/steps.component';

const routes:Routes=[
  { path: '', component:StepsComponent, children:[
    {path:'formAcad', component:FormacionAcademicaComponent},
    {path:'formComp', component:FormacionComplementariaComponent},
    {path:'expLaboral', component:ExperienciaLaboralComponent},
    {path:'**', redirectTo:''}
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class HojavidaRoutingModule { }
