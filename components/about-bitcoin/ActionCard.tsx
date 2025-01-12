import * as React from 'react';
import { CardProps } from '@/types';
import Image from 'next/image';

export const ActionCard: React.FC<CardProps> = ({ imageSrc, title, buttonText, background }) => {
  return (
    <div className="flex overflow-hidden flex-col min-w-[240px] w-[403px]">
      <div className="flex gap-5 justify-between py-3 pr-6 pl-3 rounded-lg shadow-[0px_0px_7px_rgba(25,61,84,0.1)] max-md:pr-5">
        <Image
          loading="lazy"
          src={imageSrc}
          alt={title}
          width={200}
          height={200}
          className="object-contain shrink-0 w-32 max-w-full rounded-lg aspect-square"
        />
        <div className="flex flex-col justify-center my-auto">
          <div className="flex flex-col max-w-full text-xl font-bold text-white w-[195px]">
            <div className="flex flex-col">
              <div className="w-full">{title}</div>
            </div>
          </div>
          <div className="flex flex-col mt-4 max-w-full text-sm font-semibold rounded-lg text-slate-900 w-[132px]">
            <button className={`flex flex-col justify-center items-center px-2 py-0.5 w-full rounded-lg min-h-[32px] bg-[linear-gradient(82deg,#2870EA_8.72%,#1B4AEF_85.01%)] ${background}`}>
              <div className="flex gap-1.5 items-center">
                <span className="self-stretch my-auto">{buttonText}</span>
                {/* <Image
                  loading="lazy"
                  src={buttonIconSrc}
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                /> */}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};