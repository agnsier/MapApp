import { GET_VIEW_PORT, CHANGE_VIEW_PORT } from '../actions/actionTypes';
import { viewPort } from '../utils/viewPort';

const initialState = {
  viewPort: viewPort,
};

function mapReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIEW_PORT:
      return {
        ...state,
        viewPort: viewPort,
      };
    case CHANGE_VIEW_PORT:
      return {
        ...state,
        viewPort: { ...state.viewPort, ...action.viewPort },
      };
    default:
      return state;
  }
}

export { mapReducer };
