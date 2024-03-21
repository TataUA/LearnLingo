import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "components/Header/Header";
import { Loader } from "components/Loader/Loader";
import * as SC from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <SC.Container>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </SC.Container>
  );
};
