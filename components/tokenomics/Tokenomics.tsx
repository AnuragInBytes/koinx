import * as React from "react";
import { ChartLegend } from "./ChartLegend";
import { DistributionItemProps } from "@/types";
import Image from "next/image";
// import Image from "next/image";

export function Tokenomics() {
  const distributionData: DistributionItemProps[] = [
    {
      color: "bg-sky-500",
      label: "Crowdsale investors",
      percentage: 80
    },
    {
      color: "bg-amber-500",
      label: "Foundation",
      percentage: 20
    }
  ];

  return (
    <div className="flex flex-col mr-2 mb-4 pt-6 pb-16 pl-6 bg-white rounded-lg max-md:pl-5">
      <div className="z-10 py-px w-full text-2xl font-semibold leading-tight whitespace-nowrap text-slate-900 max-md:pr-5">
        Tokenomics
      </div>
      <div className="flex flex-col mt-6 w-full min-h-[227px] max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[810px]">
          <div className="w-full text-xl font-semibold leading-9 pr-[531px] text-stone-900 max-md:pr-5 max-md:max-w-full">
            Initial Distribution
          </div>
          <div className="flex flex-wrap gap-6 items-center pr-96 w-full min-h-[210px] max-md:pr-5 max-md:max-w-full">
            {/* <Image
              loading="lazy"
              src="/Tokenomics.svg"
              alt="Initial token distribution chart"
              width={24}
              height={24}
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[179px]"
            /> */}
            <Image
              src="/Tokenomics.svg"
              alt="tokenomics"
              width={24}
              height={24}
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[179px]"
            />
            <div className="flex gap-6 items-center self-stretch my-auto">
              <ChartLegend items={distributionData} />
            </div>
          </div>
        </div>
        <div className="text-base font-medium leading-7 text-zinc-700 max-md:max-w-full">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </div>
      </div>
    </div>
  );
}