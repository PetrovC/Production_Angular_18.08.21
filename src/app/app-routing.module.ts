import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { DetailsComponent } from './components/details/details.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path : 'create', component : CreateComponent},
  {path : 'details', component : DetailsComponent},
  {path : 'update', component : UpdateComponent},
  {path : '**', redirectTo : 'details'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
