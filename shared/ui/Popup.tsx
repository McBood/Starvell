"use client";

import { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

import Dropdown from "./Dropdown";
import Button from "./Button";

import { CloudIcon } from "../icons/CloudIcon";
import { ExtIcon } from "../icons/ExtenIcon";
import CancelIcon from "../icons/CancelIcon";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Popup({ isOpen, onClose }: Props) {
  const [text, setText] = useState("");
  const [complaint, setComplaint] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-[2px]">
      <div className="relative bg-white rounded-[12px] w-[440px] p-[24px] shadow-xl">
        <button
          onClick={() => {
            onClose();
            setText("");
            setComplaint("");
            setOpenDropdown(null);
          }}
          className="
            absolute
            -top-[0px]
            -right-[64px]
            w-[48px] h-[48px]
            rounded-[8px]
            bg-white
            shadow
            flex items-center justify-center
            text-[#6E7076]
            hover:text-[#2E5BFF]
            transition-colors
            cursor-pointer
          "
        >
          <CancelIcon />
        </button>

        <h2 className="text-[#36394A] text-[20px] font-semibold mb-[24px]">
          Жалоба на 0xHearts.com
        </h2>

        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[4px]">
            <label className="text-[#6E7076] text-[14px] font-normal">
              Причина жалобы
            </label>
            <Dropdown
              name="complaint"
              placeholder="Выберите причину жалобы…"
              value={complaint}
              onChange={setComplaint}
              options={["Правила", "База знаний"]}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
              width={392}
              variant="filters"
            />
          </div>

          <div className="flex flex-col gap-[4px]">
            <label className="text-[#6E7076] text-[14px] font-normal">
              Опишите проблему
            </label>

            <div className="relative w-full">
              <TextareaAutosize
                id="problem"
                value={text}
                onChange={(e) => setText(e.target.value)}
                maxLength={200}
                minRows={3}
                maxRows={8}
                placeholder="Введите ваш текст"
                className="
                  w-full
                  border border-[#E5E7EB]
                  rounded-[8px]
                  px-[12px]
                  py-[10px]
                  pb-[28px]
                  text-[#36394A]
                  text-[14px]
                  focus:outline-none
                  focus:border-[#2E5BFF]
                  resize-none
                  pr-[12px]
                "
              />

              <div
                className="
                  absolute
                  bottom-[8px]
                  right-[12px]
                  flex
                  items-center
                  gap-[8px]
                  pointer-events-none
                  bg-white
                  pl-[4px]
                "
              >
                <span className="text-[#9CA3AF] text-[12px]">
                  {text.length}/200
                </span>
                <ExtIcon />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[4px]">
            <span className="text-[#6E7076] text-[14px] font-normal">
              Доказательства
            </span>
            <div
              className="
                flex flex-col items-center justify-center
                border-[2px] border-dashed border-[#9E9DA4]
                rounded-[8px] h-[100px]
                gap-1
                text-[#6E7076]
                text-[14px]
                cursor-pointer
                hover:border-[#2E5BFF]
                hover:bg-[#f9faff]
                transition-colors
              "
            >
              <CloudIcon />
              <span className="text-[16px] text-[#36394A] font-medium">
                Выберите файл или перетащите его сюда
              </span>
              <span className="text-[#6E7076] text-[14px]">
                JPEG или PNG до 5 MB
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-[24px] gap-[8px]">
          <Button variant="outline">Мне нужна поддержка</Button>
          <Button fullWidth size="md" variant="primary">
            Пожаловаться
          </Button>
        </div>
      </div>
    </div>
  );
}
