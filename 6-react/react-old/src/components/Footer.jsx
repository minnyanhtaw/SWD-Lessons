/* eslint-disable no-unused-vars */
import React from "react";
import Container from "./Container";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-zinc-900 py-2 text-center text-white mx-5 mt-auto">
      <Container>
        &copy; {year} &nbsp;
        <a href="https://mms-it.com" className="underline">
          MMS IT
        </a>
        . All right reserved.
      </Container>
    </footer>
  );
};

export default Footer;
