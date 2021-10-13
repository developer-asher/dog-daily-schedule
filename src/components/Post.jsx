import React from 'react';
import styled from 'styled-components';

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
        <h2>꼬마 댕댕이 3삼총사</h2>
        <FlexWrapEle>
          <span>작성자: 조성민</span>
          <span>2021-10-12 16:15:00</span>
          <ButtonEle onClick={editPost}>수정</ButtonEle>
        </FlexWrapEle>
      </div>
      <ImageEle
        src='https://newsimg.hankookilbo.com/cms/articlerelease/2020/09/13/c22a51dd-d1f8-48d2-82ad-f18a671078be.jpg'
        alt='강아지'
      />
    </PostBox>
  );
};

const PostBox = styled.div``;

export default Post;
