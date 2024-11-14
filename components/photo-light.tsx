"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Settings, X } from "lucide-react";
import { useTheme } from "next-themes";
import NoSleep from "nosleep.js";
import { useEffect, useRef, useState } from "react";

export default function Component() {
  const [backgroundColor, setBackgroundColor] = useState("#FFF5E1");
  const [colormetaInfo, setColormetaInfo] = useState(
    "这是一种柔和的温暖色调，可以为皮肤带来自然的光泽"
  );
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [showColorPicker, setShowColorPicker] = useState(true);
  const { theme, setTheme } = useTheme();
  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -200 : 200;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  const toggleColorPicker = () => {
    setTheme(!showColorPicker ? "light" : "dark");
    setShowColorPicker(!showColorPicker);
  };
  useEffect(() => {
    const noSleep = new NoSleep();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      checkScroll(); // Initial check
    }
    function enableNoSleep() {
      document.removeEventListener("click", enableNoSleep, false);
      noSleep.enable();
    }
    // 阻止浏览器息屏
    document.addEventListener("click", enableNoSleep, false);
    return () => {
      container?.removeEventListener("scroll", checkScroll);
      document.removeEventListener("click", enableNoSleep, false);
    };
  }, []);
  const asian = [
    {
      name: "珍珠白",
      hex: "#F8F6F0",
      meta: "柔和的白色，可以提亮肤色而不显得过于刺眼",
    },
    {
      name: "蜜桃粉",
      hex: "#FADADD",
      meta: "温暖的粉色调，可以为亚洲肤色增添健康红润的感觉",
    },
    {
      name: "杏仁黄",
      hex: "#FFEBCD",
      meta: "温暖的黄色调，可以增强亚洲肤色的金黄色调",
    },
    {
      name: "玉米色",
      hex: "#FFF8DC",
      meta: "柔和的黄色，可以提供温暖的光线，适合大多数亚洲肤色",
    },
    {
      name: "薄荷绿",
      hex: "#F5FFFA",
      meta: "清新的绿色调，可以中和肤色中的红色，创造清爽感",
    },
  ];
  const western = [
    {
      name: "象牙白",
      hex: "#FFFFF0",
      meta: "温和的白色，可以提亮肤色而不会使其显得苍白",
    },
    {
      name: "玫瑰金",
      hex: "#FFC0CB",
      meta: "温暖的粉色调，可以为欧美肤色增添健康的光泽",
    },
    {
      name: "香槟色",
      hex: "#F7E7CE",
      meta: "温暖的金色调，可以增强欧美肤色的温暖感",
    },
    {
      name: "薰衣草",
      hex: "#E6E6FA",
      meta: "柔和的紫色调，可以为欧美肤色增添独特的柔和感",
    },
  ];
  const colors = [
    {
      name: "暖白",
      hex: "#FFF5E1",
      meta: "这是一种柔和的温暖色调，可以为皮肤带来自然的光泽",
    },
    {
      name: "柔粉",
      hex: "#FFE4E1",
      meta: "轻柔的粉色可以为照片增添一丝温馨和浪漫的氛围",
    },
    {
      name: "淡黄",
      hex: "#FAFAD2",
      meta: "淡色调可以模拟黄昏或清晨的自然光，为照片增添温暖感",
    },
    {
      name: "天蓝",
      hex: "#E6F3FF",
      meta: "天蓝这种冷色调可以平衡其他暖色，适合创造清新、冷静的氛围",
    },
    {
      name: "薄荷",
      hex: "#F0FFF0",
      meta: "薄荷这种柔和的绿色可以带来自然、清新的感觉",
    },
  ].concat(asian, western);
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center p-4"
      style={{ backgroundColor }}
    >
      <Button
        className="fixed bottom-24 right-4 z-10"
        onClick={toggleColorPicker}
        variant="outline"
        style={{ backgroundColor, filter: "brightness(103%)" }}
      >
        {showColorPicker ? (
          <X className="h-4 w-4" />
        ) : (
          <Settings className="h-4 w-4" />
        )}
      </Button>

      {showColorPicker && (
        <>
          <p className="text-gray-600">{colormetaInfo}</p>
          <div className="fixed flex flex-col items-center z-50 bottom-10 left-4 right-4 gap-2">
            {showLeftArrow && (
              <button
                type="button"
                aria-label="Left Arrow"
                className="absolute left-0 top-1/2 z-10 flex h-[38px] w-[38px] -translate-y-1/2 items-center justify-center border border-maomaoyu-orange bg-gray-200 text-maomaoyu-orange"
                onClick={() => scroll("left")}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            )}
            <div
              ref={scrollContainerRef}
              className="no-scrollbar flex max-w-full  items-center gap-3 overflow-x-auto"
            >
              {colors.map((color) => (
                <Button
                  key={color.hex}
                  onClick={() => {
                    setBackgroundColor(color.hex);
                    setColormetaInfo(color.meta);
                  }}
                  className="px-4 py-2 rounded"
                  style={{ backgroundColor: color.hex, color: "#000" }}
                >
                  {color.name}
                </Button>
              ))}
            </div>
            {showRightArrow && (
              <button
                type="button"
                aria-label="Right Arrow"
                className="absolute right-0 top-1/2 z-10 flex h-[38px] w-[38px] -translate-y-1/2 items-center justify-center border border-maomaoyu-orange bg-gray-200 text-maomaoyu-orange"
                onClick={() => scroll("right")}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </>
      )}
      <p className="text-xl font-semibold mt-8"></p>
    </div>
  );
}
