import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'messenger', loadChildren: () => import('./pages/messenger/messenger.module').then(m => m.MessengerModule) },
  {path:'',redirectTo:'messenger',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
