import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
function Header(props) {
  return (
    <div className="z-10 flex items-center h-20 mb-5 shadow-2xl lg:shadow-none px-7">
      <div className="flex items-center lg:hidden">
        <GiHamburgerMenu
          size={30}
          color="#9945ff"
          onClick={() => props.setisOpen(!props.isOpen)}
        />
        <img
          alt="sd"
          src="https://app.eversafu.com/images/logo.png"
          width="150px"
          className="ml-5"
        ></img>
      </div>
      <div></div>
      <div className="flex-1"></div>
      <div className="bg-[#9945ff] text-base font-semibold rounded-xl px-8 py-2 shadow-[0_2px_4px_0_#010304]">
        Connect
      </div>
    </div>
  );
}

export default Header;
