import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //lazy loaded products module
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  //redirect to all products page when load the app
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  //page-not-found
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
