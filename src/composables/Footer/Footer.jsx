import React from 'react';
import { FooterWrapper } from './Footer.styled'

const displayName = 'Footer';

function Footer() {
  return (
    <FooterWrapper>
      <div>
        @Onseo-2018
      </div>
    </FooterWrapper>
  );
}

Footer.displayName = displayName;

export default Footer;