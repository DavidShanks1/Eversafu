import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import Calculator from "../pages/Calculator";
import ClaimReward from "../pages/ClaimReward";
import Dashboard from "../pages/Dashboard";
import Insurance from "../pages/Insurance";
import Swap from "../pages/Swap";

function Layout() {
  return (
    <>
      <Header />
      <div className="flex h-screen bg-[#202021]">
        <SideBar />
        <div className="flex-1 overflow-auto mt-7 ">
          <div className="lg:max-w-7xl mx-auto my-0">
            <Routes>
              <Route excat path="/" element={<Dashboard />} />
              <Route path="/claim-reward" element={<ClaimReward />} />
              <Route path="/insurance-detail" element={<Insurance />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/swap" element={<Swap />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
