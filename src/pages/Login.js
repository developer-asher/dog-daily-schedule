import React from "react";
import styled from "styled-components";

import { history } from "../redux/configureStore";
import Header from "../components/Header";

const Login = (props) => {
  return (
    <React.Fragment>
      <Header />
        <Logimg />
      <LoginBox>
        <LoginText>id</LoginText>
        <Input placeholder={"아이디를 입력해주세요"} />
        <LoginText>pwd</LoginText>
        <Input placeholder={"비밀번호를 입력해주세요"} />
        <LoginButton
          onClick={() => {
            history.push("/");
          }}
        >
          로그인
        </LoginButton>
      </LoginBox>
    </React.Fragment>
  );
};



const Logimg = styled.img`
  position: fixed;
  left: 0;
  height: 100vh;
  width: 50%;
  background-color: #FCE38A;
`;

const LoginBox = styled.div`
  margin: auto;
  display: flex;
  height: 100vh;
  width: 50%;
  position: fixed;
  right: 0;
  background: #EAFFD0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginText = styled.p`
  margin: 0px;
`;

const Input = styled.input`
  display: flex;

  height: 21px;
  width: 178px;
`;

const LoginButton = styled.button`
  margin-top: 20px;
  width: 185px;
  height: 27px;
`;

export default Login;
