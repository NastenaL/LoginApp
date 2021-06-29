import { UserActions } from '../actions/user.actions';

const initialState = {
  text: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case UserActions.createUser.type: {
        return { ...state, text: UserActions.createUser.type };
    }
    case UserActions.signIneUser.type: {
        return { ...state, text: UserActions.signIneUser.type };    
    }
    default: {
      return state;
    }
  }
}

export function reducer(state, action) {
  return userReducer(state, action);
}
