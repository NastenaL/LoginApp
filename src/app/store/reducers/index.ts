import * as fromHello from './hello.reducer';
import * as fromUser from './user.reducer';

// TODO: Check usage and remove unused functionality
export const appReducers = {
  hello: fromHello.reducer,
  user: fromUser.reducer
};
