import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import moment from 'moment';
import apis from '../../shared/apis';

const GET_COMMENT = 'GET_COMMENT';
const SET_COMMENT = 'SET_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

const initialState = {
  list: [
    {
      post_id: '123',
      comment_id: '000',
      username: '조성민',
      comment: '헬러우',
      date: '2021-10-13 11:49:00',
    },
    {
      post_id: '123',
      comment_id: '111',
      username: '조성민111',
      comment: '헬러우111',
      date: '2021-10-14 00:49:00',
    },
    {
      post_id: '000',
      comment_id: '222',
      username: '조성민22',
      comment: '헬러우22',
      date: '2021-10-24 09:49:00',
    },
  ],
};

const getComment = createAction(GET_COMMENT, comment_list => ({
  comment_list,
}));
const setComment = createAction(SET_COMMENT, comment_info => ({
  comment_info,
}));
const editComment = createAction(EDIT_COMMENT, () => ({}));
const deleteComment = createAction(DELETE_COMMENT, () => ({}));

const getCommentDB = post_id => {
  return function (dispatch, getState, { history }) {
    console.log('댓글 가져오기', post_id);

    const comment_list = getState().comment.list;
    const sort_list = comment_list
      .filter(list => {
        return list.post_id === post_id;
      })
      .sort((a, b) => {
        if (a.date > b.date) return 1;
        if (a.date < b.date) return -1;
        return 0;
      })
      .reverse();

    dispatch(getComment(sort_list));
  };
};

const setCommentDB = (post_id, comment) => {
  return function (dispatch, getState, { history }) {
    console.log('댓글 저장하기');

    const user_id = localStorage.getItem('userid');

    const comment_data = {
      postId: post_id,
      userid: user_id,
      name: '테스트',
      comment: comment,
    };

    apis
      .addCommentPost(comment_data, post_id)
      .then(res => {
        console.log(res);
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

const deleteCommentDB = comment_id => {
  return function (dispatch, getState, { history }) {
    console.log('댓글 삭제하기');

    // apis
    //   .deleteCommentPost(comment_id)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };
};

export default handleActions(
  {
    [GET_COMMENT]: (state, action) =>
      produce(state, draft => {
        draft.list = action.payload.comment_list;
      }),
    [SET_COMMENT]: (state, action) =>
      produce(state, draft => {
        draft.list.push(action.payload.comment_info);
        draft.list = draft.list
          .sort((a, b) => {
            if (a.date > b.date) return 1;
            if (a.date < b.date) return -1;
            return 0;
          })
          .reverse();
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
