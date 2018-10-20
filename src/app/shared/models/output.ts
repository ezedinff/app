import {Indicator} from './indicator';
import {Activity} from './activity';

export interface Output {
  id: number;
  name: string;
  outputs: Output[];
  indicators: Indicator[];
  activities: Activity[];
}
