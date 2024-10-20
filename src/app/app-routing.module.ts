import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { TeamsComponent } from './teams/teams.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'teams', component: TeamsComponent},
  { path: 'enterprise', component: EnterpriseComponent},
  { path: 'ressources', component: RessourcesComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
