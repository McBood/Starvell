"use client";

import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        w-full
        max-w-[1256px]
        mx-auto
        mt-[24px]
        bg-white
        rounded-[16px]
        shadow
        px-[64px]
        pt-[40px]
        pb-[24px]
        box-border
      "
      style={{
        fontFamily: `'Inter', sans-serif`,
      }}
    >
      {children}
    </div>
  );
}
