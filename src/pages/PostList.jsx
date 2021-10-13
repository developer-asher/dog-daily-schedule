import React from "react";
import styled from "styled-components";

import PetsIcon from '@mui/icons-material/Pets';
import { history } from "../redux/configureStore";
import Post from "../components/Post";
import { useEffect } from "react";

import { actionCreator } from "../redux/modules/post";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";

const PostList = (props) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.list);

  // 위에서 만든 middleware함수를 dispatch 시켜줍니다.
  // 그 후에 useSelector로 사용하고자 하는 list를 가져와줍니다.

  useEffect(() => {
    dispatch(actionCreator.getPostMiddleware());
  }, []);
  return (
    <React.Fragment>
      <MainBanner></MainBanner>
      <PostBox>
        {post.map((p, idx) => {
          return (
            <Post
              key={p.id}
              {...p}
              onClick={() => {
                history.push(`/detail/${p.id}`);
              }}
            />
          );
        })}
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostBox>
      <AddPostButton>
        <PetsIcon/>
      </AddPostButton>
      <Footer />
    </React.Fragment>
  );
};

const MainBanner = styled.div`
  background-image: url("https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074_960_720.jpg");
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 300px;
  background-color: #bbded6;

`;

const PostBox = styled.div`
  justify-content: space-around;
  flex-wrap: wrap;
  align-content:flex-start;
  display: flex;
  width: 50%;
  min-width: 330px;
  height: 100%;
  margin: auto;
  padding-top: 10px;
  box-sizing: border-box;
`;

const AddPostButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position fixed;
  bottom: 145px;
  right: 150px;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: #FCE38A;
  cursor: pointer;
  color: #475F77;
  border: 4px outset #ffa899;
  &:hover {
    border: 4px inset #ff9785;
  }
`;

export default PostList;
