import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import GamePage from "./Game_Page/Game.tsx";
import Help from "./Help_Center/Help.tsx";
import LauncherPage from "./LauncherPage/launcherPage.tsx";
import MyAccount from "./Account/MyAccount.tsx";
import "./index.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Redux/counterSlice.js";
import { counterSelectedReducer } from "./Redux/counterSlice.js";
import ShopPage from "./Shop/Shop.tsx";
import Contacts from "./FooterPage/Contscts/Contacts.tsx";
import AboutUs from "./FooterPage/AboutUs/AboutUs.tsx";
import AboutGame from "./Game_Page/AboutGamePage/AboutGamePage.tsx";
import ScrollToTop from "./Api/ScrollToTop/ScrollToTop.tsx";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    counterSelected: counterSelectedReducer,
  },
});

export default store;



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route index element={<App />} />
          <Route path="/About/:id" element={<AboutGame />} />
          <Route path="/Games" element={<GamePage />} />
          <Route path="/Help_Page" element={<Help />} />
          <Route path="/Download" element={<LauncherPage />} />
          <Route path="/MyAccount" element={<MyAccount />} />
          <Route path="/FullGame" element={<ShopPage />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
