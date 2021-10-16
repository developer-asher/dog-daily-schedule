import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { commentActions } from '../redux/modules/comment';
import CommentInput from './CommentInput';
import Comment from './Comment';

const CommentList = props => {
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comment.list);

  useEffect(() => {
    // 최초에 한번 해당 게시글의 댓글 가져오기
    dispatch(commentActions.getCommentDB(props.id));
  }, []);

  return (
    <>
      <Comments>
        <CommentInput id={props.id} />
        <CommentWrap>
          {comments.map((list, index) => {
            return <Comment key={index} {...list} />;
          })}
        </CommentWrap>
      </Comments>
    </>
  );
};

const Comments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 48%;
  height: 50vh;
  max-height: 50vh;
  overflow: auto;
  font-size: 14px;

  & > div {
    display: flex;
    align-items: center;

    & > span {
      margin-right: 20px;
    }
  }
`;

const CommentWrap = styled.ul`
  width: 100%;
  padding-left: 0;
  list-style: none;
`;

export default CommentList;
