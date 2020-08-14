import React, {FC} from 'react';
import {
  LogoIcon,
  PremiumLogoIcon
} from '../../atoms/Logo';
import styled from 'styled-components';
import CountryCode from "../../atoms/CountryCodeSpan";
import {Link} from "react-router-dom";
import IconButton from "../../atoms/Paper/IconButton";
import {GuideIcon} from "../../atoms/Icon";
import {toggleDrawer} from "../../store/features/drawer-slice";
import {AppDispatch} from "../../store";
import {useDispatch} from "react-redux";

type LogoIconProps = {
  logoType?: "default" | "premium";
}

const HeaderLogoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoBox = styled.div`
  width: 129px;
	display: flex;
	flex-direction: row;
`;

const GuideIconBox = styled.div`
  margin: 0 16px 0 0;
`

const Logo: FC<LogoIconProps> = (props: LogoIconProps) => {
  const dispatch: AppDispatch = useDispatch();
  const onClickGuideButton = () => {
    dispatch(toggleDrawer());
  }

  return <HeaderLogoBox>
    <GuideIconBox onClick={onClickGuideButton}>
      <IconButton icon={GuideIcon} />
    </GuideIconBox>
    <LogoBox>
      <Link to={"/"}>
        {props.logoType === "premium" ? <PremiumLogoIcon/> : <LogoIcon/>}
      </Link>
      <CountryCode/>
    </LogoBox>
  </HeaderLogoBox>;
}

export default Logo;