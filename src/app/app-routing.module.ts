import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LineaComponent} from './components/linea/linea.component';
import {BarrasComponent} from './components/barras/barras.component';
import {DonaComponent} from './components/dona/dona.component';
import {RadarComponent} from './components/radar/radar.component';
import {PastelComponent} from './components/pastel/pastel.component';

const routes: Routes = [
  { path:'linea', component: LineaComponent },
  { path:'barra', component: BarrasComponent },
  { path:'dona', component: DonaComponent },
  { path:'radar', component: RadarComponent },
  { path:'pastel', component: PastelComponent },
  { path:'**', pathMatch:'full', redirectTo: 'linea'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
