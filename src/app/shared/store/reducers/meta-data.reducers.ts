import {Beneficariary, Implementer, ProjectCategory, Status} from '../../models';
import {ActivityCategory} from '../../models/activity-category';
import {Kebele} from '../../models/kebele';
import {Cluster} from '../../models/cluster';
import {Currency} from '../../models/currency';
import {DisaggregationMethod} from '../../models/disaggregation_method';
import {ExpenditureCategory} from '../../models/expenditure-category';
import {Frequency} from '../../models/frequency';
import {MeasuringUnit} from '../../models/measuring-unit';
import {TimePlan} from '../../models/time-plan';
import * as metaAction from '../actions/meta-data.action';
import {metaDataActions} from '../actions/meta-data.action';
export interface State {
  loading: boolean;
  loaded: boolean;
  failed: boolean;
  beneficiaries: Beneficariary[];
  activity_categories: ActivityCategory[];
  kebeles: Kebele[];
  implementers: Implementer[];
  clusters: Cluster[];
  currencies: Currency[];
  disaggregation_methods: DisaggregationMethod[];
  expenditure_categories: ExpenditureCategory[];
  frequencies: Frequency[];
  measuring_units: MeasuringUnit[];
  project_categories: ProjectCategory[];
  statuses: Status[];
  time_plans: TimePlan[];
}
const INITIALSTATE: State = {
  loading: false,
  loaded: false,
  failed: false,
  beneficiaries: [],
  activity_categories: [],
  kebeles: [],
  implementers: [],
  clusters: [],
  currencies: [],
  disaggregation_methods: [],
  expenditure_categories: [],
  frequencies: [],
  measuring_units: [],
  project_categories: [],
  statuses: [],
  time_plans: []
};

export function reducer(state = INITIALSTATE, action: metaDataActions) {
  switch (action.type) {
    case metaAction.metaDataActionTypes.LoadSuccess:
      return {...state,
        loading: false,
        loaded: true,
        failed: false,
        beneficiaries: action.payload.beneficiaries,
        activity_categories: action.payload.activity_categories,
        kebeles: action.payload.kebeles,
        implementers: action.payload.implementers,
        clusters: action.payload.clusters,
        currencies: action.payload.currencies,
        disaggregation_methods: action.payload.disaggregation_methods,
        expenditure_categories: action.payload.expenditure_categories,
        frequencies: action.payload.frequencies,
        measuring_units: action.payload.measuring_units,
        project_categories: action.payload.project_categories,
        statuses: action.payload.statuses,
        time_plans: action.payload.time_plans
      };
    default:
      return state;
  }
}

export const getTimePlans = (state: State) => state.time_plans;
export const getKebeles = (state: State) => state.kebeles;
export const getImplementers = (state: State) => state.implementers;
export const getActivityCategories = (state: State) => state.activity_categories;
export const getStatuses = (state: State) => state.statuses;
