import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const SET_IMAGE = 'SET_PREVIEW';

const initialState = {
  preview: null,
  file: null,
};

const setImage = createAction(SET_IMAGE, (preview, file) => ({
  preview,
  file,
}));

export default handleActions(
  {
    [SET_IMAGE]: (state, action) =>
      produce(state, draft => {
        draft.preview = action.payload.preview;
        draft.file = action.payload.file;
      }),
  },
  initialState,
);

export const imageActions = {
  setImage,
};
