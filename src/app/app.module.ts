import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/user.component';
import { GalleryEffect } from './gallery/user.effect';
import { GalleryService } from './gallery/user.service';
import { galleryReducer } from './store/gallery.reducer';
import { UserInfoComponent } from './gallery/details tab/user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([GalleryEffect]),
    StoreModule.forRoot({ gallery: galleryReducer })
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
