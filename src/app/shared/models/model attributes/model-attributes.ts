import {BaseElement} from '../BaseElement';
<<<<<<< HEAD
=======
import {Implementer} from '../implementer';
>>>>>>> 673aec5b843245a586238e95924ad5e973d86ccb

export interface OutcomeAttributes {
  id?: number;
  project_id: number;
  type_id: string;
  name: string;
  description?: string;
  parent_id: number;
}
export interface ProjectAttributes {
  name: string;
  program_id: number;
  project_category_id: number;
  description?: string;
  featured: boolean;
  status_id: number;
  created_at: string;
  updated_at: string;
}
export interface OutputAttributes {
  id?: number;
  name: string;
  description?: string;
  type_id: number;
  outcome_id: number;
  parent_id: number;
}
<<<<<<< HEAD
=======
export interface ActivityAttributes {
  id?: number;
  name: string;
  description: string;
  output_id: number;
  created_at: string;
  updated_at: string;
  status: string;
  featured: boolean;
  category_id: number;
  kebele_id: number;
  start_date: string;
  end_date: string;
  implementing_partners: Implementer[];
}
>>>>>>> 673aec5b843245a586238e95924ad5e973d86ccb
export interface FormAttributes {
  form_name: string;
  form_elements: BaseElement[];
  user_id: number;
}
