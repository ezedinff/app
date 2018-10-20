import {ProgramCategory} from './program-category';
import {ProgramDetail} from './program-detail';

export interface Program {
  id: number;
  name: string;
  description: string;
  details: ProgramDetail;
  category: ProgramCategory;
  allocated_budget: number;
}
