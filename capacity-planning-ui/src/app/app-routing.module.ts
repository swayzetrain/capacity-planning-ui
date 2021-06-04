import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { TeamMemberCapacityComponent } from './team-member-capacity/team-member-capacity.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'teams/:teamId/members', component: TeamMembersComponent},
  { path: 'teams/:teamId/members/:teamMemberId/capacity', component:TeamMemberCapacityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
