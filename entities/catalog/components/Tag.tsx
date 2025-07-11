"use client";

import clsx from "clsx";

interface TagProps {
  label: string;
  active?: boolean;
  count?: number;
  onClick?: () => void;
}

export default function Tag({
  label,
  active = false,
  count,
  onClick,
}: TagProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={clsx(
        `
          inline-flex
          items-center
          px-[12px]
          py-[6px]
          rounded-[8px]
          border border-transparent
          text-[14px]
          leading-[20px]
          font-medium
          cursor-pointer
          transition-colors
        `,
        active
          ? "bg-[#5C80FD] text-white"
          : "bg-[#F2F5FF] text-[#5C80FD] hover:bg-[#DEE6FF]"
      )}
    >
      {label}
      {count !== undefined && (
        <span
          className={clsx(
            "ml-[6px] text-[10px] font-semibold",
            active ? "text-white" : "text-[#5C80FD]"
          )}
        >
          {count}
        </span>
      )}
    </button>
  );
}
