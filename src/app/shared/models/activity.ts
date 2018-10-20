import {Output} from './output';
import {Status} from './status';
import {ActivityCategory} from './activity-category';
import {Kebele} from './kebele';
import {Implementer} from './implementer';
import {Indicator} from './indicator';
import {File} from './file';
import {Milestone} from './milestone';
import {MilestoneActualValue} from './milestone-actual-value';

export interface Activity {
  id: number;
  name: string;
  description: string;
  output: Output;
  created_at: string;
  updated_at: string;
  status: Status;
  featured: boolean;
  category: ActivityCategory;
  kebele: Kebele;
  start_date: string;
  end_date: string;
  implementing_partners: Implementer[];
  activities: Activity[];
  indicators: Indicator[];
  files: File[];
  milestones: Milestone[];
  actualValues: MilestoneActualValue[];
}
