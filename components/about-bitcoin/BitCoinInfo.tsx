import * as React from 'react';
import { ActionCard } from './ActionCard';

const cards = [
  {
    imageSrc: "/Rectangle1.png",
    title: "Calculate your Profits",
    buttonText: "Check Now",
    backgound: "bg-[linear-gradient(82deg,#2870EA_8.72%,#1B4AEF_85.01%)]"
  },
  {
    imageSrc: "/Rectangle2.png",
    title: "Calculate your tax liability",
    buttonText: "Check Now",
    backgound: "bg-[linear-gradient(82deg,#2870EA_8.72%,#1B4AEF_85.01%)]"
  }
];

export const BitcoinInfo: React.FC = () => {
  return (
    <div className="flex flex-col items-start mx-2 mb-3 pt-6 pl-6 bg-white rounded-lg pb-[663px] max-md:pb-24 max-md:pl-5">
      <div className="flex flex-col w-full h-[308px]">
        <div className="flex flex-col items-start pr-20 pb-5 w-full max-md:pr-5">
          <h1 className="z-10 text-2xl font-semibold leading-tight text-slate-900">
            About Bitcoin
          </h1>
          <div className="flex flex-col mt-6 max-md:max-w-full">
            <div className="text-lg font-bold leading-tight text-slate-900">
              What is Bitcoin?
            </div>
            <div className="mt-2.5 text-base font-medium leading-7 text-zinc-700 max-md:max-w-full">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione nisi beatae, quis dolores illo, suscipit dolorem sunt cum, architecto autem molestiae accusamus non. Quis atque necessitatibus adipisci facere distinctio ipsum esse dolor ullam optio obcaecati!
            </div>
            <div className="text-lg font-bold leading-tight text-slate-900">
              Lorem ipsum dolor sit amet.
            </div>
            <div className="mt-2.5 text-base font-medium leading-7 text-zinc-700 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nostrum quam! Cumque quae culpa vitae, voluptatem quisquam, ab ex placeat reprehenderit maiores laborum, mollitia dolorum! Provident perspiciatis ducimus, ea, id sed fuga, eum magnam architecto minima modi aperiam illo consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nulla neque quasi recusandae, et voluptas minus aliquid. Molestiae, laudantium exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad numquam harum sunt perferendis odio nulla odit provident nesciunt quas illo. <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ratione atque sunt veritatis quod dicta suscipit sed debitis incidunt nam? Eos cum sint dignissimos, iste itaque optio eum nam voluptatem debitis, quod, earum fuga. <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum officiis, nulla odit commodi reprehenderit consectetur pariatur ipsum similique non? Quo, cupiditate quidem alias ab quod non voluptatem pariatur voluptas sapiente consequuntur illo tempore amet! Perferendis sequi sed at doloremque, obcaecati quae, dolorum laboriosam recusandae tempora veniam, amet eaque corporis cupiditate provident quam omnis et rem.
            </div>
            <div className="flex flex-col mt-4 max-w-full w-[807px]">
              <h2 className="max-w-full text-2xl font-semibold leading-7 min-h-[47px] text-slate-900 w-[388px] max-md:max-w-full">
                Already Holding Bitcoin?
              </h2>
              <div className="flex gap-4 items-start mt-2 w-full leading-7">
                {cards.map((card, index) => (
                  <ActionCard key={index} background={card.backgound} {...card} />
                ))}
              </div>
            </div>

            <div className="flex mt-4 w-full border-b border-slate-300 border-opacity-60 min-h-[1px]" />
            <div className="mt-4 w-full text-base font-medium leading-7 text-zinc-700 max-md:max-w-full">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod nemo veritatis excepturi aperiam dicta sequi voluptatum, repellat accusantium fuga voluptas temporibus reprehenderit rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam quidem vero.
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};