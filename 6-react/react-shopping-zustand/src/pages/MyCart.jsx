/* eslint-disable no-unused-vars */
import React from "react";
import CartSection from "../components/CartSection";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";

const MyCart = () => {
  return (
    <Container>
      <Breadcrumb currentPageTitle={"My Cart"} />
      <CartSection />
    </Container>
  );
};

export default MyCart;
