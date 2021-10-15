import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
  const handleClick = id => {
    history.push(`/detail/${id}`);
  };

  const post = [
    {
      id: '123',
      username: '조성민',
      date: '2021-10-11 15:51',
      title: '댕댕이의 하루일과',
      image_url:
        'https://t1.daumcdn.net/liveboard/holapet/0e5f90af436e4c218343073164a5f657.JPG',
      content: '안녕',
    },
    {
      id: '345',
      username: '박시준',
      date: '2021-10-14 09:00',
      title: '댕댕이의 하루일과',
      image_url:
        'https://t1.daumcdn.net/liveboard/holapet/0e5f90af436e4c218343073164a5f657.JPG',
      content: '반가워',
    },
    {
      id: '567',
      username: '이민국',
      date: '2021-10-12 10:51',
      title: '댕댕이의 하루일과',
      image_url:
        'https://t1.daumcdn.net/liveboard/holapet/0e5f90af436e4c218343073164a5f657.JPG',
      content: '테스트중이야',
    },
  ];
  const sort_post = post
    .sort((a, b) => {
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
      return 0;
    })
    .reverse();

  useEffect(() => {
    dispatch(postActions.getPostDB());
  }, []);

  return (
    <>
      <Header></Header>
      <MainBanner />
      <PostBox>
        {sort_post.map((item, index) => {
          return (
            <Post
              key={item.id}
              onClick={() => {
                handleClick(item.id);
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
