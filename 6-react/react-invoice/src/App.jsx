import React from "react";
import Container from "./components/Container";
import MainHeading from "./components/MainHeading";
import { Button, ButtonGroup } from "flowbite-react";
import SubHeading from "./components/SubHeading";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CheckOutForm from "./components/CheckOutForm";

const App = () => {
  return (
    <main className=" flex flex-col min-h-screen">
      <Header>
        <Container>
          <MainHeading>Invoice App</MainHeading>
          <SubHeading>MMS Solutions</SubHeading>
        </Container>
      </Header>

      <Container>
        <CheckOutForm />
      </Container>

      <Footer>
        <Container>
          <div className=" flex gap-2 items-center justify-end">
            <Button color="light">Manage Product</Button>
            <Button color="blue">Print</Button>
          </div>
        </Container>
      </Footer>
    </main>
  );
};

export default App;
