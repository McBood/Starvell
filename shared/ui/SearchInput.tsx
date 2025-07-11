"use client";

import { SearchIcon } from "../icons/Search";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  width?: string | number;
  iconPosition?: "left" | "right";
}

export default function SearchInput({
  value,
  onChange,
  placeholder = "Поиск игр и приложений...",
  width = "384px",
  iconPosition = "left",
}: SearchInputProps) {
  const hasValue = value.trim().length > 0;

  return (
    <div className="relative h-[34px]" style={{ width }}>
      {iconPosition === "left" && (
        <span className="absolute left-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
          <SearchIcon width={16} height={16} color="#9A9BA3" />
        </span>
      )}

      {iconPosition === "right" && (
        <span className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
          <SearchIcon width={16} height={16} color="#9A9BA3" />
        </span>
      )}

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`
          w-full h-full
          ${
            iconPosition === "left"
              ? "pl-[40px] pr-[12px]"
              : "pl-[12px] pr-[40px]"
          }
          pt-[5px] pb-[7px]
          text-[14px]
          rounded-[8px]
          border
          ${hasValue ? "border-[#9E9DA4]" : "border-[#D1D5DB]"}
          placeholder:text-[#9A9BA3]
          focus:placeholder:text-[#6E7076]
          text-[#33363E]
          font-normal
          outline-none
          transition-colors
        `}
        style={{ fontFamily: `'Inter', sans-serif` }}
      />
    </div>
  );
}
