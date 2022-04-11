import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
function Header(props) {
  const [Address, setAddress] = React.useState("");
  const [isDisconnect, setisDisconnect] = React.useState(true);
  React.useEffect(() => {
    window.ethereum
      .request({ method: "eth_accounts" })
      .then((e) => setAddress(e));
  }, []);

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
      <div
        className="relative bg-[#e69c3c] text-base font-semibold rounded-xl px-8 py-2 shadow-[0_2px_4px_0_#010304]"
        onClick={() => setisDisconnect(!isDisconnect)}
      >
        {isDisconnect
          ? "Connect"
          : Address.toString().slice(0, 5) +
            "..." +
            Address.toString().slice(
              Address.toString().toUpperCase().length - 5,
              Address.toString().toUpperCase().length
            )}
      </div>
    </div>
  );
}

export default Header;
