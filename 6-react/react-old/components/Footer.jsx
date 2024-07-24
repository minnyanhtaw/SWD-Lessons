/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-zinc-900 py-2 text-center text-white mx-5 mt-auto">
      &copy; {year} &nbsp;
      <a href="https://mms-it.com" className="underline">
        MMS IT
      </a>
      . All right reserved.
    </footer>
  );
};

export default Footer;
