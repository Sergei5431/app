import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';


import { Routes, RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AppserviceService } from './appservice.service';
import { UserComponent } from './users/user/user.component';
import { UnknownsComponent } from './unknowns/unknowns.component';
import { UnknownComponent } from './unknowns/unknown/unknown.component';
import { CardUserComponent } from './card-user/card-user.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UnknownsComponent,
    UnknownComponent,
    CardUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
