import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubUserCardComponent } from './component/github-user-card/github-user-card.component';
import { UserPageComponent } from './page/user-page/user-page/user-page.component';
import { SearchPageComponent } from './page/search-page/search-page/search-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LanguageCardComponent } from './component/language-card/language-card.component';
import { PersonalInformationCardComponent } from './component/personal-information-card/personal-information-card.component';

@NgModule({
  declarations: [AppComponent, GithubUserCardComponent, UserPageComponent, SearchPageComponent, LanguageCardComponent, PersonalInformationCardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
