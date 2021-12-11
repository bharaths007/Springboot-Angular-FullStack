import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApartmentListComponent } from './apartment-list/apartment-list.component';
import { ApartmentFormComponent } from './apartment-form/apartment-form.component';
import { ApartmentServiceService } from './apartment-service.service';


@NgModule({
  declarations: [
    AppComponent,
    ApartmentListComponent,
    ApartmentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ApartmentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }






