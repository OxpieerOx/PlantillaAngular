import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { LayoutsComponent } from './layouts.component';
import { PersonaComponent } from './persona/persona.component';

const routes: Routes = [
{
  path: '', component: LayoutsComponent,
  children: [
      { path: 'persona' , component:PersonaComponent},
      { path: 'categoria' , component:CategoriaComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
