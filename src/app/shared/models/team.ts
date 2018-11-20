import {TeamMember} from './team-member';

export interface Team {
  id: number;
  name: string;
  project_id: number;
  user_id: number;
  members: TeamMember[];
}
