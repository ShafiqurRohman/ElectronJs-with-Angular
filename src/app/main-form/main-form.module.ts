import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFormRoutingModule } from './main-form-routing.module';
import { ChoiceComponent } from './components/choice/choice.component';
import { TextComponent } from './components/text/text.component';
import { RatingComponent } from './components/rating/rating.component';
import { DateComponent } from './components/date/date.component';
import { FormEditComponent } from './components/form-edit/form-edit.component';
import { FormPreviewComponent } from './preview-component/form-preview/form-preview.component';
import { NavberComponent } from './navber/navber.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from '../material/material.module';
import { FormLayoutComponent } from './form-layout.component';
import { IntertNewItemComponent } from './intert-new-item/intert-new-item.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { ChoicePreviewComponent } from './preview-component/choice-preview/choice-preview.component';
import { DatePreviewComponent } from './preview-component/date-preview/date-preview.component';
import { RattingPreviewComponent } from './preview-component/ratting-preview/ratting-preview.component';
import { TextPreviewComponent } from './preview-component/text-preview/text-preview.component';



@NgModule({
  declarations: [
    ChoiceComponent,
    TextComponent,
    RatingComponent,
    DateComponent,
    FormEditComponent,
    FormPreviewComponent,
    NavberComponent,
    FormLayoutComponent,
    IntertNewItemComponent,
    ChoicePreviewComponent,
    DatePreviewComponent,
    RattingPreviewComponent,
    TextPreviewComponent
  ],
  imports: [
    CommonModule,
    MainFormRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatNativeDateModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule
  ]
})
export class MainFormModule { }
