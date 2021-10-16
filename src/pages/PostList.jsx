import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { postActions } from '../redux/modules/post';
import { history } from '../redux/configureStore';
import Post from '../components/Post';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PostList = props => {
  const dispatch = useDispatch();
  const post_list = useSelector(state => state.post.list);

  const handleClick = (e, postid) => {
    if (e.target.tagName === 'svg' || e.target.tagName === 'path') {
      console.log('삭제버튼 클릭', postid);
      dispatch(postActions.deletePostDB(postid));
    } else {
      history.push(`/detail/${postid}`);
    }
  };

  useEffect(() => {
    dispatch(postActions.getPostDB());
  }, []);

  return (
    <>
      <Header></Header>
      <MainBanner />
      <PostBox>
        {post_list.map((item, index) => {
          return (
            <Post
              key={item.postid}
              onClick={e => {
                handleClick(e, item.postid);
              }}
              {...item}
            />
          );
        })}
      </PostBox>
      <AddCircleIcon
        style={addPostIcon}
        onClick={() => {
          history.push('/write');
        }}
      />
      <ScrollUp>
        <KeyboardArrowUpIcon
          sx={{ fontSize: 40, backgroundColor: '#284F73', color: '#fff' }}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
        />
      </ScrollUp>
      <Footer />
    </>
  );
};

const MainBanner = styled.div`
  width: 100%;
  height: 600px;
  background: url('https://cdn.pixabay.com/photo/2016/11/22/20/10/dog-1850465_1280.jpg')
    no-repeat center;
  background-size: cover;
`;

const PostBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: 100%;
  margin: auto;
  padding-top: 10px;
  box-sizing: border-box;
`;

const addPostIcon = {
  position: 'fixed',
  bottom: '5%',
  right: '16%',
  color: '#FFBEB3',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in',
  fontSize: '50px',
};

const ScrollUp = styled.div`
  display: flex;
  position: fixed;
  right: 25px;
  bottom: 25px;
`;

export default PostList;
