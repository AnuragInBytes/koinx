import * as React from "react";
import { CoinCard } from "./CoinCard";
import { CoinData } from "@/types";

const coinData: CoinData[] = [
  {
    name: "Ethereum",
    symbol: "ETH",
    percentage: 8.21,
    iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b546e289ee85d5c06c29f8ee79e82ce6415d42c7bfeb7dd917db5bca6c4d446a?placeholderIfAbsent=true&apiKey=9d805aa00fa74d8dbcddf609a8afc4df"
  },
  {
    name: "Bitcoin",
    symbol: "BTC",
    percentage: 5.26,
    iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/f73171d18a059f9d723d01ef52cf552c80138977c91aa70ad373d32e0d5c0374?placeholderIfAbsent=true&apiKey=9d805aa00fa74d8dbcddf609a8afc4df"
  },
  {
    name: "Polygon",
    symbol: "MATIC",
    percentage: 4.32,
    iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/78c3d10a7e06ce8acdfdc284dccb1e5cc5524c48bb5ea3d61b22545846a1169f?placeholderIfAbsent=true&apiKey=9d805aa00fa74d8dbcddf609a8afc4df"
  }
];

export const TrendingCoins: React.FC = () => {
  return (
    <div className="flex flex-col p-6 bg-white rounded-lg max-w-[427px]">
      <div className="flex gap-10 justify-between items-center w-full text-2xl font-semibold leading-tight text-slate-900">
        <div className="self-stretch my-auto">Trending Coins (24h)</div>
        <div className="flex shrink-0 self-stretch my-auto h-[19px] w-[76px]" />
      </div>
      <div className="flex flex-col mt-6 w-full text-base font-medium">
        {coinData.map((coin, index) => (
          <div key={coin.symbol} className={index > 0 ? "mt-5" : ""}>
            <CoinCard
              name={coin.name}
              symbol={coin.symbol}
              percentage={coin.percentage}
              iconUrl={coin.iconUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};