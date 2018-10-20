export interface Milestone {
  id: number;
  name: string;
  start: string;
  end: string;
  baseline: number;
  target: number;
  actual: number;
  budget: number;
  percentComplete: number;
}
