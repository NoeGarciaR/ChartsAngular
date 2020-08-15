import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LineaComponent} from './components/linea/linea.component';

const routes: Routes = [
  { path:'linea', component: LineaComponent },
  { path:'**', pathMatch:'full', redirectTo: 'linea'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
