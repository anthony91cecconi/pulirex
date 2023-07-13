import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  {path: "" , component: HomeComponent},
  {path: "login", component:LoginComponent},
  {path: "edit", component:EditComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  constructor(){
    this.allert();
  }
  allert(){
    alert("questo sito è in costruzione, ci dispiace ma non è visitablie");
  }
}
