import React from "react";
import Card from "../Components/Card/Card";

function ClaimReward() {
  return (
    <div>
      <div className="flex mx-2 flex-wrap">
        {ClaimRewardData.map((data, key) => (
          <div className="px-2 mb-6 md:w-1/4">
            <Card value={data} />
          </div>
        ))}
      </div>
      <div className="w-full px-2">
        <div className="bg-[#29292b] rounded-xl shadow-[0_2px_4px_0_#010304] px-5 py-4">
          {ClaimData.map((data, key) => (
            <div className="flex justify-between mb-4">
              <p>{data.title}</p>
              <p className="font-semibold text-base text-white">1234</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const ClaimRewardData = [
  { title: "Your Balance" },
  { title: "APY" },
  { title: "Next Rebase" },
  { title: "Reward Not Claim" },
];
const ClaimData = [
  { title: "Current EverSAFU Price" },
  { title: "Next Reward Amount" },
  { title: "Next Reward Amount USD" },
  { title: "Next Reward Yield" },
  { title: "ROI(1-Day Rate) USD" },
  { title: "ROI(5-Day Rate)" },
  { title: "ROI(5-Day Rate) USD" },
];

export default ClaimReward;
