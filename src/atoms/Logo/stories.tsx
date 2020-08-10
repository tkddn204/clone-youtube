import React, {ReactNode} from 'react';
import * as Logo from '.';

export default {
  title: 'Logos',
  component: Logo
};

interface ContainerProps {
  children?: ReactNode;
  width: string;
}
const Container = (props: ContainerProps) => <div style={{width: props.width}}>
  {props.children}
</div>

enum Width {
  SMALL= '24px',
  NORMAL = '48px',
  BIG = '64px',
  LOGO = '106px',
  AUTO = 'auto'
}

export const Logos = () => <div>
  <Container width={Width.AUTO}><Logo.LogoIcon /></Container>
  <Container width={Width.AUTO}><Logo.PremiumLogoIcon /></Container>
</div>