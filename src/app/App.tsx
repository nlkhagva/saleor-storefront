import "../globalStyles/scss/index.scss";

import React from "react";

import { useAuth } from "unurshop-sdk";
import { DemoBanner, Loader } from "@components/atoms";
// import { demoMode } from "@temp/constants";
import {
  Footer,
  // FooterMainMenu,
  MainMenu,
  MetaConsumer,
  OverlayManager,
  OverlayProvider,
  Topbar,
} from "../components";
import ShopProvider from "../components/ShopProvider";
import { Routes } from "./routes";
import Notifications from "./Notifications";

const App: React.FC = () => {
  const { tokenRefreshing, tokenVerifying } = useAuth();

  if (tokenRefreshing || tokenVerifying) {
    return <Loader />;
  }

  return (
    <ShopProvider>
      <OverlayProvider>
        <MetaConsumer />
        <DemoBanner />
        {/* {demoMode && <DemoBanner />} */}
        <header>
          <Topbar />
          <MainMenu />
        </header>
        <Routes />
        <Footer />
        {/* <FooterMainMenu /> */}
        <OverlayManager />
        <Notifications />
      </OverlayProvider>
    </ShopProvider>
  );
};

export default App;
