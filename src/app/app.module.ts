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
import { CoreInformationCardComponent } from './component/core-information-card/core-information-card.component';
import { AchievementCardComponent } from './component/achievement-card/achievement-card.component';
import { ContributionCardComponent } from './component/contribution-card/contribution-card.component';
import { ActivityHistoryCardComponent } from './component/activity-history-card/activity-history-card.component';
import { ActivityCardComponent } from './component/activity-card/activity-card.component';
import { LoaderComponent } from './component/loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BadgeInfoCardComponent } from './component/badge-info-card/badge-info-card.component';
import { BadgesPageComponent } from './page/badges-page/badges-page.component';
import { EarnedCardComponent } from './component/earned-card/earned-card.component';
import { EarnedPageComponent } from './page/earned-page/earned-page.component';
import { AppHeaderComponent } from './component/app-header/app-header.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubUserCardComponent,
    UserPageComponent,
    SearchPageComponent,
    LanguageCardComponent,
    PersonalInformationCardComponent,
    CoreInformationCardComponent,
    AchievementCardComponent,
    ContributionCardComponent,
    ActivityHistoryCardComponent,
    ActivityCardComponent,
    LoaderComponent,
    BadgeInfoCardComponent,
    BadgesPageComponent,
    EarnedCardComponent,
    EarnedPageComponent,
    AppHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
