import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { IndexComponent } from './components/views/index/index.component';
import { EditComponent } from './components/views/edit/edit.component';
import { ErrorComponent } from './components/views/error/error.component';
import { FeedComponent } from './components/views/feed/feed.component';
import { LoginComponent } from './components/views/login/login.component';
import { ProfileComponent } from './components/views/profile/profile.component';
import { SearchComponent } from './components/views/search/search.component';
import { UploadComponent } from './components/views/upload/upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditpostComponent } from './components/views/editpost/editpost.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent,
    EditComponent,
    ErrorComponent,
    FeedComponent,
    LoginComponent,
    ProfileComponent,
    SearchComponent,
    UploadComponent,
    EditpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    MatSelectModule,
     MatButtonModule,
     MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
