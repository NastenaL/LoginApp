import * as fromHello from './hello.reducer';
import * as fromUser from './user.reducer';

export const appReducers = {
  hello: fromHello.reducer,
  user: fromUser.reducer
};
