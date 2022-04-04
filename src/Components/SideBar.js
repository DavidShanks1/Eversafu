import React from "react";
import { Link } from "react-router-dom";
import { BiHome, BiDollarCircle, BiCheckShield } from "react-icons/bi";
import { ImCalculator } from "react-icons/im";
import { BsLightningChargeFill } from "react-icons/bs";
function SideBar() {
  return (
    <div className="w-60">
      <div className="mt-10 mb-12 flex justify-center">
        <img
          className="w-auto h-28"
          src={"https://app.eversafu.com/images/icones.png"}
        ></img>
      </div>
      <div>
        <ul className="flex flex-col justify-center">
          {NavData.map((data, key) => (
            <li
              key={key}
              className="py-2.5 font-semibold text-lg flex items-center justify-center hover:text-violet-700"
            >
              <span className="">{data.icon}</span>
              <Link className="ml-2.5" to={data.href}>
                {data.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const NavData = [
  { icon: <BiHome />, href: "/", title: "Dashboard" },
  { icon: <BiDollarCircle />, href: "/claim-reward", title: "Claim Reward" },
  {
    icon: <BiCheckShield />,
    href: "/insurance-detail",
    title: "Insurance Detail",
  },
  { icon: <ImCalculator />, href: "/calculator", title: "Calculator" },
  { icon: <BsLightningChargeFill />, href: "/swap", title: "Swap" },
];
export default SideBar;
