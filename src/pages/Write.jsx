import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import LoginIcon from '@mui/icons-material/Login';

import Upload from '../elements/Upload';
import ImageEle from '../elements/ImageEle';
import ButtonEle from '../elements/ButtonEle';
import TextAreaEle from '../elements/TextAreaEle';
import InputEle from '../elements/InputEle';
import { postActions } from '../redux/modules/post';

const Write = props => {
  const { history } = props;
  const dispatch = useDispatch();
  const user_id = localStorage.getItem('userid');
  const is_login = useSelector(state => state.user.is_login);
  const { preview, file } = useSelector(state => state.image);

  const [input, setInput] = useState({ title: '', contents: '' });
  const { title, contents } = input;

  const handleChange = e => {
    const { value, name } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const addPost = () => {
    console.log(title, contents);
    // 이미지 업로드 작업 보류
    const formData = new FormData();
    const image_url = file && URL.createObjectURL(file);

    formData.append('file', file);

    // 5개 데이터 모두 필요
    const post = {
      userid: user_id,
      username: '임시 닉네임',
      title: title,
      contents: contents,
      imageurl: '임시url',
    };

    dispatch(postActions.addPostDB(post));
    // dispatch(postActions.addImageDB(formData));
  };

  if (!is_login) {
    return (
      <TextBox>
        <Text1>앗! 잠깐!</Text1>
        <Text2>로그인 후에만 글을 쓸 수 있어요!</Text2>
        <ReplaceButton
          onClick={() => {
            history.replace('/signin');
          }}
        >
          <LoginIcon />
        </ReplaceButton>
        <TextImage />
      </TextBox>
    );
  }

  return (
    <>
      <TextBox>
        <Text1>게시글 작성</Text1>
        <InputEle
          name='title'
          value={title}
          placeholder='제목'
          margin='0 0 20px 0'
          border_style='none none solid none'
          padding='10px 5px'
          outline='none'
          onChange={handleChange}
        />
        <Upload />
        <ImageBox>
          <ImageEle
            src={preview ? preview : 'http://via.placeholder.com/400x300'}
            max_width='100%'
            width='auto'
            height='350px'
            margin='20px auto'
          />
        </ImageBox>
        <TextAreaEle
          name='contents'
          value={contents}
          rows='10'
          placeholder='게시글 작성'
          onChange={handleChange}
          padding='10px'
        />
        <ButtonEle //
          onClick={addPost}
          style={{ marginTop: '20px' }}
        >
          게시글 작성
        </ButtonEle>
      </TextBox>
    </>
  );
};

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  min-width: 330px;
  height: 100vh;
  margin: auto;
  text-align: center;
`;

const ImageBox = styled.div``;

const Text1 = styled.p`
  margin-top: 0;
  font-size: 25px;
  font-weight: bold;
`;

const Text2 = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const ReplaceButton = styled.button`
  width: 90%;
  height: 70px;
  border: none;
  border-radius: 15px 15px 0px 15px;
  font-size: 35px;
  background-color: #4a78e8;
  color: #fff;
  transition: 0.8s;
  cursor: pointer;

  &:hover {
    width: 100%;
    height: 75px;
  }
`;

const TextImage = styled.div`
  position: relative;
  height: 40vh;
  margin: 100px 0px;
  background-image: url('https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074_960_720.jpg');
  background-size: cover;
  background-position: center;
`;
export default Write;
