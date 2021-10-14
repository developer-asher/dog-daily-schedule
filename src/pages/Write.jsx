import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import LoginIcon from "@mui/icons-material/Login";

import Upload from "../shared/Upload";
import Image from "../elements/Image";
import ButtonEle from "../elements/ButtonEle";
import { actionCreator as postActions } from "../redux/modules/post";

const Write = (props) => {
  const dispatch = useDispatch();
  //is_login 만들었을시 삭제
  const is_login = true;
  //is_login 함수만들면 사용
  // const is_login = useSelector ((state) => state.user.is_login);
  const { history } = props;

  const [contents, setContents] = React.useState("");

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const addPost = () => {
    dispatch(postActions.addPostFB(contents));
  };

  if (!is_login) {
    return (
      <TextBox>
        <Text1>앗! 잠깐!</Text1>
        <Text2>로그인 후에만 글을 쓸 수 있어요!</Text2>
        <ReplaceButton
          onClick={() => {
            history.replace("/login");
          }}
        >
          <LoginIcon />
        </ReplaceButton>
        <TextImage />
      </TextBox>
    );
  }

  return (
    <React.Fragment>
      <TextBox>
        <div>
          <div>
            <Text1>게시글 작성</Text1>
            <Upload />
          </div>
        </div>
        <div>
          <Image />
        </div>
        <div>
          <InputEle
            onChange={changeContents}
            label="게시글 내용"
            placeholder="게시글 작성"
          />
        </div>

        <div>
          <ButtonEle onClick={addPost}>게시글 작성</ButtonEle>
        </div>
      </TextBox>
    </React.Fragment>
  );
};

const TextBox = styled.div`
  position: relative;
  top: 15vh;
  width: 50%;
  min-width: 330px;
  text-align: center;
  margin: auto;
`;

const Text1 = styled.p`
  font-size: 32px;
  font-weight: bold;
`;

const Text2 = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

//   padding: 10px 5px;
//   font-size: 14px;
// `;

const ReplaceButton = styled.button`
  cursor: pointer;
  background-color: #4a78e8;
  color: #fff;
  font-size: 35px;
  border: none;
  height: 70px;
  border-radius: 15px 15px 0px 15px;
  width: 90%;
  transition: 0.8s;
  &:hover {
    height: 75px;
    width: 100%;
  }
`;

const TextImage = styled.div`
  position: relative;
  margin: 100px 0px;
  height: 40vh;
  background-image: url("https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074_960_720.jpg");
  background-size: cover;
  background-position: center;
`;
//-------------------------------------------로그인을해주세요-------------------------------------

const InputEle = styled.textarea`
  height: 90px;
  width: 80%;
  min-width: 330px;
  max-width: 450px;
`;
export default Write;
