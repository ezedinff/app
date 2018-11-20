import {BaseElement} from '../BaseElement';

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
export interface FormAttributes {
  form_name: string;
  form_elements: BaseElement[];
  user_id: number;
}
