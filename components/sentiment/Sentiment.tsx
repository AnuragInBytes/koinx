import * as React from 'react';
import { KeyEventCard } from './KeyEventCard';
import { AnalystBar } from './AnalystBar';
// import Image from 'next/image';
import { IoIosInformationCircle, IoIosArrowForward } from 'react-icons/io';

const keyEventsData = [
  {
    imageSrc: "/Vector.svg",
    title: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
    description: "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
    backgroundColor: "bg-indigo-50"
  },
  {
    imageSrc: "/Group.svg",
    title: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
    description: "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra in a adipisinc metus quis del",
    backgroundColor: "bg-emerald-50"
  }
];

const analystData = [
  { label: "Buy", percentage: 76, color: "bg-emerald-500" },
  { label: "Hold", percentage: 8, color: "bg-neutral-300" },
  { label: "Sell", percentage: 16, color: "bg-red-500" }
];

export const SentimentAnalysis: React.FC = () => {
  return (
    <div className="flex flex-col items-start mx-2 mb-3 pt-6 pb-11 pl-6 bg-white rounded-lg max-md:pl-5">
{/* <div className="flex flex-col pl-2.5 -mb-40 max-md:mb-2.5 max-md:max-w-full"> */}
      <div className="flex relative flex-col max-md:max-w-full">
        <div className="py-px w-full text-2xl font-semibold leading-tight whitespace-nowrap text-slate-900 max-md:pr-5">
          Sentiment
        </div>
        <div className="flex z-0 flex-wrap mt-4 max-w-full pr-[527px] w-[710px] max-md:pr-5">
          <div className="my-auto text-xl font-semibold leading-none text-gray-700">
            Key Events <IoIosInformationCircle />
          </div>
        </div>
        <div className="flex bg-red-200 z-0 overflow-x-hidden gap-3.5 mt-4 max-md:max-w-full">
          {keyEventsData.map((event, index) => (
            <KeyEventCard key={index} {...event} />
          ))}
        </div>
        <div className="flex absolute right-px top-2/4 z-0 flex-col -translate-y-2/4 translate-x-[0%] w-[60px]">
          <IoIosArrowForward />
        </div>
      </div>
      <div className="flex flex-col pb-6 mt-8 max-w-full w-[710px]">
        <div className="flex flex-wrap pr-[519px] max-md:pr-5">
          <div className="my-auto text-xl font-semibold leading-none text-gray-700">
            Analyst Estimates {/* <IoIosInformationCircle /> */}
          </div>
        </div>
        <div className="flex flex-wrap mt-6 font-medium whitespace-nowrap">
          <div className="flex flex-col pr-10 text-emerald-500 w-[157px]">
            <div className="flex justify-center items-center pr-7 pl-8 bg-emerald-50 h-[119px] min-h-[120px] rounded-[59px] w-[119px] max-md:px-5">
              <div className="flex flex-1 shrink gap-0.5 justify-center items-center basis-0 size-full">
                <div className="self-stretch pt-0.5 pb-1 my-auto text-4xl">76</div>
                <div className="self-stretch my-auto text-base leading-none">%</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 shrink my-auto text-gray-500 basis-10 min-w-[240px] max-md:max-w-full">
            {analystData.map((item, index) => (
              <AnalystBar key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};