import React from "react";
import styled from "styled-components";

const Post = (props) => {
  return (
    <React.Fragment>
      <PostItem onClick={props.onClick}>
        <PostImage src={props.imageurl} />
        <UserInfo>
          <UserName>{props.username}</UserName>
          <Date>{props.date}</Date>
        </UserInfo>
        <Title>{props.title}</Title>
        <Contents>{props.content}</Contents>
      </PostItem>
      <UpWrap>
        <Up
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          ^
        </Up>
      </UpWrap>
    </React.Fragment>
  );
};

Post.defaultProps = {
  username: "조성민",
  date: "2021-10-11 15:51",
  title: "댕댕이의 하루일과",
  imageurl:
    "https://t1.daumcdn.net/liveboard/holapet/0e5f90af436e4c218343073164a5f657.JPG",
  content: "콘텐츠 내용이야",
};

const PostItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 480px;
  // flex-basis: 30%;
  min-width: 300px;
  margin: 20px 0px;
  background-color: #fae3d9;
  border-radius: 0px 0px 0px 40px;
  transition: 0.7s;
  border: 2px inset #ff9785;
  cursor: pointer;
  &:hover {
    transform: translate(-5px, -5px);
    box-shadow: 10px 10px 10px grey;
    border-radius: 0px;
    border: 2px outset #ff9785;
  }
`;

const PostImage = styled.div`
  width: 100%;
  height: 380px;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-position: center;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-around;
`;

const UserName = styled.h2`
  font-size: 15px;
`;

const Date = styled.span`
  padding: 15px 0px 0px 0px;
  font-size: 13px;
`;

const Title = styled.h1`
  display: flex;
  padding: 0px 0px 0px 10px;
`;

const Contents = styled.p`
  margin: 16px;
`;

const UpWrap = styled.div`
  display: flex;
  position: fixed;
  right: 15px;
  bottom: 15px;
`;

const Up = styled.button`
  font-size: 30px;
  height: 35px;
  width: 35px;
  cursor: pointer;
  border-radius: 10px;
  border: 4px outset #ffa899;
  &:hover {
    border: 4px inset #ff9785;
  }
`;

export default Post;
