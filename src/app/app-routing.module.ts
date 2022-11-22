import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormacionAcademicaComponent } from './hojavida/pages/formacion-academica/formacion-academica.component';
import { StepsComponent } from './hojavida/pages/steps/steps.component';
import { InterfazComponent } from './login/pages/interfaz/interfaz.component';

const routes: Routes = [
  {path:'login', component:InterfazComponent},
  {path:'hojavida', component:StepsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
