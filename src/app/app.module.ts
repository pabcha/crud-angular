import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, 
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatIconModule,
  MatDialogModule,
  MatRadioModule,
  MatSnackBarModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ListComponent } from './list/list.component';
import { FormCreateComponent } from './form-create/form-create.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import { ArticleService } from './shared/article.service';
import { CategoryService } from './shared/category.service';
import { NewCategoryDialogComponent } from './new-category-dialog/new-category-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormCreateComponent,
    ConfirmDialogComponent,
    FormEditComponent,
    NewCategoryDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    AppRoutingModule,
    MatIconModule,
    MatDialogModule,
    MatRadioModule,
    MatSnackBarModule,
  ],
  providers: [ArticleService, CategoryService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent, NewCategoryDialogComponent]
})
export class AppModule { }
