import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { EditComponent } from './pages/edit/edit.component';
import { guardGuard } from './services/guard.guard';

const routes: Routes = [
  {
    path: "" , 
    //canActivate: [guardGuard],
    component: HomeComponent
  },
  {
    path: "login", 
    component:LoginComponent
  },
  {
    path: "edit",
    canActivate: [guardGuard],
    component:EditComponent  
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
