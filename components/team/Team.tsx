import * as React from "react";
import { TeamMemberCard } from "./TeamMemeberCard";
import { TeamMemberProps } from "@/types";

const teamMembers: TeamMemberProps[] = [
  {
    image: "/Team1.png",
    name: "John Smith",
    designation: "Designation here",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
  },
  {
    image: "/Team2.png",
    name: "Elina Williams",
    designation: "Designation here",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
  },
  {
    image: "/Team3.png",
    name: "John Smith",
    designation: "Designation here",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
  }
];

export const Team: React.FC = () => {
  return (
    <div className="flex flex-col items-start mr-2 mb-4 pt-6 pb-11 pl-6 bg-white rounded-lg max-md:pl-5">
      <h1 className="z-10 py-px w-full text-2xl font-semibold leading-tight whitespace-nowrap text-slate-900 max-md:pr-5">
        Team
      </h1>
      <div className="flex flex-col mt-6 max-w-full text-base font-medium leading-7 text-zinc-700 w-[830px]">
        <div className="w-full max-md:max-w-full">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
        </div>
      </div>
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={index} member={member} />
      ))}
    </div>
  );
};