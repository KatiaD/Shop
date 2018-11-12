import React from "react";
import { FooterWrapper } from "./Footer.styled";

const displayName = "Footer";

const propTypes = {};

function Footer() {
  return (
    <FooterWrapper>
      <div>Onseo -2018</div>
    </FooterWrapper>
  );
}

Footer.displayName = displayName;
Footer.propTypes = propTypes;

export default Footer;
