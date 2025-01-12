import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NAV_LINKS } from '@/constants'

const NavBar = () => {
  return (
    <nav className="flex flex-wrap gap-10 justify-between items-center bg-white border-b border-solid shadow-sm border-b-zinc-200 px-20 max-md:px-5">
      <div className="flex gap-10 items-center my-auto min-h-[72px]">
        <Image
          loading="lazy"
          src="/koinxlogo.svg"
          width={24}
          height={24}
          className="object-contain self-stretch my-auto w-24 aspect-[4]"
          alt="Company Logo"
        />
      </div>
      <div className="flex flex-wrap gap-10 text-base font-semibold tracking-normal max-md:max-w-full">
        <div className="flex flex-wrap flex-auto gap-8 items-center text-slate-900 max-md:max-w-full">
          {NAV_LINKS.map((link) => (
            <Link
            href={link.href}
            key={link.key}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-1.5 justify-center items-center my-auto text-white min-h-[70px]">
          <button className="gap-2 self-stretch px-2 py-3 my-auto rounded-lg bg-[linear-gradient(82deg,#2870EA_8.72%,#1B4AEF_85.01%)] min-h-[40px] w-[136px]">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar