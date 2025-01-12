import { BitcoinInfo } from "@/components/about-bitcoin/BitCoinInfo";
import { SentimentAnalysis } from "@/components/sentiment/Sentiment";
import { Team } from "@/components/team/Team";
import { Tokenomics } from "@/components/tokenomics/Tokenomics";


export default function Home() {
  return (
    <>
      <h1 className="p-1">Hello</h1>
      <SentimentAnalysis />
      <BitcoinInfo />
      <Tokenomics />
      <Team />
    </>
  );
}
