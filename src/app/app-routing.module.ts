import { AdminModule } from './lazy-routing/admin/admin.module';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'admin',loadChildren:()=>import('./lazy-routing/admin/admin.module')
    .then(m=> m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
