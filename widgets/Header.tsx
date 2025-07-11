"use client";

import { useState } from "react";

import Dropdown from "@/shared/ui/Dropdown";
import SearchInput from "@/shared/ui/SearchInput";
import Button from "../shared/ui/Button";
import LogoItem from "@/shared/ui/LogoItem";

export default function Header() {
  const [lang, setLang] = useState("Русский");
  const [currency, setCurrency] = useState("RUB");
  const [support, setSupport] = useState("Поддержка");
  const [search, setSearch] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="w-full h-[57px] border-b border-[#E5E7EB] bg-white flex justify-center">
      <div className="w-[1128px] flex justify-between items-center">
        <div className="flex items-center">
          <LogoItem />
          <div className="w-[55px]" />
          <div className="relative w-[384px] h-[34px]">
            <SearchInput
              value={search}
              onChange={setSearch}
              placeholder="Поиск игр и приложений..."
            />
          </div>
        </div>

        <div className="flex items-center gap-[8px]">
          <Dropdown
            name="support"
            value={support}
            onChange={setSupport}
            options={["Правила", "База знаний"]}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            width={105}
            variant="header"
          />

          <Dropdown
            name="lang"
            value={lang}
            onChange={setLang}
            options={["Русский", "English"]}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            width={80}
            variant="header"
          />

          <Dropdown
            name="currency"
            value={currency}
            onChange={setCurrency}
            options={["RUB", "USD", "EUR"]}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            width={50}
            variant="header"
          />

          <div className="flex items-center gap-[8px] ml-[24px]">
            <Button variant="outline" size="md" rounded="sm">
              Вход
            </Button>

            <Button variant="primary" size="md" rounded="sm">
              Регистрация
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
