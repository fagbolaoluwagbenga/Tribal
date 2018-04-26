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

const appRoutes: Routes = [
 { path: '', component: HomeComponent}, 
{path: 'faq', component:FaqComponent},
{path: 'dashboard-navbar', component:DashboardNavbarComponent},
{path: 'dashboard-home', component:DashboardHomeComponent},
{path: 'dashboard-movies', component:DashboardMoviesComponent},
{path: 'dashboard-playlists', component:DashboardPlaylistsComponent},
{path: 'dashboard-comingsoon', component:DashboardComingsoonComponent},
{path: 'dashboard-arrivals', component:DashboardArrivalsComponent},
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true}) ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
