import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import apis from '../../shared/apis';

const GET_COMMENT = 'GET_COMMENT';
const SET_COMMENT = 'SET_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

const initialState = {
  list: [],
};

const getComment = createAction(GET_COMMENT, () => ({}));
const setComment = createAction(SET_COMMENT, () => ({}));
const editComment = createAction(EDIT_COMMENT, () => ({}));
const deleteComment = createAction(DELETE_COMMENT, () => ({}));

const getCommentFB = post_id => {
  return function (dispatch, getState, { history }) {
    console.log('댓글 가져오기');
  };
};

const setCommentFB = (nick_name, comment) => {
  return function (dispatch, getState, { history }) {
    console.log(nick_name, comment, '댓글 저장하기');
  };
};

const editCommentFB = (post_id, comment_id) => {
  return function (dispatch, getState, { history }) {
    console.log('댓글 수정하기');
  };
};

const deleteCommentFB = (post_id, comment_id) => {
  return function (dispatch, getState, { history }) {
    console.log('댓글 삭제하기');
  };
};

export default handleActions(
  {
    [GET_COMMENT]: (state, action) => produce(state, draft => {}),
  },
  initialState,
);

export const commentActions = {
  getCommentFB,
  setCommentFB,
  editCommentFB,
  deleteCommentFB,
};
