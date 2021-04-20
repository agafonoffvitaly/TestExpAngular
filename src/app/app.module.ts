import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { AddEditAutComponent } from './author/add-edit-aut/add-edit-aut.component';
import { ShowAutComponent } from './author/show-aut/show-aut.component';
import { GenresComponent } from './genres/genres.component';
import { AddEditGenComponent } from './genres/add-edit-gen/add-edit-gen.component';
import {SharedService} from './shared.service';
import { ShowGenComponent } from './genres/show-gen/show-gen.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    AddEditAutComponent,
    ShowAutComponent,
    GenresComponent,
    AddEditGenComponent,
    ShowGenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
