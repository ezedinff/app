import {ProjectCategory, ProjectDetail, Program, Beneficariary, Implementer, Outcome, Activity, Status} from './index';
import {ProjectAttributes} from './model attributes/model-attributes';

export interface Project {
  id: number;
  attributes: ProjectAttributes;
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
