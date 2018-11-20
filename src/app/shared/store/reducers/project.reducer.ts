import {Project} from '../../models';
import {ProjectActions, projectActionTypes} from '../actions/project.action';
import {team} from '../index';

export interface State {
  loading: boolean;
  loaded: boolean;
  failed: boolean;
  message: string;
  error: string;
  selectedProjectId: number;
  selectedTeamId: number;
  projects: Project[];
}

const INITIAL_STATE: State = {
  loading: false,
  loaded: false,
  failed: false,
  message: null,
  error: null,
  selectedProjectId : 0,
  selectedTeamId : 0,
  projects: [] // TODO use the indexed db to initialize the initial state
};

export function reducer(state = INITIAL_STATE, action: ProjectActions): State {
  switch (action.type) {
    case projectActionTypes.LoadSuccess:
      return { ...state, selectedProjectId: 0,
        failed: false,
        loaded: false, loading: false, error: null, message: null, projects: action.payload};
    case projectActionTypes.EraseMessage:
      return {...state, error: null, message: null};
    case projectActionTypes.SetselectedProjectId:
      return {...state, selectedProjectId: action.payload};
    case projectActionTypes.CreateOutcomeSuccess:
      const project = state.projects.find(p => p.id === state.selectedProjectId);
      Object.assign(project, Object.assign(project.outcomes, action.payload));
      const projects = state.projects.map(p => p.id === state.selectedProjectId ? project : p);
      return {...state, loaded: true,
        loading: false, error: null,
        message: '[Outcome] Outcome saved successfully' , failed: false, projects: projects};
    case projectActionTypes.CreateOutcomeFailed:
      return {...state, loading: false, failed: true, loaded: false, error: `[Outcome] ${action.payload}`, message: null};
    case projectActionTypes.UpdateOutcomeSuccess:
      const pro = state.projects.find(p => p.id === state.selectedProjectId);
      Object.assign(pro, Object.assign(pro.outcomes, action.payload));
      const pros = state.projects.map(p => p.id === state.selectedProjectId ? pro : p);
      return {...state, loaded: true,
        loading: false, error: null,
        message: '[Outcome] Outcome updated successfully' , failed: false, projects: pros};
    case projectActionTypes.CreateOutputSuccess:
      return state;
    case projectActionTypes.SetSelectedTeamId:
      return {...state, selectedTeamId: action.payload};
    default:
      return state;
  }
}

export const getProjects = (state: State) => state.projects;
export const getCurrentSelectedId = (state: State) => state.selectedProjectId;
export const getCurrentProject = (state: State) => state.projects.filter(project =>
  project.id === state.selectedProjectId);
export const getTeams = (state: State) => state.projects.map(project => project.teams);
export const getSelectedTeamId = (state: State) => state.selectedTeamId;
export const getTeam = (state: State) =>
  state.projects.map(project => {
    let temp = [];
    for (let i = 0; i < project.teams.length; i++) {
      temp = temp.concat(project.teams[i]);
    }
  //  console.log(temp.find(t  => t.id == state.selectedTeamId));
    return temp.find(te  => te.id == state.selectedTeamId);
  });
