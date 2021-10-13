import React from 'react';
import styled from 'styled-components';

import ButtonEle from '../elements/ButtonEle';

const Comment = ({ children, ...rest }) => {
  // 이벤트 위임
  const handleComment = e => {
    e.preventDefault();

    if (e.target.tagName !== 'BUTTON') {
      return false;
    }

    if (e.target.textContent === '수정') {
      console.log('수정');
    }
    if (e.target.textContent === '삭제') {
      console.log('삭제');
    }
  };

  return (
    <CommentBox>
      <div>
        <span>조성민</span>
        <p>댓글내용이다!!!</p>
      </div>
      <div>
        <span>2020-10-12 15:29:00</span>
        <div onClick={handleComment}>
          <ButtonEle>수정</ButtonEle>
          <ButtonEle>삭제</ButtonEle>
        </div>
      </div>
    </CommentBox>
  );
};

const CommentBox = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #ffe065;

  & > div {
    display: flex;
    align-items: center;

    & > span {
      margin-right: 20px;
    }
  }
`;

export default Comment;
