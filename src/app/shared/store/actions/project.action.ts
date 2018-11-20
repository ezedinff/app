import {Action} from '@ngrx/store';
import {Outcome, Project} from '../../models';
import {ActivityAttributes, OutcomeAttributes, OutputAttributes} from '../../models/model attributes/model-attributes';
import {Output} from '../../models/output';

export enum projectActionTypes {
  Load = '[Main data] load main application data from server',
  LoadSuccess = '[Main data] application main data successfully loaded',
  LoadFail = '[Main data] application main data failed to load',
  EraseMessage = '[Message]',
  SetselectedProjectId = '[Project] set selected project id',
// start of outcome actions
  CreateOutcome = '[Outcome] create outcome',
  CreateOutcomeSuccess = '[Outcome] create outcome success',
  CreateOutcomeFailed = '[Outcome] create outcome fail',
  UpdateOutcome = '[Outcome] update outcome',
  UpdateOutcomeSuccess = '[Outcome] update outcome success',
  UpdateOutcomeFailed = '[Outcome] update outcome fail',
  DeleteOutcome = '[Outcome] delete outcome', // Todo finish this part
  DeleteOutcomeSuccess = '[Outcome] delete outcome success',
  DeleteOutcomeFailed = '[Outcome] delete outcome fail',
  // start of Output actions
  CreateOutput = '[Output] create',
  CreateOutputSuccess = '[Output] success',
  CreateOutputFailed = '[Output] failed',
  UpdateOutput = '[Output] update',
  UpdateOutputSuccess = '[Output] update success',
  UpdateOutputFailed = '[Output] update failed',
  DeleteOutput = '',
  DeleteOutputSuccess = '',
  DeleteOutputFailed = '',
  CreateActivity = '',
  CreateMilestone= '',
  CreateIndicator= '',
}
export class Load implements Action {
  readonly type = projectActionTypes.Load;
}
export class LoadSuccess implements Action {
  readonly type = projectActionTypes.LoadSuccess;
  constructor(public payload: Project[]) {}
}
export class LoadFail implements Action {
  readonly type = projectActionTypes.LoadFail;
  constructor(public payload: any) {}
}
export class SetselectedProjectId implements Action {
  readonly type = projectActionTypes.SetselectedProjectId;
  constructor(public payload: number) {}
}
// outcome action creators
export class CreateOutcome implements Action {
  readonly type = projectActionTypes.CreateOutcome;
  constructor(public payload: OutcomeAttributes) {}
}
export class CreateOutcomeSuccess implements Action {
  readonly type = projectActionTypes.CreateOutcomeSuccess;
  constructor(public payload: Outcome[]) {} // TODO find a way to update outcomes in single project
}
export class CreateOutcomeFailed implements Action {
  readonly type = projectActionTypes.CreateOutcomeFailed;
  constructor(public payload: string) {}
}
export class UpdateOutcome implements Action {
  readonly type = projectActionTypes.UpdateOutcome;
  constructor(public payload: OutcomeAttributes) {}
}

export class UpdateOutcomeSuccess implements Action {
  readonly type = projectActionTypes.UpdateOutcomeSuccess;
  constructor(public payload: Outcome[]) {} // TODO find a way to update outcomes in single project
}
export class UpdateOutcomeFailed implements Action {
  readonly type = projectActionTypes.UpdateOutcomeFailed;
  constructor(public payload: string) {}
}

export class EraseMessage implements Action {
  readonly type = projectActionTypes.EraseMessage;
}

export class CreateOutput implements Action {
  readonly type = projectActionTypes.CreateOutput;
  constructor(public payload: OutputAttributes) {}
}
export class CreateOutputSuccess implements Action {
  readonly type = projectActionTypes.CreateOutputSuccess;
  constructor(public payload: Outcome[]) {}
}
export class CreateOutputFailed implements Action {
  readonly type = projectActionTypes.CreateOutputFailed;
  constructor(public payload: any) {}
}
export class UpdateOutput implements Action {
  readonly type = projectActionTypes.UpdateOutput;
  constructor(public payload: OutputAttributes) {}
}
export class CreateActivity implements Action {
  readonly type = projectActionTypes.CreateActivity;
  constructor(public payload: ActivityAttributes) {}
}
export class CreateMilestone implements Action {
  readonly type = projectActionTypes.CreateMilestone;
  constructor(public payload: ActivityAttributes) {}
}
export class CreateIndicator implements Action {
  readonly type = projectActionTypes.CreateIndicator;
  constructor(public payload: ActivityAttributes) {}
}
export type ProjectActions = Load
  | LoadSuccess
  | LoadFail
  | EraseMessage
  | SetselectedProjectId
  | CreateOutcome
  | CreateOutcomeSuccess
  | CreateOutcomeFailed
  | UpdateOutcome
  | UpdateOutcomeSuccess
  | UpdateOutcomeFailed
  | CreateOutput
  | CreateOutputSuccess
  | CreateOutputFailed
  | UpdateOutput
  | CreateActivity
  | CreateMilestone
  | CreateIndicator;
