import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardUserComponent } from './card-user/card-user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'card', component: CardUserComponent},
  {path: 'users', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
