import React from 'react';
import styled from 'styled-components';
import BackspaceIcon from '@mui/icons-material/Backspace';

import Post from '../components/Post';
import CommentList from '../components/CommentList';
import FlexWrapEle from '../elements/FlexWrapEle';

const Detail = props => {
  const { history } = props;
  const id = props.match.params.id;
  const pathname = props.location.pathname;

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
  const sort_post = post.filter(item => {
    return item.id === id;
  });

  return (
    <Container>
      <FlexWrapEle //
        align_items='flex-start'
        justify='space-between'
        style={{
          position: 'relative',
        }}
      >
        {pathname.includes('detail') ? ( //
          <Post detail {...sort_post[0]} />
        ) : (
          <></>
        )}
        <CommentList id={id} />
        <BackspaceIcon
          style={{
            position: 'absolute',
            right: '0',
            top: '-40px',
            fontSize: '40px',
            color: '#6889b6',
            cursor: 'pointer',
          }}
          onClick={() => {
            history.push('/');
          }}
        />
      </FlexWrapEle>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  & > div {
    border-radius: 20px;
    padding: 20px;
    background-color: #dbd5ce;
  }
`;

export default Detail;
