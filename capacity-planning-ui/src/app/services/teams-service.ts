import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

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

}