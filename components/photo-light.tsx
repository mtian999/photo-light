"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Settings, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import NoSleep from "nosleep.js";
import { useEffect, useRef, useState } from "react";

export default function Component() {
  const t = useTranslations("HomePage.Color");
  const { theme, setTheme } = useTheme();
  const [backgroundColor, setBackgroundColor] = useState("#D1CABB");
  const [colormetaInfo, setColormetaInfo] = useState("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [showColorPicker, setShowColorPicker] = useState(true);

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
    setShowColorPicker(theme === "light");
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
  }, [theme]);
  const classical = [
    {
      id: "accessible_beige",
      name: "Accessible Beige",
      hex: "#D1CABB",
      meta: "这个颜色是一个非常受欢迎的中性暖米色,暖色调,中性,百搭,易于使用",
    },
    {
      id: "navy_blue",
      name: "Navy Blue",
      hex: "#000080",
      meta: "深海军蓝，沉稳、经典，常用于服装、室内设计。",
    },
    {
      id: "charcoal_gray",
      name: "Charcoal Gray",
      hex: "#36454F",
      meta: "炭灰色，深沉、现代，适合工业风、极简风格。",
    },
    {
      id: "olive_green",
      name: "Olive Green",
      hex: "#808000",
      meta: "橄榄绿，自然、柔和，常用于服装、家居、户外产品。",
    },
    {
      id: "taupe",
      name: "Taupe",
      hex: "#483C32",
      meta: "灰褐色，介于棕色和灰色之间，百搭、优雅。",
    },
    {
      id: "beige",
      name: "Beige",
      hex: "#F5F5DC",
      meta: "米色，温暖、中性，常用于墙面、家具。",
    },
    {
      id: "terracotta",
      name: "Terracotta",
      hex: "#E2725B",
      meta: "赤陶色，温暖、质朴，常用于家居装饰。",
    },
    {
      id: "mustard_yellow",
      name: "Mustard Yellow",
      hex: "#FFDB58",
      meta: "芥末黄，复古、温暖，常用于服装、家居。",
    },
    {
      id: "sage_green",
      name: "Sage Green",
      hex: "#B2AC88",
      meta: "鼠尾草绿，淡雅、清新，常用于家居、服装。",
    },
    {
      id: "blush_pink",
      name: "Blush Pink",
      hex: "#F0B5B5",
      meta: "腮红色，柔和、浪漫，常用于时尚、美妆。",
    },
    {
      id: "dusty_rose",
      name: "Dusty Rose",
      hex: "#DCAE96",
      meta: "烟粉色，复古、柔和，常用于服装、家居。",
    },
    {
      id: "emerald_green",
      name: "Emerald Green",
      hex: "#50C878",
      meta: "祖母绿，高贵、奢华，常用于珠宝、服装。",
    },
    {
      id: "teal",
      name: "Teal",
      hex: "#008080",
      meta: "青蓝色/鸭绿色，介于蓝色和绿色之间，时尚、独特。",
    },
    {
      id: "coral",
      name: "Coral",
      hex: "#FF7F50",
      meta: "珊瑚色，温暖、活泼，常用于时尚、家居。",
    },
    {
      id: "lavender",
      name: "Lavender",
      hex: "#E6E6FA",
      meta: "淡紫色/薰衣草色，浪漫、宁静，常用于时尚、家居。",
    },
    {
      id: "khaki",
      name: "Khaki",
      hex: "#C3B091",
      meta: "卡其色,属于Muted Earth Tones，柔和的大地色系，自然、温暖。",
    },
    {
      id: "sand",
      name: "Sand",
      hex: "#C2B280",
      meta: "沙色,属于Muted Earth Tones，柔和的大地色系，自然、温暖。",
    },
    {
      id: "clay",
      name: "Clay",
      hex: "#A75A2A",
      meta: "陶土色,属于Muted Earth Tones，柔和的大地色系，自然、温暖。",
    },
    {
      id: "pistachio_green",
      name: "Pistachio Green",
      hex: "#93C572",
      meta: "开心果绿，清新、柔和，常用于家居、设计。",
    },
    {
      id: "sky_blue",
      name: "Sky Blue",
      hex: "#87CEEB",
      meta: "天蓝色，清新、明快，常用于服装、家居。",
    },
    {
      id: "periwinkle",
      name: "Periwinkle",
      hex: "#CCCCFF",
      meta: "长春花蓝，介于蓝色和紫色之间，独特、柔和。",
    },
    {
      id: "ochre",
      name: "Ochre",
      hex: "#CC7722",
      meta: "赭色，土黄色，温暖、复古。",
    },
    {
      id: "gold",
      name: "Gold",
      hex: "#FFD700",
      meta: "金色,属于Metallic，金属色。",
    },
    {
      id: "silver",
      name: "Silver",
      hex: "#C0C0C0",
      meta: "银色,属于Metallic，金属色。",
    },
    {
      id: "bronze",
      name: "Bronze",
      hex: "#CD7F32",
      meta: "青铜色,属于Metallic，金属色。",
    },
    {
      id: "neon_pink",
      name: "Neon Pink",
      hex: "#FF10F0",
      meta: "霓虹粉色，属于Neon,霓虹色。",
    },
    {
      id: "neon_green",
      name: "Neon Green",
      hex: "#39FF14",
      meta: "霓虹绿色，属于Neon,霓虹色。",
    },
    {
      id: "pastel_pink",
      name: "Pastel Pink",
      hex: "#FFD1DC",
      meta: "马卡龙粉色，属于Pastel,马卡龙色。",
    },
    {
      id: "pastel_blue",
      name: "Pastel Blue",
      hex: "#ADD8E6",
      meta: "马卡龙蓝色，属于Pastel,马卡龙色。",
    },
    {
      id: "earthy_brown",
      name: "Earthy Brown",
      hex: "#964B00",
      meta: "大地棕色，属于Earthy,大地色。",
    },
    {
      id: "earthy_green",
      name: "Earthy Green",
      hex: "#556B2F",
      meta: "大地绿色，属于Earthy,大地色。",
    },
    {
      id: "sapphire_blue",
      name: "Sapphire Blue",
      hex: "#0F52BA",
      meta: "蓝宝石蓝，属于Jewel Tones，宝石色。",
    },
  ];
  const asian = [
    {
      id: "ruby_red",
      hex: "#E0115F",
    },

    {
      id: "pearl_white",
      hex: "#F8F6F0",
    },
    {
      id: "peach_pink",
      hex: "#FADADD",
    },
    {
      id: "almond_yellow",
      hex: "#FFEBCD",
    },
    {
      id: "corn_color",
      hex: "#FFF8DC",
    },
    {
      id: "mint_green",
      hex: "#F5FFFA",
    },
    {
      id: "ivory_white",
      hex: "#FFFFF0",
    },
    {
      id: "rose_gold",
      hex: "#FFC0CB",
    },
    {
      id: "champagne",
      hex: "#F7E7CE",
    },

    {
      id: "warm_white",
      hex: "#FFF5E1",
    },
    {
      id: "soft_pink",
      hex: "#FFE4E1",
    },
    {
      id: "light_yellow",
      hex: "#FAFAD2",
    },
    {
      id: "sky_blue",
      hex: "#E6F3FF",
    },
    {
      id: "mint",
      hex: "#F0FFF0",
    },
  ];

  const colors = asian.concat(classical);

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
                    setColormetaInfo(t(`${color.id}.meta`));
                  }}
                  className="px-4 py-2 rounded"
                  style={{ backgroundColor: color.hex, color: "#000" }}
                >
                  <h2 className="flex mb-0 text-sm">{t(`${color.id}.name`)}</h2>
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
