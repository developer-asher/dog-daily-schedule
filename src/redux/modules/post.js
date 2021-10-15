import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import apis from '../../shared/apis';

const SET_POST = 'SET_POST';
const ADD_POST = 'ADD_POST';

const setPost = createAction(SET_POST, post_list => ({ post_list }));
const addPost = createAction(ADD_POST, post => ({ post }));

const initialState = {
  list: [],
};

const initialPost = {
  postid: 0,
  username: '조성민',
  date: '2021-10-11 15:51',
  title: '댕댕이의 하루일과',
  imageurl:
    'https://t1.daumcdn.net/liveboard/holapet/0e5f90af436e4c218343073164a5f657.JPG',
  content: '콘텐츠 내용이야',
};

const getPostDB = () => {
  return (dispatch, getState, { history }) => {
    apis
      .getContentPost()
      .then(res => {
        console.log(res);
        // const post_list = res.data;
        // dispatch(setPost(post_list));
      })
      .catch(err => {
        console.error(err);
      });
  };
};
const addPostDB = post => {
  return (dispatch, getState, { history }) => {
    console.log(post);

    apis
      .addContentPost(post)
      .then(res => {
        console.log(res);
        // const post_list = res.data;
        // dispatch(setPost(post_list));
      })
      .catch(err => {
        console.error(err);
      });
  };
};

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, draft => {
        draft.list = action.payload.list;
      }),

    [ADD_POST]: (state, action) => produce(state, draft => {}),
  },
  initialState,
);

export const postActions = {
  setPost,
  addPost,
  addPostDB,
  getPostDB,
};
