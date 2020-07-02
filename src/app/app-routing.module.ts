import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { HomeComponent} from './home/home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'', component : HomeComponent},
  {path:'about', component : AboutComponent},
  {path:'service', component : ServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
