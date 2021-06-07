import { HelloActions } from '../actions/hello.actions';

const initialState = {
  text: 'Hello World',
};

function helloReducer(state = initialState, action) {
  switch (action.type) {
    case HelloActions.updateText.type: {
      return { ...state, text: `Hello World ${new Date().toJSON()}` };
    }
    default: {
      return state;
    }
  }
}

export function reducer(state, action) {
  return helloReducer(state, action);
}
