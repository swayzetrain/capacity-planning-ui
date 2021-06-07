import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TeamMember } from '../models/team-member';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private httpClient: HttpClient) { }

  public getTeams(): Observable<any> {

    var url = 'http://localhost:8080/v1/teams'

    return this.httpClient.get(url);
  }

  public getTeam(teamId:string): Observable<any> {

    var url = 'http://localhost:8080/v1/teams/' + teamId;

    return this.httpClient.get(url);

  }

  public getTeamMembers(teamId:string): Observable<any> {

    var url = 'http://localhost:8080/v1/teams/' + teamId + '/members';

    return this.httpClient.get(url);
  }

  public getTeamMemberCapacity(teamId:string, teamMemberId:string): Observable<any> {

    var url = 'http://localhost:8080/v1/teams/' + teamId + '/members/' + teamMemberId + '/capacity';

    return this.httpClient.get(url);

  }

  public updateTeamMember(teamId:string, teamMemberId:string, teamMember:Partial<TeamMember>): Observable<any> {
    
    var url = 'http://localhost:8080/v1/teams/' + teamId + '/members/' + teamMemberId;

    const headers = new HttpHeaders().set('Content-Type','application/json');
    
    return this.httpClient.patch(url, JSON.stringify(teamMember), { 'headers' : headers });

  }

  public createTeamMember(teamId:string, teamMember:Partial<TeamMember>): Observable<any> {
    
    var url = 'http://localhost:8080/v1/teams/' + teamId + '/members';

    const headers = new HttpHeaders().set('Content-Type','application/json');
    
    return this.httpClient.post(url, JSON.stringify(teamMember), { 'headers' : headers });

  }

}