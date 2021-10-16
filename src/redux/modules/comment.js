import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import moment from 'moment';
import apis from '../../shared/apis';

const GET_COMMENT = 'GET_COMMENT';
const SET_COMMENT = 'SET_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

const initialState = {
  list: [],
};

const getComment = createAction(GET_COMMENT, comment_list => ({
  comment_list,
}));
const editComment = createAction(EDIT_COMMENT, () => ({}));
const deleteComment = createAction(DELETE_COMMENT, () => ({}));

const getCommentDB = post_id => {
  return function (dispatch, getState, { history }) {
    console.log('댓글 가져오기', post_id);

    apis
      .getCommentPost(post_id)
      .then(res => {
        const comment_list = res.data;

        dispatch(getComment(comment_list));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

const setCommentDB = (post_id, comment) => {
  return function (dispatch, getState, { history }) {
    console.log('댓글 저장하기');

    const user_id = localStorage.getItem('userid');

    const comment_data = {
      postid: post_id,
      userid: user_id,
      comment: comment,
    };

    apis
      .addCommentPost(comment_data, post_id)
      .then(res => {
        const comment_list = res.data;

        dispatch(getComment(comment_list));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

const editCommentDB = comment_id => {
  return function (dispatch, getState, { history }) {
    console.log('댓글 수정하기');

    // apis
    //   .editCommentPost(comment_id)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };
};

const deleteCommentDB = (post_id, comment_id) => {
  return function (dispatch, getState, { history }) {
    console.log('댓글 삭제하기');
    // console.log('코멘트 아이디:', comment_id);

    apis
      .deleteCommentPost(post_id, comment_id)
      .then(res => {
        console.log(res);
        // const comment_list = res.data;

        // dispatch(getComment(comment_list));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export default handleActions(
  {
    [GET_COMMENT]: (state, action) =>
      produce(state, draft => {
        draft.list = action.payload.comment_list;
      }),
  },
  initialState,
);

export const commentActions = {
  getCommentDB,
  setCommentDB,
  editCommentDB,
  deleteCommentDB,
};
