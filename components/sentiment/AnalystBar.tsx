import * as React from 'react';
import { AnalystBarProps } from '@/types';

export const AnalystBar: React.FC<AnalystBarProps> = ({
  label,
  percentage,
  color
}) => {
  return (
    <div className="flex flex-wrap items-center py-2 pr-24 pl-2 w-full max-md:pr-5 max-md:max-w-full">
      <div className="grow shrink self-stretch pr-7 my-auto text-base leading-none w-[46px]">
        {label}
      </div>
      <div className={`flex grow shrink self-stretch my-auto h-2 ${color} rounded-sm`} style={{ width: `${percentage}%` }} />
      <div className="grow shrink self-stretch pl-2.5 my-auto text-sm leading-loose w-[33px]">
        {percentage}%
      </div>
    </div>
  );
};