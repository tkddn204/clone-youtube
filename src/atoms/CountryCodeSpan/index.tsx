import React from 'react';
import styled from 'styled-components';
import {getAppState} from "../../store";

const CountryCodeSpan = styled.span`
  user-select: text;
  color: gray;
  margin-left: 2px;
  font-size: 10px;
`;

const CountryCode = () => <CountryCodeSpan>
  {getAppState().countryCode}
</CountryCodeSpan>

export default CountryCode;