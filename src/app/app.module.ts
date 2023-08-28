import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoComponent } from './components/logo/logo.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { environment } from 'src/environments/environment.development';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './pages/edit/edit.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChisiamoComponent } from './pages/chisiamo/chisiamo.component';
import { HeadImmagesComponent } from './pages/components/head-immages/head-immages.component';
import { GostBakcGroundComponent } from './pages/components/gost-bakc-ground/gost-bakc-ground.component';
import { ServiceComponent } from './pages/service/service.component';
import { SplitTextComponent } from './pages/components/split-text/split-text.component';
import { HeadImmagesEditsComponent } from './pages/edit/head-immages-edits/head-immages-edits.component'
import { HttpClientModule } from '@angular/common/http';
import { MissionComponent } from './pages/components/mission/mission.component';
import { ContattiComponent } from './pages/contatti/contatti.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogoComponent,
    HomeComponent,
    LoginComponent,
    EditComponent,
    FooterComponent,
    ChisiamoComponent,
    HeadImmagesComponent,
    GostBakcGroundComponent,
    ServiceComponent,
    SplitTextComponent,
    HeadImmagesEditsComponent,
    MissionComponent,
    ContattiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
