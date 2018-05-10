import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule, } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import { DashboardNavbarComponent } from './dashboard-navbar/dashboard-navbar.component';
import { DashboardPlaylistsComponent } from './dashboard-playlists/dashboard-playlists.component';
import { DashboardArrivalsComponent } from './dashboard-arrivals/dashboard-arrivals.component';
import { DashboardComingsoonComponent } from './dashboard-comingsoon/dashboard-comingsoon.component';
import { DashboardMoviesComponent } from './dashboard-movies/dashboard-movies.component';
import { GoTopComponent } from './go-top/go-top.component';
import { DashboardSliderComponent } from './dashboard-slider/dashboard-slider.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupStep1Component } from './signup-step1/signup-step1.component';
import { SignupStep2Component } from './signup-step2/signup-step2.component';
import { SignupStep3Component } from './signup-step3/signup-step3.component';
import { SignupStep4Component } from './signup-step4/signup-step4.component';
import { SignupWelcomeComponent } from './signup-welcome/signup-welcome.component';
import { DashboardAccountComponent } from './dashboard-account/dashboard-account.component';
import { DashboardAccountPaymentComponent } from './dashboard-account-payment/dashboard-account-payment.component';
import { DashboardFavoritesComponent } from './dashboard-favorites/dashboard-favorites.component';
import { DashboardMovieProfileComponent } from './dashboard-movie-profile/dashboard-movie-profile.component';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';

const appRoutes: Routes = [
{path: 'index', component: HomeComponent}, 
{path: 'faq', component:FaqComponent},
{path: 'dashboard-navbar', component:DashboardNavbarComponent},
{path: 'dashboard-home', component:DashboardHomeComponent},
{path: 'dashboard-movies', component:DashboardMoviesComponent},
{path: 'dashboard-playlists', component:DashboardPlaylistsComponent},
{path: 'dashboard-comingsoon', component:DashboardComingsoonComponent},
{path: 'dashboard-arrivals', component:DashboardArrivalsComponent},
{path: 'signup-step1', component:SignupStep1Component},
{path: 'signup-step2', component:SignupStep2Component},
{path: 'signup-step3', component:SignupStep3Component},
{path: 'signup-step4', component:SignupStep4Component},
{path: 'signup-welcome', component:SignupWelcomeComponent},
{path: 'dashboard-account-payment', component:DashboardAccountPaymentComponent},
{path: 'dashboard-favorites', component:DashboardFavoritesComponent},
{path: 'dashboard-movie-profile', component:DashboardMovieProfileComponent},
{path: 'dashboard-account', component:DashboardAccountComponent},
{path: 'dashboard-profile', component:DashboardProfileComponent},
{path: '**', component: NotFoundComponent}

//  {path: 'login', component: }

]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    FaqComponent,
    DashboardNavbarComponent,
    DashboardPlaylistsComponent,
    DashboardArrivalsComponent,
    DashboardComingsoonComponent,
    DashboardMoviesComponent,
    GoTopComponent,
    DashboardSliderComponent,
    DashboardHeaderComponent,
    DashboardHomeComponent,
    NotFoundComponent,
    SignupStep1Component,
    SignupStep2Component,
    SignupStep3Component,
    SignupStep4Component,
    SignupWelcomeComponent,
    DashboardAccountComponent,
    DashboardAccountPaymentComponent,
    DashboardFavoritesComponent,
    DashboardMovieProfileComponent,
    DashboardProfileComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true}) ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
