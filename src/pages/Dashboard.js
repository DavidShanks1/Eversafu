import React from "react";
import Card from "../Components/Card/Card";

function Dashboard() {
  return (
    <div className="flex flex-col">
      <div className="flex mx-2 flex-wrap">
        {DashboardData.map((data, key) => (
          <div className="px-2 mb-6 md:w-1/3">
            <Card value={data} />
          </div>
        ))}
      </div>
    </div>
  );
}

const DashboardData = [
  { title: "EverSAFU Price" },
  { title: "Market Cap" },
  { title: "Circulating Supply" },
  { title: "Total Dividend Distribute" },
  { title: "Next Rebase" },
  { title: "Total Supply" },
  { title: "Market Value of Treasury Asset" },
  { title: "Pool Value" },
  { title: "EverSAFU Dividend Fund Value" },
  { title: "# Value of FirePit" },
  { title: "Value of FirePit" },
  { title: "% FirePit : Supply" },
];
export default Dashboard;
