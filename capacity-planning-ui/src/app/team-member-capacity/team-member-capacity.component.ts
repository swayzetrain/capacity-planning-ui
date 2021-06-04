import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamMemberCapacity } from '../models/team-member-capacity';
import { TeamsService } from '../services/teams-service';

@Component({
  selector: 'app-team-member-capacity',
  templateUrl: './team-member-capacity.component.html',
  styleUrls: ['./team-member-capacity.component.css']
})
export class TeamMemberCapacityComponent implements OnInit {

  teamId:string = null;
  teamMemberId:string = null;
  capacityList:TeamMemberCapacity[] = [];

  headers:string[] = ['Hours', 'Date'];

  constructor(private teamsService:TeamsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.setTeamId();
    this.setTeamMemberId();
    this.getTeamMemberCapacity();
  }

  setTeamId():void {
    this.teamId = String(this.route.snapshot.paramMap.get('teamId'));
  }

  setTeamMemberId():void {
    this.teamMemberId = String(this.route.snapshot.paramMap.get('teamMemberId'));
  }

  getTeamMemberCapacity(): void {
    this.teamsService.getTeamMemberCapacity(this.teamId, this.teamMemberId)
      .subscribe(teamMemberCapacity => this.capacityList = teamMemberCapacity);
  }

}
