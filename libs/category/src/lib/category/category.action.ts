import { createAction } from '@ngrx/store';

export const getCategoriesActions = createAction(
  '[category] Get Categories'
);

export const categoryActionsSuccess = createAction(
  '[category] Get Categories Success',
  (categories: string[]) => ({ categories })
);

export const categoryActionsFailure = createAction(
  '[category] Get Categories Failure',
  (error: string) => ({ error })
);
