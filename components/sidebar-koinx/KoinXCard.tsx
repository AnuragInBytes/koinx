import * as React from "react";
import Image from "next/image";

export default function KoinXCard() {
  return (
    <div className="flex flex-col items-center ml-2 px-4 pt-8 pb-12 w-full bg-blue-600 rounded-lg min-h-[515px]">
      <div className="flex flex-col items-center max-w-full text-center min-h-[182px] w-[327px]">
        <h2 className="text-2xl font-bold leading-10 text-white w-[268px]">
          Get Started with KoinX for FREE
        </h2>
        <p className="mt-3.5 text-sm font-medium leading-6 text-zinc-100">
          With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
        </p>
      </div>
      <Image
        loading="lazy"
        src="/SideBar.svg"
        alt="KoinX Features Illustration"
        width={24}
        height={24}
        className="object-contain mt-5 max-w-full aspect-[1.07] w-[179px]"
      />
      <div className="flex flex-col mt-5 max-w-full text-base font-semibold leading-7 rounded-lg text-slate-900 w-[237px]">
        <button
          className="flex flex-col justify-center items-center px-6 py-2.5 bg-white rounded-lg min-h-[48px]"
          aria-label="Get Started for FREE"
        >
          <div className="flex gap-1.5 items-center">
            <span className="self-stretch my-auto">Get Started for FREE</span>
          </div>
        </button>
      </div>
    </div>
  );
}