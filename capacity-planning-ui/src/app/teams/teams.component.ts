import { Component, OnInit } from '@angular/core';
import { Team } from '../models/Team';
import { TeamsService } from '../services/teams-service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: Team[] = [];

  constructor(private teamsService:TeamsService) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    this.teamsService.getTeams()
    .subscribe(teams =>
      this.teams = teams);
  }

}
