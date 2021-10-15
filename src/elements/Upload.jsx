import React, { useRef } from 'react';

import { imageActions } from '../redux/modules/image';
import { useDispatch } from 'react-redux';

const Upload = () => {
  const dispatch = useDispatch();
  const fileRef = useRef();

  const handleChange = e => {
    // console.log(e.target.files[0]);
    // console.log(fileRef.current.files[0]);
    const reader = new FileReader();
    const file = fileRef.current.files[0];

    reader.readAsDataURL(file);
    // 파일 내용 읽기
    reader.onload = e => {
      dispatch(imageActions.setImage(reader.result, file));
    };
  };

  return (
    <>
      <input ref={fileRef} type='file' onChange={handleChange} />
    </>
  );
};

export default Upload;
