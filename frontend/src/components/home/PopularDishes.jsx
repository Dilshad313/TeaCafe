import React from "react";
import { popularDishes } from "../../constants";

const PopularDishes = () => {
  return (
    <div className="mt-6 pr-6">
      <div className="bg-[#1a1a1a] w-full rounded-lg">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
            Popular Dishes
          </h1>
          <a className="text-[#025cca] text-sm font-semibold" href="">
            View all
          </a>
        </div>

        <div className="overflow-y-scroll h-[680px] scrollbar-hide">
          {popularDishes.map((dish) => {
            return (
              <div
                key={dish.id}
                className="flex items-center justify-between px-6 py-4 mt-4 border-b border-[#2a2a2a]">
                <div className="flex items-center gap-3">
                    <h1 className="text-[#f5f5f5] font-bold text-xl mr-4">{dish.id < 10 ? `0${dish.id}` : dish.id}</h1>
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-[50px] h-[50px] rounded-full"
                  />
                  <div>
                    <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
                      {dish.name}
                    </h1>
                    <p className="text-[#ababab] text-sm font-semibold mt-1">
                      <span className="text-[#ababab]">Orders:</span>{dish.numberOfOrders} 
                    </p>
                  </div>
                </div>
                <span className="text-[#f6b100] font-semibold">
                  {dish.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;
