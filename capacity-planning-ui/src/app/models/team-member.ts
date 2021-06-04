import { TeamMemberCapacity } from "./team-member-capacity";

export interface TeamMember {
    teamMemberId: string;
    name: string;
    role: string;
    teamMemberCapacity: TeamMemberCapacity[];
    createdDate: Date;
    modifiedDate: Date;
}