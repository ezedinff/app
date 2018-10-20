export interface Indicator {
  id: number;
  name: string;
  description: string;
  indicator_type: string;
  measuring_unit: string;
  frequency: string;
  baseline: number;
  source: string;
  target: number;
  is_total: boolean;
  created_at: string;
  updated_at: string;
}
