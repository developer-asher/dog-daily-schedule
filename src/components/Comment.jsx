import React from 'react';
import styled from 'styled-components';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
      <CommentFront>
        <UserName>조성민</UserName>
        <CommentArea>댓글내용이다!!!</CommentArea>
        <CommentDate>2020-10-12 15:29:00</CommentDate>
      </CommentFront>
      <EditComment>
        <div onClick={handleComment}>
          <ButtonEle><EditIcon/></ButtonEle>
          <ButtonEle><DeleteIcon/></ButtonEle>
        </div>
      </EditComment>
    </CommentBox>
  );
};

const CommentBox = styled.li`
  margin: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  // background-color: #ffe065;

  & > div {
    display: flex;
    align-items: center;

    & > span {
      margin-right: 20px;
    }
  }
`;

const CommentFront = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const UserName = styled.span`
  font-weight: bold;
  line-height: 0px;
`;

const CommentArea = styled.p`
line-height: 15px;
`;

const CommentDate = styled.small`
  line-height: 0px;
`;

const EditComment = styled.div`

`;

export default Comment;
