"use client";

import { useState } from "react";

import SearchInput from "@/shared/ui/SearchInput";
import Dropdown from "@/shared/ui/Dropdown";
import Popup from "@/shared/ui/Popup";

import Switch from "../../shared/ui/Switch";
import Button from "../../shared/ui/Button";
import Tag from "../../entities/catalog/components/Tag";
import { Filters } from "@/entities/catalog/constants/filters";

import lightningImg from "../../public/lightning.svg";

export default function FiltersBar() {
  const [activeFilter, setActiveFilter] = useState("Все");
  const [deliveryType, setDeliveryType] = useState("Способ доставки");
  const [isOnlineOnly, setIsOnlineOnly] = useState(false);
  const [isInstantDelivery, setIsInstantDelivery] = useState(false);
  const [search, setSearch] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="flex justify-between items-start gap-[16px] mt-[24px]">
        <div className="flex flex-wrap items-center gap-[4px] flex-1">
          <div className="flex flex-wrap gap-[4px]">
            {Filters.map((filter) => (
              <Tag
                key={filter}
                label={filter}
                active={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              />
            ))}
          </div>

          <Dropdown
            name="delivery"
            value={deliveryType}
            onChange={setDeliveryType}
            options={[
              "Пункт меню1",
              "Пункт меню2",
              "Пункт меню3",
              "Пункт меню4",
            ]}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            width={166}
            variant="filters"
          />

          <Switch
            label="Только продавцы онлайн"
            checked={isOnlineOnly}
            onChange={() => setIsOnlineOnly(!isOnlineOnly)}
          />

          <Switch
            label="Моментальная доставка"
            checked={isInstantDelivery}
            onChange={() => setIsInstantDelivery(!isInstantDelivery)}
            iconSrc={lightningImg}
          />

          <div className="flex-grow min-w-[220px]">
            <SearchInput
              value={search}
              onChange={setSearch}
              placeholder="Поиск по описанию лота..."
              width="317px"
              iconPosition="right"
            />
          </div>
        </div>

        <Button
          variant="primary"
          size="md"
          rounded="md"
          onClick={() => setShowPopup(true)}
        >
          Продать Blox Fruits
        </Button>
      </div>

      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}
