import { TabsPage } from './tabs.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadChildren: '../discover/discover.module#DiscoverPageModule'
          }
        ]
      },
      {
        path: 'essentials',
        children: [
          {
            path: '',
            loadChildren: '../essentials/essentials.module#EssentialsPageModule'
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../profile/profile.module#ProfilePageModule'
          }
        ]
      }
    ]
  },

  {
    path: '',
    redirectTo: '/tabs/essentials',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
