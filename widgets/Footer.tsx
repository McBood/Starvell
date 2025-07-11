"use client";

import Link from "next/link";

import { DiscordIcon } from "@/shared/icons/DiscordIcon";
import { TelegramIcon } from "@/shared/icons/TgIcon";
import { VkIcon } from "@/shared/icons/VkIcon";
import { YoutubeIcon } from "@/shared/icons/YoutubeIcon";

import LogoItem from "@/shared/ui/LogoItem";

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] mt-[12px] bg-white">
      <div
        className="
          max-w-[1256px]
          h-[180px]
          mx-auto
          flex
          justify-start
          items-start
          py-[32px]
          px-[64px]
          text-[#6E7076]
          text-[14px]
          leading-[20px]
          gap-[88px]
        "
      >
        <div className="flex flex-col gap-[12px] max-w-[300px]">
          <LogoItem />
          <p>© 2024 STARVELL, лучший маркетплейс цифровых товаров и услуг</p>
          <p>Дизайн сделан в 0xHearts.com</p>
        </div>

        <div className="flex flex-col gap-[8px] ">
          <span className="text-[#36394A] font-medium text-[16px] leading-[20px]">
            Поддержка
          </span>
          <Link
            href="#"
            className="hover:text-[#000] hover:text-[#000]transition-colors duration-200"
          >
            Написать в поддержку
          </Link>
          <Link
            href="#"
            className="hover:text-[#000] transition-colors duration-200"
          >
            Политика конфиденциальности
          </Link>
          <Link
            href="#"
            className="hover:text-[#000] transition-colors duration-200"
          >
            Пользовательское соглашение
          </Link>
        </div>

        <div className="flex items-center gap-[12px] ml-auto">
          {[
            { href: "#", icon: <TelegramIcon /> },
            { href: "#", icon: <DiscordIcon /> },
            { href: "#", icon: <VkIcon /> },
            { href: "#", icon: <YoutubeIcon /> },
          ].map((item, i) => (
            <Link key={i} href={item.href}>
              <div
                className="
                  w-[44px] 
                  h-[44px] 
                  flex 
                  items-center 
                  justify-center 
                  rounded-full 
                  border border-[#E5E7EB] 
                  text-[#6E7076] 
                  cursor-pointer 
                  transition-all duration-300
                  hover:text-[#4e75ff] 
                  hover:bg-[#eaf0ff] 
                  hover:shadow-[0_0_20px_rgba(50,133,229,0.21)]
                "
              >
                {item.icon}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
