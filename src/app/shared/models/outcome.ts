import {Indicator} from './indicator';
import {Output} from './output';

export interface Outcome {
  id: number;
  name: string;
  outcomes: Outcome[];
  indicators: Indicator[];
  outputs: Output[];
}
