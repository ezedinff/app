import {ProjectCategory, ProjectDetail, Program, Beneficariary, Implementer, Outcome, Activity, Status} from './index';
import {ProjectAttributes} from './model attributes/model-attributes';
<<<<<<< HEAD
import {Team} from './team';
=======
>>>>>>> 673aec5b843245a586238e95924ad5e973d86ccb

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
  teams: Team[];
  created_at: string;
  updated_at: string;
}
