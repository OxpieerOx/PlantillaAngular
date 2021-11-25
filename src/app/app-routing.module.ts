import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutsRoutingModule } from './layouts/layouts-routing.module';
import { LayoutsComponent } from './layouts/layouts.component';

const routes: Routes = [

  
    {path:'',redirectTo:'',pathMatch:'full'},
    {path:'**',redirectTo:'',pathMatch:'full'},
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  LayoutsRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
