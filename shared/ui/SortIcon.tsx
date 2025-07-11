"use client";

import ArrowUp from "../icons/ArrowUp";
import ArrowDown from "../icons/ArrowDown";
import SortArrows from "../icons/SortArrows";

type Props = {
  active: boolean;
  direction?: "asc" | "desc";
};

export default function SortIcon({ active, direction }: Props) {
  if (!active) {
    return <SortArrows className="" />;
  }

  return direction === "asc" ? <ArrowDown /> : <ArrowUp />;
}
