import * as React from "react";
import { ChartLegendProps } from "@/types";

export function ChartLegend({ items }: ChartLegendProps) {
  return (
    <div className="flex flex-col justify-center self-stretch my-auto min-h-[111px]">
      {items.map((item, index) => (
        <div key={index} className={`flex ${index > 0 ? "mt-4" : ""}`}>
          <div className="flex flex-col justify-center pr-2.5 w-[21px]">
            <div className={`flex w-3 h-3 ${item.color} rounded-md min-h-[12px]`} />
          </div>
          <div className="my-auto text-base leading-none text-neutral-800">
            {item.label}: {item.percentage}%
          </div>
        </div>
      ))}
    </div>
  );
}