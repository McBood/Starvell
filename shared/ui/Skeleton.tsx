import React from "react";

export default function Skeleton() {
  return (
    <div
      className="
        absolute inset-0
        bg-white/40
        backdrop-blur-[1px]
        z-50
        rounded-[8px]
      "
    ></div>
  );
}
