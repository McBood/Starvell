"use client";

import { useState } from "react";

import { lots } from "@/entities/catalog/constants/lots";
import SortIcon from "@/shared/ui/SortIcon";
import Skeleton from "@/shared/ui/Skeleton";

import LotCard from "./LotCard";

type SortField = "quantity" | "price";
type SortDirection = "asc" | "desc";

export default function LotList() {
  const [sortField, setSortField] = useState<SortField | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [loading, setLoading] = useState(false);

  const sortedLots = [...lots].sort((a, b) => {
    if (!sortField) return 0;
    const valA = a[sortField];
    const valB = b[sortField];
    if (valA === Infinity) return 1;
    if (valB === Infinity) return -1;
    return sortDirection === "asc" ? valA - valB : valB - valA;
  });

  const toggleSort = (field: SortField) => {
    setLoading(true);

    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }

    setTimeout(() => setLoading(false), 700);
  };

  return (
    <div className="relative">
      <div className="flex flex-col gap-[4px]">
        <div
          className="
          flex
          gap-[24px]
          text-[#6E7076]
          text-[12px]
          font-medium
          leading-[16px]
          mt-[24px]
        "
        >
          <div className="w-[616px]">Описание</div>
          <div className="w-[232px]">Продавец</div>
          <button
            onClick={() => toggleSort("quantity")}
            className="w-[104px] flex items-center justify-end gap-[4px] hover:text-[#33363E] cursor-pointer"
          >
            Наличие
            <SortIcon
              active={sortField === "quantity"}
              direction={sortDirection}
            />
          </button>
          <button
            onClick={() => toggleSort("price")}
            className="w-[104px] flex items-center justify-end gap-[4px] hover:text-[#33363E] cursor-pointer"
          >
            Цена
            <SortIcon
              active={sortField === "price"}
              direction={sortDirection}
            />
          </button>
        </div>

        {sortedLots.map((lot, idx) => (
          <LotCard key={idx} {...lot} showIcons={idx === 0} />
        ))}

        <button
          className="
            w-full
            h-[40px]
            mt-[24px]
            flex
            items-center
            justify-center
            border
            border-[#E5E7EB]
            rounded-[8px]
            bg-white
            text-[#36394A]
            text-[16px]
            font-medium
            py-[12px]
            px-[4px]
            hover:bg-[#F9FAFB]
            transition
            cursor-pointer
          "
        >
          Показать больше предложений
        </button>
      </div>

      {loading && <Skeleton />}
    </div>
  );
}
