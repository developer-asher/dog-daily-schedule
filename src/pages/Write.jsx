import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import LoginIcon from '@mui/icons-material/Login';

import Upload from '../elements/Upload';
import ImageEle from '../elements/ImageEle';
import ButtonEle from '../elements/ButtonEle';
import TextAreaEle from '../elements/TextAreaEle';
import { postActions } from '../redux/modules/post';

const image_style = {
  maxWidth: '100%',
  width: 'auto',
  height: '380px',
  margin: '30px auto',
};

const Write = props => {
  const is_login = true;

  const dispatch = useDispatch();
  const { history } = props;
  const user = useSelector(state => state.user);
  const { preview, file } = useSelector(state => state.image);

  const [content, setContent] = React.useState('');

  const changeContent = e => {
    setContent(e.target.value);
  };

  const addPost = () => {
    // 이미지 업로드 작업 보류
    // const formData = new FormData();
    // console.log(file);
    // formData.append('files', file);
    // console.log(formData);

    const post = {
      userid: 'jsm5272',
      username: 'nick_name',
      title: '제목이야',
      imageurl: '이미지url',
      contents: content,
    };

    dispatch(postActions.addPostDB(post));
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
        <Upload />
        {/* <ImageBox>
          <ImageEle
            src={preview ? preview : 'http://via.placeholder.com/400x300'}
            style={image_style}
          />
        </ImageBox> */}
        <TextAreaEle
          value={content}
          rows='10'
          placeholder='게시글 작성'
          onChange={changeContent}
        />
        <ButtonEle onClick={addPost} style={{ marginTop: '20px' }}>
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
  font-size: 32px;
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
