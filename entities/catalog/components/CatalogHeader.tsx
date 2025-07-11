"use client";

import { useState } from "react";
import Image from "next/image";

import { categories } from "@/entities/catalog/constants/categories";

import robloxImage from "../../../shared/assets/roblox.png";
import Tag from "./Tag";

export interface Category {
  name: string;
  count: number;
}

export default function CatalogHeader() {
  const [activeTag, setActiveTag] = useState<string>("Blox Fruits");

  return (
    <div className="grid grid-cols-[1fr_auto] gap-[32px] items-start">
      <div>
        <h1 className="text-[#36394A] text-[24px] font-semibold mb-[16px]">
          Робуксы Roblox
        </h1>
        <p className="text-[#6E7076] text-[16px] leading-[24px] max-w-[680px]">
          Какой-то длинный текст, связанный с SEO-оптимизацией относительно
          данной категории, на которую вы сейчас смотрите. Какой-то длинный
          текст, связанный с SEO-оптимизацией относительно данной категории, на
          которую вы сейчас смотрите.
        </p>

        <div className="flex flex-wrap gap-[8px] mt-[24px]">
          {categories.map((cat) => (
            <Tag
              key={cat.name}
              label={cat.name}
              count={cat.count}
              active={cat.name === activeTag}
              onClick={() => setActiveTag(cat.name)}
            />
          ))}
        </div>
      </div>

      <div className="relative w-[418px] h-[414px]">
        <Image
          src={robloxImage}
          priority
          alt="Roblox"
          width={450}
          height={450}
          className="
            absolute
            top-[-40px]
            right-[-64px]
            w-full
            h-auto
          "
        />
      </div>
    </div>
  );
}
