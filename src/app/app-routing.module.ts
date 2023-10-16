import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { guardGuard } from './services/guard.guard';
import { ChisiamoComponent } from './pages/chisiamo/chisiamo.component';
import { ServiceComponent } from './pages/service/service.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { PreventiviComponent } from './pages/preventivi/preventivi.component';
import { PreventivoComponent } from './pages/preventivi/preventivo/preventivo.component';

const routes: Routes = [
  {
    path: "" , 
    //canActivate: [guardGuard],
    component: HomeComponent
  },
  {
    path: "services/:service" , 
    //canActivate: [guardGuard],
    component: ServiceComponent
  },
  {
    path: "chi-siamo",
    //canActivate: [guardGuard],
    component: ChisiamoComponent
  },
  {
    path: "preventivi",
    //canActivate: [guardGuard],
    component: PreventiviComponent,
  },
  /*{
    path: "login", 
    component:LoginComponent
  },
  {
    path: "test",
    //canActivate: [guardGuard],
    component:ServiceComponent  
  },*/
  {
    path: "contatti",
    //canActivate: [guardGuard],
    component:ContattiComponent  
  },
  {path:"**" , redirectTo: "login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  constructor(){
  }
}
