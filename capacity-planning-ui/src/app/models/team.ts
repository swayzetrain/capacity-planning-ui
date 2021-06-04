import { TeamMember } from "./team-member";


export interface Team {
    teamId: string;
    name: string;
    teamMembers: TeamMember[];
    createdDate: Date;
    modifiedDate: Date;
}