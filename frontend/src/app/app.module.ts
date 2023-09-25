import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchComponent } from './components/partials/search/search.component';
import { FindComponent } from './components/pages/find/find.component';
import { ListComponent } from './components/pages/list/list.component';
import { FormsModule } from '@angular/forms';
import { DrawComponent } from './components/pages/draw/draw.component';
import { SingleComponent } from './components/pages/single/single.component';
import { AdminheaderComponent } from './components/partials/adminheader/adminheader.component';
import { StatisticsComponent } from './components/pages/statistics/statistics.component';
import { SignComponent } from './components/pages/sign/sign.component';
import { AdminHomeComponent } from './components/pages/admin-home/admin-home.component';
import { AdminFindComponent } from './components/pages/admin-find/admin-find.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './components/pages/add/add.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    FindComponent,
    ListComponent,
    DrawComponent,
    SingleComponent,
    AdminheaderComponent,
    StatisticsComponent,
    SignComponent,
    AdminHomeComponent,
    AdminFindComponent,
    AddComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
