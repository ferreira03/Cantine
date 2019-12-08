import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { UserComponent } from './user/user.component';
import { MenuComponent } from './menu/menu.component';
import { JwtModule } from '@auth0/angular-jwt';
import { MealComponent } from './meal/meal.component';
import { NavComponent } from './nav/nav.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    UserComponent,
    MenuComponent,
    MealComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['localhost:4200'],
      }
    })

  ],
  providers: [AuthService, UserService, JwtModule, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
