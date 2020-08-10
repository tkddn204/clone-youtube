import React, {FC} from 'react';
import {
	LogoIcon,
	PremiumLogoIcon
} from '../../atoms/Logo';
import styled from 'styled-components';
import CountryCode from "../../atoms/CountryCodeSpan";
import {Link} from "react-router-dom";

type LogoIconProps = {
	logoType?: "default" | "premium";
}

const LogoBox = styled.div`
  width: 129px;
	display: flex;
	flex-direction: row;
`;

const Logo: FC<LogoIconProps> = (props: LogoIconProps) =>
	<LogoBox>
		<Link to={"/"}>
			{props.logoType === "premium" ? <PremiumLogoIcon/> : <LogoIcon/>}
		</Link>
		<CountryCode/>
	</LogoBox>

export default Logo;