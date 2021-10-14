import React from 'react'

import ButtonEle from '../elements/ButtonEle';
import AttachFileIcon from '@mui/icons-material/AttachFile';

import UploadIcon from '@mui/icons-material/Upload';
const Upload = () => {
  return (
    <React.Fragment>
      <input type="file"/>
      <ButtonEle><UploadIcon/></ButtonEle>
    </React.Fragment>
  )
}

export default Upload;
