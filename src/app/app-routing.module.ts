import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularDocumentationComponent } from './angular-documentation/angular-documentation.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { HomeComponent } from './home/home.component';
import { PrimFactorizationComponent } from './prim-factorization/prim-factorization.component';
import { PrimeFactorizationDocumentationComponent } from './prime-factorization-documentation/prime-factorization-documentation.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'prime_factorization', component: PrimFactorizationComponent},
  {path: 'prime_factorization_documentation', component: PrimeFactorizationDocumentationComponent},
  {path: 'angular_documentation', component: AngularDocumentationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
