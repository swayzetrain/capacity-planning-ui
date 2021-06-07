import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Constants } from '../constants/constants';
import { TeamMember } from '../models/team-member';
import { TeamsService } from '../services/teams-service';
import { TeamMemberDialogComponent } from '../team-member-dialog/team-member-dialog.component';

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
  roles:string[] = Constants.roles;

  constructor(private teamsService:TeamsService, private route: ActivatedRoute, private createTeamMemberDialog: MatDialog) { }

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

  onTeamMemberNameBlurEvent(event: any, teamMember:TeamMember, t: number) {
    if(event.srcElement.innerText !== teamMember.name) {
      this.teamMembers[t].name = event.srcElement.innerText;

      const patchNameTeamMember: Partial<TeamMember> = {};
      patchNameTeamMember.name = event.srcElement.innerText;

      this.teamsService.updateTeamMember(this.teamId, teamMember.teamMemberId, patchNameTeamMember)
        .subscribe(data => console.log(data));
    }
  }

  changeRole(event:any, teamMember:TeamMember) {
    const patchRoleTeamMember: Partial<TeamMember> = {};
    patchRoleTeamMember.role = event.target.value;

    this.teamsService.updateTeamMember(this.teamId, teamMember.teamMemberId, patchRoleTeamMember)
      .subscribe(data => console.log(data));
  }

  openCreateTeamMemberDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {};

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.createTeamMemberDialog.open(TeamMemberDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if(result!==undefined) {
        this.createTeamMember(result.name, result.role);
      }
    });
  }

  createTeamMember(name:string, role:string) {
    const patchRoleTeamMember: Partial<TeamMember> = {};
    patchRoleTeamMember.name = name;
    patchRoleTeamMember.role = role;

    this.teamsService.createTeamMember(this.teamId, patchRoleTeamMember)
      .subscribe(data => console.log(data));

      location.reload();
  }

}
