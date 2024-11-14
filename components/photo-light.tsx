"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Component() {
  const [backgroundColor, setBackgroundColor] = useState("#FFF5E1");

  const colors = [
    { name: "暖白", hex: "#FFF5E1" },
    { name: "柔粉", hex: "#FFE4E1" },
    { name: "淡黄", hex: "#FAFAD2" },
    { name: "浅蓝", hex: "#E6F3FF" },
    { name: "薄荷", hex: "#F0FFF0" },
  ];

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center p-4"
      style={{ backgroundColor }}
    >
      <div className="fixed z-50 bottom-10 left-4 right-4 flex flex-wrap justify-center gap-2">
        {colors.map((color) => (
          <Button
            key={color.hex}
            onClick={() => setBackgroundColor(color.hex)}
            className="px-4 py-2 rounded"
            style={{ backgroundColor: color.hex, color: "#000" }}
          >
            {color.name}
          </Button>
        ))}
      </div>
      <p className="text-xl font-semibold mt-8"></p>
    </div>
  );
}

