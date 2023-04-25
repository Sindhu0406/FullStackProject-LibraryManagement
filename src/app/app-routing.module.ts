import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { CreateBookrecordsComponent } from './create-bookrecords/create-bookrecords.component';
import { UpdateBookdetailsComponent } from './update-bookdetails/update-bookdetails.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { LoginComponent } from './login/login.component';
import { SigupComponent } from './sigup/sigup.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { FeedbackComponent } from './feedback/feedback.component';
const routes: Routes = [
// there are the path for the sub components and we are importing the respective components
  {path: 'books', component: BooklistComponent,canActivate:[AuthGaurdService]},
  {path: 'create-book', component: CreateBookrecordsComponent,canActivate:[AuthGaurdService]},
  {path: '', redirectTo:'login', pathMatch: 'full'}, 
  {path: 'update-book/:id', component: UpdateBookdetailsComponent,canActivate:[AuthGaurdService]},
  {path: 'book-details/:id', component: BookDetailsComponent,canActivate:[AuthGaurdService]},
  {path: 'booklist/:id', component: BooklistComponent,canActivate:[AuthGaurdService]},
  {path: 'login', component: LoginComponent},
  {path: 'sigup', component: SigupComponent},
  {path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService]},
  {path: 'profile', component: ProfileComponent,canActivate:[AuthGaurdService]},
  {path:'feedback', component: FeedbackComponent,canActivate:[AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
