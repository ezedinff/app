import {BaseElement} from '../../models/BaseElement';
import * as formDesignAction from '../actions/form-design.action';
export interface State {
  updated: boolean;
  formName: string;
  currentSelectedId: number;
  elements: BaseElement[];
}
const INITIAL_STATE: State = {
  updated: false,
  formName: 'Form Name',
  currentSelectedId: 0,
  elements: []
};
export function reducer(state = INITIAL_STATE, action: formDesignAction.FormDesignActions): State {
  switch (action.type) {
    case formDesignAction.FormDesignActionTypes.SetCurrentElementId:
      return {...state, currentSelectedId: action.payload};
    case formDesignAction.FormDesignActionTypes.CreateElement:
      return{...state, elements: Object.assign(state.elements, state.elements.push(action.payload))};
    case formDesignAction.FormDesignActionTypes.UpdateElement:
      const updatedElements = state.elements.map(element => element.id === action.payload.id ? action.payload : element);
      return {...state, updated: true, elements: updatedElements};
    case formDesignAction.FormDesignActionTypes.DeleteElement:
      return {...state, elements: state.elements.filter(form => form.id !== action.payload)};
    case formDesignAction.FormDesignActionTypes.UpdateToggle:
      return{...state, updated: !state.updated};
    case formDesignAction.FormDesignActionTypes.UpdateFormName:
      return {...state, formName: action.payload};
    default:
      return state;
  }
}
export const getCurrentSelectedElement = (state: State) => state.currentSelectedId;
export const getElements = (state: State) => state.elements;
export const getupdate = (state: State) => state.updated;
export const getFormName = (state: State) => state.formName;
