import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { commentActions } from '../redux/modules/comment';
import ButtonEle from '../elements/ButtonEle';
import InputEle from '../elements/InputEle';
import LabelEle from '../elements/LabelEle';

const CommentInput = props => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({ comment: '' });
  const { comment } = input;

  const handleChange = e => {
    const { value, name } = e.target; //event target name

    setInput({
      [name]: value,
    });
  };

  const writeComment = e => {
    e.preventDefault();

    dispatch(commentActions.setCommentDB(props.id, '테스트', comment));

    setInput({
      comment: '',
    });
  };

  return (
    <>
      <Form onSubmit={writeComment}>
        <InputBox>
          <LabelEle //
            htmlFor='comment'
            hidden
          >
            댓글작성
          </LabelEle>
          <InputEle
            id='comment'
            name='comment'
            value={comment}
            type='text'
            placeholder='댓글을 작성해주세요.'
            onChange={handleChange}
          />
        </InputBox>
        {/* <ButtonEle onClick={writeComment}>댓글작성</ButtonEle> */}
      </Form>
      <Explanation>글을 게시하려면 Enter 키를 누르세요.</Explanation>
    </>
  );
};

const Form = styled.form`
  width: 100%;
`;

const InputBox = styled.div`
  width: 100%;
  border-radius: 40px;

  & > input {
    width: 100%;
    border: none;
    border-radius: 40px;
    padding: 10px;
    background-color: #eff2f5;
    outline: none;
  }
`;

const Explanation = styled.span`
  margin-left: 5px;
  font-size: 12px;
  color: #333;
`;
export default CommentInput;
