"use client";

import Link from "next/link";
import { Brand } from "../icons/Brand";
type LogoItemProps = {
  width?: number;
  height?: number;
};

export default function LogoItem({ width = 18, height = 18 }: LogoItemProps) {
  return (
    <Link href="/" className="flex items-center gap-2 cursor-pointer">
      <span className="align-middle">
        <Brand width={width} height={height} />
      </span>
      <span className="text-[#33363E] uppercase font-semibold text-[18px] tracking-[-0.5px]">
        Starvell
      </span>
    </Link>
  );
}
