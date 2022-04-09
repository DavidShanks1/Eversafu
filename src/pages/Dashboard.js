import React from "react";
import Card from "../Components/Card/Card";

function Dashboard() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap mx-2">
        {DashboardData.map((data, key) => (
          <div key={key} className="w-full px-2 mb-6 sm:w-1/2 md:w-1/3">
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
