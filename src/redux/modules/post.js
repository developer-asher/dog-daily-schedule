import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../modules/axios";

//---- action -----//
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

//---- action creator ----//
const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}));

const initialState = {
  list: [],
}

const initialPost = {
  postid:0,
  username: "조성민",
  date: "2021-10-11 15:51",
  title: "댕댕이의 하루일과",
  imageurl:
    "https://t1.daumcdn.net/liveboard/holapet/0e5f90af436e4c218343073164a5f657.JPG",
  content: "콘텐츠 내용이야",
}

// ---- middleware actions ---- //
const getPostMiddleware = () => {
  return (dispatch) => {
  
//   // redux-thunk를 활용한 middleware 함수 입니다.
//   // 우선 앞에서 만든 axios모듈을 통해 getPost()를 실행시켜줍니다.
//   // response를 받아온 data를 post_list 상수에 넣어줍니다.
//   // 위에 만든 loadPost 액션 함수에 인자로 post_list를 넣어주고 dispatch 시킵니다.
//   // 그러면 받아온 데이터를 redux에 담게 되겠죠 ?
  
   apis
     .getPost()
     .then((res) => {
       const post_list = res.data;
       dispatch(setPost(post_list));
     })
     .catch((err) => {
       console.error(err);
     });
 };
};

//---- reducer ----// produce << immer
export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, (draft) => {
      draft.list = action.payload.list;
    }),

    [ADD_POST]: (state, action) => produce(state, (draft) => {

    })
  }, initialState
);

//---- action creator export ----//
const actionCreator = {
  setPost,
  addPost,
  getPostMiddleware,
}

export {actionCreator};