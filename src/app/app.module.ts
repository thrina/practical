import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadImagesService } from './upload-images.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [FormsModule,HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UploadImagesService],
  bootstrap: [AppComponent],
})
export class AppModule { }
