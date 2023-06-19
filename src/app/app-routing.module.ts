import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [{
  path: "", component: HeroComponent
}, {
  path: "about-page", component: AboutPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
