import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Web3Modal from "web3modal";
import { providerOptions } from "../Services/providerOptions";
import { ethers } from "ethers";
const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
  providerOptions, // required
});

function Header(props) {
  const [Address, setAddress] = React.useState("");

  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [account, setAccount] = useState();
  const [chainId, setChainId] = useState();
  const [network, setNetwork] = useState();
  const [error, setError] = useState("");
  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();

      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      const network = await library.getNetwork();
      console.log(network);
      setProvider(provider);
      setLibrary(library);
      if (accounts) setAccount(accounts[0]);
      setChainId(network.chainId);
    } catch (error) {
      setError(error);
    }
  };
  const disconnect = async () => {
    await web3Modal.clearCachedProvider();
    refreshState();
  };
  const refreshState = () => {
    setAccount();
    setChainId();
    setNetwork("");
    // setMessage("");
    // setSignature("");
    // setVerified(undefined);
  };
  React.useEffect(() => {
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
  }, []);

  return (
    <div className="z-10 flex items-center h-20 mb-5 shadow-2xl lg:shadow-none px-7">
      <div className="flex items-center lg:hidden">
        <GiHamburgerMenu
          size={30}
          color="#e69c3c"
          onClick={() => props.setisOpen(!props.isOpen)}
        />
        <img
          alt="sd"
          src={process.env.PUBLIC_URL + "/logo.png"}
          width="150px"
          className="ml-5"
        ></img>
      </div>
      <div></div>
      <div className="flex-1"></div>

      {!account ? (
        <div
          className="relative bg-[#e69c3c] text-base font-semibold rounded-xl px-8 py-2 shadow-[0_2px_4px_0_#010304]"
          onClick={connectWallet}
        >
          Connect Wallet
        </div>
      ) : (
        <div
          className="relative bg-[#e69c3c] text-base font-semibold rounded-xl px-8 py-2 shadow-[0_2px_4px_0_#010304]"
          onClick={disconnect}
        >
          {account.slice(0, 4) +
            "..." +
            account.slice(account.length - 5, account.length)}
        </div>
      )}
    </div>
  );
}

export default Header;
