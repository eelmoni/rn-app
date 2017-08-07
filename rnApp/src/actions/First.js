import { FIRST_ACTION } from './types';

export const firstAction = (firstAction) => {
  return {
    type: FIRST_ACTION,
    payload: firstAction
  };
}
