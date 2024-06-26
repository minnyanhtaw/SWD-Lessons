import React, { useContext } from "react";
import Container from "./Container";
import { Button } from "flowbite-react";
import { GeneralContext } from "../context/GeneralProvider";

const Footer = () => {
  const { handleDrawer } = useContext(GeneralContext);

  return (
    <footer className=" mt-auto">
      <Container>
        <div className=" flex gap-2 items-center justify-end">
          <Button onClick={handleDrawer} color="light">
            Manage Product
          </Button>
          <Button color="blue">Print</Button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
