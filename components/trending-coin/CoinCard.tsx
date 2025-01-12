import Image from "next/image";
import * as React from "react";

interface CoinCardProps {
  name: string;
  symbol: string;
  percentage: number;
  iconUrl: string;
}

export const CoinCard: React.FC<CoinCardProps> = ({ name, symbol, percentage, iconUrl }) => {
  return (
    <div className="flex gap-10 justify-between items-center w-full">
      <div className="flex gap-1.5 items-center self-stretch my-auto text-slate-900">
        <Image
          loading="lazy"
          src={iconUrl}
          alt={`${name} icon`}
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <div className="self-stretch my-auto">{`${name} (${symbol})`}</div>
      </div>
      <div className="flex gap-2 justify-center items-center self-stretch px-2 py-1.5 my-auto text-center text-emerald-500 whitespace-nowrap bg-emerald-50 rounded min-h-[28px] w-[84px]">
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/52181c2b882603ddecf644a0b79e80ec8be579189f5f2d41d6b4e93a11bba95c?placeholderIfAbsent=true&apiKey=9d805aa00fa74d8dbcddf609a8afc4df"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.38] w-[11px]"
        />
        <div className="self-stretch my-auto">{`${percentage}%`}</div>
      </div>
    </div>
  );
};