import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './page/search-page/search-page/search-page.component';
import { UserPageComponent } from './page/user-page/user-page/user-page.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: SearchPageComponent,
      },
      {
        path: 'user/' + ':username',
        component: UserPageComponent,
      },
    ],
  },
  // otherwise redirect to error
  // { path: '**', redirectTo: NAVIGATIONS.notFound.url },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
