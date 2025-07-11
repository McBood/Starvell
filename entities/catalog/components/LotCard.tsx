"use client";

import Image from "next/image";

import StarIcon from "@/shared/icons/Star";
import { pluralizeTime } from "@/shared/lib/pluralize";
import { getRatingColors } from "@/shared/lib/ratingColors";

export interface LotCardProps {
  title: string;
  sellerName: string;
  sellerAvatar: string;
  sellerRating: number;
  sellerReviews: number;
  quantity: number;
  price: number;
  timeOnSite: {
    value: number;
    unit: "day" | "week" | "month" | "year";
  };
  showIcons?: boolean;
}

export default function LotCard({
  title,
  sellerName,
  sellerAvatar,
  sellerRating,
  sellerReviews,
  quantity,
  price,
  timeOnSite,
  showIcons = false,
}: LotCardProps) {
  const { bg, text, star } = getRatingColors(sellerRating) ?? {
    bg: "#FFF",
    text: "#000",
    star: "#000",
  };
  return (
    <div
      className="
        flex
        gap-[24px]
        min-h-[56px]
        py-[12px]
        hover:bg-[#FAFAFA]
        cursor-pointer
        text-[#36394A] text-[16px] leading-[20px]
        border-b border-[#E5E7EB]
      "
    >
      <div className="w-[616px] font-normal break-words">{title}</div>

      <div className="w-[232px] flex items-center">
        <Image
          src={sellerAvatar}
          alt={sellerName}
          width={24}
          height={24}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col ml-[8px]">
          <div className="flex items-center gap-[4px]">
            <span className="text-[#36394A] text-[14px] font-medium leading-[20px]">
              {sellerName}
            </span>
            <span
              className="
                flex
                items-center
                gap-[4px]
                rounded-[4px]
                px-[6px]
                py-[2px]
                text-[12px]
                leading-[16px]
                font-semibold
                w-fit
              "
              style={{
                backgroundColor: bg,
                color: text,
              }}
            >
              <span className="translate-y-[0.5px]">
                {sellerRating.toFixed(1)}
              </span>
              <StarIcon color={star} />
            </span>
          </div>
          <span className="text-[#6E7076] text-[12px] font-normal leading-[16px]">
            {pluralizeTime(timeOnSite.value, timeOnSite.unit)} на сайте,{" "}
            {sellerReviews} отзывов
          </span>
        </div>
      </div>

      <div className="w-[104px] font-medium text-right">
        {quantity.toLocaleString("ru-RU")}
      </div>

      <div className="w-[104px] font-medium text-right flex flex-col items-end">
        <div>{price.toFixed(2)} ₽</div>

        {showIcons && (
          <div className="flex gap-[4px] mt-[4px]">
            <Image
              src="/lightning.svg"
              alt="Instant delivery"
              width={12}
              height={12}
            />
            <Image src="/pin.svg" alt="Best price" width={12} height={12} />
          </div>
        )}
      </div>
    </div>
  );
}
