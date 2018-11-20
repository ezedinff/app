import {Indicator} from './indicator';
import {Output} from './output';
import {OutcomeAttributes} from './model attributes/model-attributes';

export interface Outcome {
  id: number;
  attributes: OutcomeAttributes;
  outcomes: Outcome[];
  indicators: Indicator[];
  outputs: Output[];
}
