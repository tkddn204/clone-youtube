import React from 'react';
import styled from 'styled-components';
import { UploadIcon } from '../../atoms/Icon';
import IconButton from "../../atoms/Paper/IconButton";

const UploadBox = styled(IconButton)`
`;

const UploadButton = styled.button`
    width: 100%;
    height: 100%;
    padding: 0;
`

const Upload = () => <UploadBox>
  <UploadButton>
    <UploadIcon />
  </UploadButton>
</UploadBox>

export default Upload;