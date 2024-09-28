import React from "react";
import VoucherDetailCard from "../components/VoucherDetailCard";
import Breadcrumb from "../components/Breadcrumb";
import Container from "../components/Container";

const VoucherDetailPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb
          currentPageTitle="Voucher Detail"
          links={[{ title: "Voucher", path: "/voucher" }]}
        />
        <VoucherDetailCard />
      </Container>
    </section>
  );
};

export default VoucherDetailPage;
