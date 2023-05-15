import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPreviewComponent } from './preview-component/form-preview/form-preview.component';
import { FormEditComponent } from './components/form-edit/form-edit.component';
import { NavberComponent } from './navber/navber.component';
import { FormLayoutComponent } from './form-layout.component';


const routes: Routes = [
  { 
    path: '', component: FormLayoutComponent,
    children: [
      { path: '', component: FormEditComponent },
    ]
  },
  { path: 'form-preview', component: FormPreviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainFormRoutingModule { }
