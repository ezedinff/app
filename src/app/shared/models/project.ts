import {ProjectCategory, ProjectDetail, Program, Beneficariary, Implementer, Outcome, Activity, Status} from './index';

export interface Project {
  id: number;
  name: string;
  description: string;
  featured: boolean;
  status: Status;
  category: ProjectCategory;
  details: ProjectDetail;
  program: Program;
  beneficiary: Beneficariary[];
  implementer: Implementer[];
  outcomes: Outcome[];
  activities: Activity[];
  created_at: string;
  updated_at: string;
}
