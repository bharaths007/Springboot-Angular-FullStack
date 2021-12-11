import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentFormComponent } from './apartment-form/apartment-form.component';
import { ApartmentListComponent } from './apartment-list/apartment-list.component';


const routes: Routes = [
  { path: 'apartments', component: ApartmentListComponent },
  { path: 'add', component: ApartmentFormComponent },
  { path: 'update', component: ApartmentFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



