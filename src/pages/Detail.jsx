import React, { useEffect } from 'react';
import styled from 'styled-components';
import BackspaceIcon from '@mui/icons-material/Backspace';

import Post from '../components/Post';
import CommentList from '../components/CommentList';
import FlexWrapEle from '../elements/FlexWrapEle';
import { useDispatch, useSelector } from 'react-redux';
import { postActions } from '../redux/modules/post';

const Detail = props => {
  const { history } = props;
  const dispatch = useDispatch();
  const post_list = useSelector(state => state.post.list);

  const id = props.match.params.id;
  const pathname = props.location.pathname;

  const sort_post = post_list.find(item => {
    return item.postid === parseInt(id);
  });

  useEffect(() => {
    if (sort_post) {
      return false;
    }
    // get one post
    dispatch(postActions.getOnePostDB(id));
  }, []);

  return (
    <Container>
      <FlexWrapEle //
        align_items='flex-start'
        justify='space-between'
        style={{
          position: 'relative',
        }}
      >
        {
          //
          pathname.includes('detail') ? ( //
            <Post detail {...sort_post} />
          ) : (
            <></>
          )
        }
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
