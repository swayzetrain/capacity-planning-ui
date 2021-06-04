import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { FooterComponent } from './components/footer.component';
import { HeaderComponent } from './components/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamMembersComponent } from './team-members/team-members.component';
import { TeamMemberCapacityComponent } from './team-member-capacity/team-member-capacity.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    TeamMembersComponent,
    TeamMemberCapacityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
