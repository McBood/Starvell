"use client";

import Image from "next/image";

interface SwitchProps {
  label: string;
  checked: boolean;
  onChange: () => void;
  iconSrc?: string;
}

export default function Switch({
  label,
  checked,
  onChange,
  iconSrc,
}: SwitchProps) {
  return (
    <div
      className="
        flex items-center
        h-[32px]
        px-[12px]
        rounded-[8px]
        border border-[#E4E6E8]
        cursor-pointer
        text-[14px]
        text-[#36394A]
        bg-white
      "
      onClick={onChange}
    >
      {iconSrc && (
        <Image src={iconSrc} alt="lightning" width={12} height={12} />
      )}
      <span className={iconSrc ? "mx-[8px]" : "mr-[8px]"}>{label}</span>
      <div
        className={`w-[28px] h-[16px] rounded-[8px] relative transition-colors
          ${checked ? "bg-[#5C80FD]" : "bg-[#E4E6E8]"}`}
      >
        <span
          className={`
            absolute top-[2px] left-[2px]
            w-[12px] h-[12px] rounded-full bg-white
            transform transition-transform
            ${checked ? "translate-x-[12px]" : ""}
          `}
        />
      </div>
    </div>
  );
}
