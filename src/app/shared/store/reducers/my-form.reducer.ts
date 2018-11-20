import {Form} from '../../models/form';
import {MyFormActions, MyFormActionTypes} from '../actions/my-form.action';

export interface State {
  loaded: boolean;
  selectedFormId: number;
  forms: Form[];
}
const INITIAL_STATE: State = {
  loaded: false,
  selectedFormId: 0,
  forms: []
};
export function reducer(state = INITIAL_STATE, action: MyFormActions) {
  switch (action.type) {
    case MyFormActionTypes.CreateFormSuccess:
      const updateForm = Object.assign(state.forms, state.forms.push(action.payload));
      return {...state, loaded: true, forms: updateForm};
    case MyFormActionTypes.CreateFormFailed:
      return {...state, loaded: false};
    case MyFormActionTypes.LoadSuccess:
      return {...state, loaded: true, forms: action.payload};
    case MyFormActionTypes.LoadFail:
      return {...state, loaded: false};
    case MyFormActionTypes.SetSelectedFormId:
      return{...state, selectedFormId: action.payload};
    default:
      return state;
  }
}
export const getForms = (state: State) => state.forms;
export const getSelectedFormId = (state: State) => state.selectedFormId;
