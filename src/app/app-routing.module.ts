import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Pages/Authentication/service/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./Pages/Authentication/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./Pages/dashborad/dashborad.module').then(
        (m) => m.DashboradModule
      ),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
