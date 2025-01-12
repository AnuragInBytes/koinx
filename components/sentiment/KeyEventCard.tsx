import * as React from 'react';
import { KeyEventCardProps } from '@/types';
import Image from 'next/image';

export const KeyEventCard: React.FC<KeyEventCardProps> = ({
  imageSrc,
  title,
  description,
  backgroundColor
}) => {
  return (
    <div className={`flex flex-col px-5 pt-5 pb-10 ${backgroundColor} rounded-xl border-0 border-indigo-50 border-solid min-w-[320px] w-[456px] max-md:max-w-full`}>
      <div className="flex gap-2 w-full">
        <div className="flex flex-col pb-28 max-md:pb-24">
          <Image
            loading="lazy"
            src={imageSrc}
            alt=""
            width={24}
            height={24}
            className="object-contain w-11 aspect-square"
          />
        </div>
        <div className="flex flex-col grow shrink-0 text-sm leading-5 basis-0 w-fit">
          <div className="flex items-center w-full font-medium text-zinc-900">
            <div className="flex-1 shrink self-stretch pr-5 my-auto w-full min-w-[240px]">
              {title}
            </div>
          </div>
          <div className="pr-1 mt-2 max-w-full text-slate-600 w-[368px]">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};