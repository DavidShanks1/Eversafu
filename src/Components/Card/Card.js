import React from "react";

function Card(props) {
  return (
    <div className="py-6 px-5 bg-[#29292b] rounded-xl shadow-[0_2px_4px_0_#010304] w-full">
      <div className="">
        <p className="text-base">{props.value.title}</p>
        <p className="font-semibold text-xl">$3.5003</p>
      </div>
    </div>
  );
}

export default Card;
