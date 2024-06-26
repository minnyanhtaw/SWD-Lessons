import React from "react";
import Container from "./Container";
import MainHeading from "./MainHeading";
import SubHeading from "./SubHeading";

const Header = ({ children }) => {
  return (
    <header className="mb-5">
      <Container>
        <MainHeading>Invoice App</MainHeading>
        <SubHeading>MMS Solutions</SubHeading>
      </Container>
    </header>
  );
};

export default Header;
