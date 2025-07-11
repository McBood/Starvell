"use client";

import { useEffect, useRef } from "react";

import ArrowDown from "../icons/ArrowDown";

interface DropdownProps {
  name: string;
  value: string;
  onChange: (val: string) => void;
  options: string[];
  openDropdown: string | null;
  setOpenDropdown: (name: string | null) => void;
  width?: number;
  variant?: "header" | "filters";
  placeholder?: string;
}

export default function Dropdown({
  options,
  value,
  onChange,
  name,
  openDropdown,
  setOpenDropdown,
  width,
  variant,
  placeholder,
}: DropdownProps) {
  const open = openDropdown === name;
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setOpenDropdown(open ? null : name);
  };

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, setOpenDropdown]);

  const DropdownArrow = () => (
    <span
      className={`
        ml-[4px]
        transition-transform duration-300 ease-out
        ${open ? "rotate-180" : "rotate-0"}
      `}
    >
      <ArrowDown
        width={16}
        height={16}
        color={open ? "#33363E" : "#666D80"}
        className="group-hover:stroke-[#33363E]"
      />
    </span>
  );

  const marginTop = variant === "filters" ? "mt-1" : "mt-5";

  const dropdownWidthClass =
    variant === "filters" ? "min-w-[165px]" : "min-w-[140px]";

  const textClass =
    variant === "filters"
      ? open
        ? "text-[#33363E]"
        : "text-[#36394A]"
      : open
      ? "text-[#33363E]"
      : "text-[#6E7076]";

  const isPlaceholder = value === placeholder;

  return (
    <div className="relative" style={{ width }} ref={dropdownRef}>
      <button
        type="button"
        onClick={handleToggle}
        disabled={variant === "filters" && open}
        className={`
          group
          w-full flex items-center justify-between
          h-[36px] text-sm font-normal
          rounded-[10px]
          transition-colors cursor-pointer
          hover:text-[#33363E]
          ${
            variant === "filters"
              ? "border border-[#E4E6E8] px-[12px] bg-white"
              : ""
          }
          ${textClass}
          ${
            variant === "filters" && open ? "opacity-50 cursor-not-allowed" : ""
          }
        `}
        style={{
          fontFamily: `'Inter', sans-serif`,
        }}
      >
        <span className={`truncate ${isPlaceholder ? "text-[#9CA3AF]" : ""}`}>
          {value || placeholder}
        </span>
        <DropdownArrow />
      </button>

      <div
        className={`
          absolute right-0 ${marginTop}
          w-full
          ${dropdownWidthClass}
          bg-white border border-[#E5E7EB]
          rounded-[10px] shadow-lg
          py-1 z-50
          transition-all duration-300 ease-out
          transform
          ${
            open
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-4 pointer-events-none"
          }
        `}
        style={{
          fontFamily: `'Inter', sans-serif`,
        }}
      >
        {options.map((opt) => (
          <div
            key={opt}
            onClick={() => {
              onChange(opt);
              setOpenDropdown(null);
            }}
            className={`
              px-3 py-2 text-sm text-[#33363E]
              hover:bg-[#F8F8F8]
              cursor-pointer
              whitespace-nowrap
              rounded-[8px]
              mx-1
              transition-colors
            `}
          >
            {opt}
          </div>
        ))}
      </div>
    </div>
  );
}
