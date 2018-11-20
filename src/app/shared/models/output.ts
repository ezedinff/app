import {Indicator} from './indicator';
import {Activity} from './activity';
import {OutputAttributes} from './model attributes/model-attributes';

export interface Output {
  id: number;
  attributes: OutputAttributes;
  outputs: Output[];
  indicators: Indicator[];
  activities: Activity[];
}
