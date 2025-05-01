import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    { path : '',component : HomeComponent,},
    { path:'recipes',component: RecipeListComponent,},
    { path:'details', component: RecipeDetailComponent,},
    {path:'login', component: LoginComponent,},
    {path : 'signup', component:SignupComponent}

];
