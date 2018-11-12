import React from "react";
import { Link } from "react-router-dom";
import { HeaderWrapper, HeaderTitle } from "./Header.styled";

const displayName = "Header";

const defaultProps = {};

function Header({ title }) {
  return (
    <HeaderWrapper>
      <HeaderTitle>
        Sports Store - {title}
        {title == "Products" && <Link to="/cart"> Cart</Link>}
      </HeaderTitle>
    </HeaderWrapper>
  );
}

Header.displayName = displayName;
Header.defaultProps = defaultProps;

export default Header;
