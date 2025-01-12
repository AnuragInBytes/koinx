import * as React from "react";
import { TeamMemberCardProps } from "@/types";
import Image from "next/image";

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="flex flex-wrap gap-4 items-center p-3 mt-6 max-w-full bg-indigo-50 rounded-lg border-0 border-sky-500 border-solid w-[821px]">
      <div className="flex flex-col grow shrink items-center self-stretch my-auto text-center w-[103px]">
        <Image
          loading="lazy"
          src={member.image}
          alt={`${member.name} - ${member.designation}`}
          width={24}
          height={24}
          className="object-contain w-24 rounded-lg aspect-[0.92]"
        />
        <div className="flex flex-col items-center mt-3.5">
          <div className="text-base font-semibold text-slate-900">
            {member.name}
          </div>
          <div className="mt-1 text-xs font-medium text-slate-500">
            {member.designation}
          </div>
        </div>
      </div>
      <div className="grow shrink self-stretch my-auto text-sm leading-6 text-slate-900 w-[620px] max-md:max-w-full">
        {member.description}
      </div>
    </div>
  );
};