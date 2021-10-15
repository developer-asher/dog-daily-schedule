import React from 'react';
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import FlexWrapEle from '../elements/FlexWrapEle';
import { useSelector } from 'react-redux';

const Post = props => {
  const {
    image_url,
    userid,
    username,
    createdAt,
    title,
    content,
    detail,
    onClick,
  } = props;
  const local_userid = localStorage.getItem('userid');
  console.log(local_userid, userid);

  // post in detail
  if (detail) {
    return (
      <PostItem detail>
        <PostImage src={image_url} />
        <FlexWrapEle //
          direction='column'
          align_items='flex-start'
        >
          <UserName detail>{username}</UserName>
          <Date detail>{createdAt}</Date>
          {/* <Title detail>{title}</Title> */}
          <Contents detail>{content}</Contents>
        </FlexWrapEle>
      </PostItem>
    );
  }

  return (
    <>
      <PostItem onClick={onClick}>
        <PostImage src={image_url} />
        <UserInfo>
          <UserName>{username}</UserName>
          <Date>{createdAt}</Date>
          <Title>{title}</Title>
          {local_userid === userid ? (
            <DeleteIcon
              style={{
                position: 'absolute',
                right: '10px',
                top: '10px',
                color: '#40517d',
              }}
            />
          ) : (
            <></>
          )}
        </UserInfo>
        {/* <Contents>{content}</Contents> */}
      </PostItem>
    </>
  );
};

Post.defaultProps = {
  // username: '조성민',
  // date: '2021-10-11 15:51',
  // title: '댕댕이의 하루일과',
  // content: '콘텐츠 내용이야',
  image_url:
    'https://t1.daumcdn.net/liveboard/holapet/0e5f90af436e4c218343073164a5f657.JPG',
};

const PostItem = styled.div`
  ${props =>
    props.detail
      ? `
        display: flex;
        flex-direction: column;
        width: 50%;`
      : `
        display: flex;
        flex-direction: column;
        width: 30%;
        height: 450px;
        margin: 40px calc(10% / 6);
        border: 2px inset #ff9785;
        border-radius: 0 0 0 40px;
        background-color: #fae3d9;
        transition: all 0.3s ease-in;
        cursor: pointer;

        &:hover {
          transform: translate(-5px, -5px);
          box-shadow: 10px 10px 10px grey;
          border-radius: 0px;
          border: 2px outset #ff9785;
        }`};
`;

const PostImage = styled.div`
  height: 350px;
  background-image: url('${props => props.src}');
  background-size: cover;
  background-position: center;
`;

const UserInfo = styled.div`
  position: relative;
  padding: 10px;
`;

const UserName = styled.h2`
  ${props =>
    props.detail
      ? `
        margin: 10px 0 0 0;
        font-size: 15px;`
      : `
        margin: 5px 0;
        font-size: 15px;`};
`;

const Date = styled.span`
  ${props =>
    props.detail
      ? `font-size: 12px;`
      : `
        padding: 15px 0px 5px 0px;
        font-size: 12px;`};
`;

const Title = styled.h1`
  ${props =>
    props.detail
      ? `
        margin: 10px 0;
        font-size: 18px;`
      : `
        font-size: 20px;`};
`;

const Contents = styled.p`
  ${props => (props.detail ? `margin: 15px 0 0 0;` : `margin: 16px;`)};
`;

export default Post;
