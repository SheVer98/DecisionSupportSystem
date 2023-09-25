import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FindComponent } from './components/pages/find/find.component';
import { ListComponent } from './components/pages/list/list.component';
import { DrawComponent } from './components/pages/draw/draw.component';
import { SingleComponent } from './components/pages/single/single.component';
import { StatisticsComponent } from './components/pages/statistics/statistics.component';
import { SignComponent } from './components/pages/sign/sign.component';
import { AdminHomeComponent } from './components/pages/admin-home/admin-home.component';
import { AdminFindComponent } from './components/pages/admin-find/admin-find.component';
import { AddComponent } from './components/pages/add/add.component';

const routes: Routes = [
  {path:'lista',component:ListComponent},
  {path:'lista/:searchTerm',component:ListComponent},
  {path:'', component:HomeComponent},
  {path:'znajdz', component:FindComponent},
  {path:'funkcje', component:DrawComponent},
  // {path:'car/:id', component:SingleComponent},
  {path:'admin',component:SignComponent},
  {path:'dane',component:StatisticsComponent},
  {path:'adminHome',component:AdminHomeComponent},
  {path:'adminFind',component:AdminFindComponent},
  {path:'dodaj',component:AddComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
