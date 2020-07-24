import "../globalStyles/scss/index.scss";

import React from "react";

import { DemoBanner } from "@components/atoms";
import { demoMode } from "@temp/constants";

import {
  Footer,
  FooterMainMenu,
  MainMenu,
  MetaConsumer,
  OverlayManager,
  Topbar,
} from "../components";
import { Routes } from "./routes";

const App: React.FC = () => {
  return (
    <>
      <MetaConsumer />
      {demoMode && <DemoBanner />}
      <header>
        <Topbar />
        <MainMenu />
      </header>
      <Routes />

      <FooterMainMenu />
      <Footer />
      <OverlayManager />
    </>
  );
};

export default App;
