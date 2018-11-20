import * as auth from './reducers/auth.reducer';
import * as project from './reducers/project.reducer';

import {ActionReducer, ActionReducerMap, combineReducers, compose, createFeatureSelector, createSelector} from '@ngrx/store';
import {getUser} from './reducers/auth.reducer';
import {getCurrentProject, getCurrentSelectedId, getProjects, getSelectedTeamId, getTeam, getTeams} from './reducers/project.reducer';
import * as meta from './reducers/meta-data.reducers';
import * as formDesign from './reducers/form-design.reducer';
import * as myForm from './reducers/my-form.reducer';
import {getTimePlans} from './reducers/meta-data.reducers';
import {getCurrentProject, getCurrentSelectedId, getProjects} from './reducers/project.reducer';
import * as meta from './reducers/meta-data.reducers';
import * as formDesign from './reducers/form-design.reducer';
import * as myForm from './reducers/my-form.reducer';
import {getActivityCategories, getImplementers, getKebeles, getStatuses, getTimePlans} from './reducers/meta-data.reducers';
import {Project} from '../models';
import {getCurrentSelectedElement, getElements, getFormName, getupdate} from './reducers/form-design.reducer';
import {getForms, getSelectedFormId} from './reducers/my-form.reducer';
import {Form} from '../models/form';

/**
 * i treat each reducer like database table. this means top
 * level state interface is just a map of keys to inner state types
 */

export interface State {
  authState: auth.State;
  projectState: project.State;
  metaData: meta.State;
  formDesign: formDesign.State;
  myFormDesign: myForm.State;
}


export const reducers: ActionReducerMap<State> = {
  authState: auth.reducer,
  projectState: project.reducer,
  metaData: meta.reducer,
  formDesign: formDesign.reducer,
  myFormDesign: myForm.reducer
};

// creating selectors
const getAuthState = createFeatureSelector('authState');
export const getLoggedUser = createSelector(getAuthState, getUser);

// creating project selectors
const getProjectState = createFeatureSelector('projectState');
export const projects = createSelector(getProjectState, getProjects);
export const currentSeletectedId = createSelector(getProjectState, getCurrentSelectedId);
export const currentProject = createSelector(getProjectState,
  currentSeletectedId, (state: project.State, selectedProjectId) => {
      if (selectedProjectId === 0) {
        return {};
      } else {
        return state.projects !== null ?
          state.projects.find( (p) => p.id === selectedProjectId) : null;
      }
  });
export const teams = createSelector(getProjectState, getTeams);
export const teamId = createSelector(getProjectState, getSelectedTeamId);
export const team = createSelector(getProjectState, getTeam);
export const getMessage = createSelector(getProjectState, (state: project.State) => state.message);
export const getError = createSelector(getProjectState, (state: project.State) => state.error);
// creating meta data selectors
const getMetaDataState = createFeatureSelector('metaData');
export const timeplans = createSelector(getMetaDataState, getTimePlans);
export const kebeles = createSelector(getMetaDataState, getKebeles);
export const implementers = createSelector(getMetaDataState, getImplementers);
export const activity_categories = createSelector(getMetaDataState, getActivityCategories);
export const statuses = createSelector(getMetaDataState, getStatuses);


// creating form design selectors
const getFormDesignState = createFeatureSelector('formDesign');
export const currentSelectedElement = createSelector(getFormDesignState, getCurrentSelectedElement);
export const elements = createSelector(getFormDesignState, getElements);
export const updated = createSelector(getFormDesignState, getupdate);
export const getElement = createSelector(getFormDesignState,
  currentSelectedElement,
  (state: formDesign.State, currentSeletectedId) => {
    if (currentSeletectedId === 0) {
      return {};
    } else {
      return state.elements.length > 0 ? state.elements.find(element => element.id === currentSeletectedId) : {};
    }
  });
export const form_name = createSelector(getFormDesignState, getFormName);


// my form selectors
export const getMyFormState = createFeatureSelector('myFormDesign');
export const forms = createSelector(getMyFormState, getForms);
export const formId = createSelector(getMyFormState, getSelectedFormId);
export const form = createSelector(getMyFormState, formId, (state: myForm.State, selectedFormId) => {
  if (selectedFormId === 0) {
    return {};
  } else {
    return state.forms.length > 0 ? state.forms.find(f => f.id === selectedFormId) : {};
  }
});
