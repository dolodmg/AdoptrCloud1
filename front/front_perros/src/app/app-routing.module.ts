import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { PerrosComponent } from './perros/perros.component';
import { FormpublicacionComponent } from './perros/formpublicacion/formpublicacion.component';

const routes: Routes = [
  { path: 'publicacion', component: PublicacionComponent },
  { path: '', component: PublicacionComponent },
  { path: 'verperros', component: PerrosComponent }, //Testing
  { path: 'agregarperro', component: FormpublicacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
