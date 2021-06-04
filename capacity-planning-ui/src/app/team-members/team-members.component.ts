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

  headers:string[] = ['Name', 'Role', 'Capacity', 'Created Date', 'Modified Date'];

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

}
