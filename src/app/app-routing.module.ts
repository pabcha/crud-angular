import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { FormCreateComponent } from './form-create/form-create.component';
import { FormEditComponent } from './form-edit/form-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: 'articles', component: ListComponent }, 
  { path: 'create', component: FormCreateComponent }, 
  { path: 'edit/:id', component: FormEditComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
