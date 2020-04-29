import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { LayoutComponent } from './layout/layout.component';
import { NavigationBarComponent } from './layout/navigation-bar/navigation-bar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faCopyright, faDrum, faDatabase, faGuitar } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedinIn, faTelegramPlane, faGithub, faStackOverflow, faPatreon, faJsSquare,
  faHtml5, faCss3Alt, faSass, faAngular, faNodeJs
} from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    LayoutComponent,
    NavigationBarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faLinkedinIn, faTelegramPlane, faGithub, faStackOverflow, faPatreon, faJsSquare, faHtml5,
      faCss3Alt, faSass, faAngular, faNodeJs,
      faEnvelope, faCopyright, faDrum, faDatabase, faGuitar);
  }
}
