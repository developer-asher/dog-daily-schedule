import React from 'react';
import styled from 'styled-components';

import EditIcon from '@mui/icons-material/Edit';


import ButtonEle from '../elements/ButtonEle';
import ImageEle from '../elements/ImageEle';
import FlexWrapEle from '../elements/FlexWrapEle';

const Post = ({ children, ...rest }) => {
  const editPost = e => {
    e.preventDefault();
    // 게시글 수정 middleware
  };

  return (
    <PostBox>
      <div>
        <Title>꼬마 댕댕이 3삼총사</Title>
        <FlexWrapEle>
          <WriterInfo>
            <Writer>작성자: 조성민</Writer>
            <WriteDate>2021-10-12 16:15:00</WriteDate>
          </WriterInfo>
          <ButtonEle onClick={editPost}><EditIcon/></ButtonEle>
        </FlexWrapEle>
      </div>
      <ImageEle
        src='https://newsimg.hankookilbo.com/cms/articlerelease/2020/09/13/c22a51dd-d1f8-48d2-82ad-f18a671078be.jpg'
        alt='강아지'
      />
    </PostBox>
  );
};

const PostBox = styled.div`
`;

const Title = styled.h2`
  padding: 16px;
`;

const WriterInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const Writer = styled.span`
  font-weight: bold;
  line-height: 0px;
  padding: 16px;

`;

const WriteDate = styled.small`
  line-height: 5px;
  margin: 0px 16px;
`;

export default Post;
