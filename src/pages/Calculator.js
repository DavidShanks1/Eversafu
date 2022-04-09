import React from "react";
import Card from "../Components/Card/Card";

function Calculator() {
  return (
    <div>
      <div className="pl-2 mb-3">
        <p className="text-lg font-semibold text-left">Calculator</p>
        <p className="text-left">Estimate your returns</p>
      </div>
      <div>
        <div className="flex flex-col md:flex-wrap md:flex-row">
          {CalculatorCardData.map((data, key) => (
            <div key={key} className="px-2 mb-6 md:w-1/3">
              <Card value={data} />
            </div>
          ))}
        </div>

        {/* INput Files  */}
        <div className="w-full px-2 mb-10">
          <div className="bg-[#29292b] rounded-xl shadow-[0_2px_4px_0_#010304] px-5 py-4 flex-wrap w-full flex ">
            <div className="w-full px-3 mb-6 md:w-1/2">
              <div className="relative flex flex-col items-start ">
                <label className="mb-3">EverSAFU Amount</label>
                <input
                  type="text"
                  placeholder="0"
                  className="w-full px-5 py-2 bg-transparent border-2 rounded border-neutral-50 focus:outline-none"
                ></input>
                <button className="absolute text-[#9945ff] top-11 right-3">
                  Current
                </button>
              </div>
            </div>
            <div className="w-full px-3 mb-6 md:w-1/2">
              <div className="relative flex flex-col items-start">
                <label className="mb-3">EverSAFU Amount</label>
                <input
                  type="text"
                  placeholder="0"
                  className="w-full px-5 py-2 bg-transparent border-2 rounded border-neutral-50 focus:outline-none"
                ></input>
                <button className="absolute text-[#9945ff] top-11 right-3">
                  Current
                </button>
              </div>
            </div>
            <div className="w-full px-3 mb-6 md:w-1/2">
              <div className="relative flex flex-col items-start">
                <label className="mb-3">EverSAFU Amount</label>
                <input
                  type="text"
                  placeholder="0"
                  className="w-full px-5 py-2 bg-transparent border-2 rounded border-neutral-50 focus:outline-none"
                ></input>
                <button className="absolute text-[#9945ff] top-11 right-3">
                  Current
                </button>
              </div>
            </div>
            <div className="w-full px-3 mb-6 md:w-1/2">
              <div className="relative flex flex-col items-start">
                <label className="mb-3">EverSAFU Amount</label>
                <input
                  type="text"
                  placeholder="0"
                  className="w-full px-5 py-2 bg-transparent border-2 rounded border-neutral-50 focus:outline-none"
                ></input>
                <button className="absolute text-[#9945ff] top-11 right-3">
                  Current
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* //Days */}
        <div className="w-full px-2 mb-10">
          <div className="bg-[#29292b] rounded-xl shadow-[0_2px_4px_0_#010304] px-5 py-4 text-left">
            <label for="dayrange">{} Days</label>

            <div>
              <input
                className="w-full py-1 "
                aria-valuemax="365"
                type="range"
                id="dayrange"
                min={1}
                max={365}
              ></input>
            </div>

            {CalculatorData.map((data, key) => (
              <div key={key} className="flex justify-between mb-4">
                <p>{data.title}</p>
                <p className="text-base font-semibold text-white">1234</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
const CalculatorData = [
  { title: "Your initial investment" },
  { title: "Current wealth" },
  { title: "EverSAFU rewards estimation" },
  { title: "Potential return" },
];
const CalculatorCardData = [
  {
    title: "EverSAFU Price",
  },
  {
    title: "Current APY",
  },
  {
    title: "Your EverSAFU Balance",
  },
];
export default Calculator;
