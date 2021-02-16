import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [AppComponent, RegistrationComponent, UpdateComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
