import React from 'react';
import styled from 'styled-components';
import UploadIcon from '../../atoms/Icons/UploadIcon';

const UploadBox = styled.div`
  width: 40px;
  height: 40px;
  padding: 8px;
  margin-right: 16px;
`;

const UploadButton = styled.button`
    width: 100%;
    height: 100%;
    padding: 0;
`

const Guide = () => <UploadBox>
  <UploadButton>
    <UploadIcon/>
  </UploadButton>
</UploadBox>

export default Guide;