import React from "react";
import ModuleBtn from "../components/ModuleBtn";
import Container from "../components/Container";
import {
  HiCircleStack,
  HiComputerDesktop,
  HiDocumentDuplicate,
} from "react-icons/hi2";

const DashboardPage = () => {
  return (
    <section>
      <Container>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div>
            <ModuleBtn
              name="Product"
              icon={<HiCircleStack className=" size-8" />}
              url="/product"
            />
          </div>

          <div>
            <ModuleBtn
              name="Sale"
              icon={<HiComputerDesktop className=" size-8" />}
              url="/Sale"
            />
          </div>

          <div>
            <ModuleBtn
              name="Voucher"
              icon={<HiDocumentDuplicate className=" size-8" />}
              url="/voucher"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DashboardPage;
