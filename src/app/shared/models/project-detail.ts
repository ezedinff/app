import {User} from './User';
import {Cluster} from './cluster';

export interface ProjectDetail {
  id: number;
  cluster: Cluster;
  budget: number;
  goal: string;
  objective: string;
  manager1: User;
  manager2: User;
  starting_date: string;
  ending_date: string;
  created_at: string;
}
