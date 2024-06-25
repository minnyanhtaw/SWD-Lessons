import React, { useState } from "react";
import Container from "./components/Container";
import MainHeading from "./components/MainHeading";
import { Button, ButtonGroup } from "flowbite-react";
import SubHeading from "./components/SubHeading";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CheckOutForm from "./components/CheckOutForm";
import CheckOutItemList from "./components/CheckOutItemList";
import Drawer from "./components/Drawer";

const App = () => {
  const [products, setProduct] = useState([
    {
      id: 1,
      name: "Apple",
      price: 500,
    },
    {
      id: 2,
      name: "Orange",
      price: 600,
    },
    {
      id: 3,
      name: "Mango",
      price: 400,
    },
    {
      id: 4,
      name: "Banana",
      price: 700,
    },
    {
      id: 5,
      name: "Lemon",
      price: 300,
    },
  ]);
  const [items, setItems] = useState([]);

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <main className=" flex flex-col min-h-screen">
      <Header>
        <Container>
          <MainHeading>Invoice App</MainHeading>
          <SubHeading>MMS Solutions</SubHeading>
        </Container>
      </Header>

      <Container>
        <CheckOutForm addItem={addItem} products={products} />
        <CheckOutItemList removeItem={removeItem} items={items} />
      </Container>

      <Footer>
        <Container>
          <div className=" flex gap-2 items-center justify-end">
            <Button onClick={handleDrawer} color="light">
              Manage Product
            </Button>
            <Button color="blue">Print</Button>
          </div>
        </Container>
      </Footer>

      <Drawer
        isDrawerOpen={isDrawerOpen}
        products={products}
        handleDrawer={handleDrawer}
      />
    </main>
  );
};

export default App;
