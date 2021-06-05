import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamMember } from '../models/team-member';
import { TeamsService } from '../services/teams-service';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent implements OnInit {

  teamId:string = null;
  teamName:string = null;
  teamMembers:TeamMember[] = [];

  enableEdit = false;
  enableEditIndex = null;

  headers:string[] = ['Name', 'Role', 'Capacity', 'Created Date', 'Modified Date'];
  roles:string[] = ['SCRUM', 'REQUIREMENTS_ANALYST', 'DEVELOPER', 'QUALITY_ENGINEER'];

  constructor(private teamsService:TeamsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.setTeamId();
    this.getTeamMembers();
    this.getTeamName();
  }

  setTeamId():void {
    this.teamId = String(this.route.snapshot.paramMap.get('teamId'));
  }

  getTeamMembers(): void {
    this.teamsService.getTeamMembers(this.teamId)
      .subscribe(teamMembers => this.teamMembers = teamMembers);
  }

  getTeamName():void {
    this.teamsService.getTeam(this.teamId)
      .subscribe(team => this.teamName = team.name);
  }

  enableEditMethod(e, i) {
    this.enableEdit = true;
    this.enableEditIndex = i;
    console.log(i, e);
  }

}
