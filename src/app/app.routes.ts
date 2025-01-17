import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { QuotesgeneratorComponent } from './quotesgenerator/quotesgenerator.component';

export const routes: Routes = [
    {
        path:'',component:LandingPageComponent
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'register',component:RegisterComponent
    },
    {
        path:'quotes',component:QuotesgeneratorComponent
    },
];
