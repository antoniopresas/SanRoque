import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { LocationComponent } from './components/location/location.component';
import { ContenidoComponent } from './shared/contenido/contenido.component';

const routes: Routes = [
  { path: 'home', component: ContenidoComponent},
  { path: 'about', component: AboutComponent},
  {path: 'location', component: LocationComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
