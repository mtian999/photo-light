import { siteConfig } from "@/config/site";
import Link from "next/link";

const Footer = () => {
  const d = new Date();
  const currentYear = d.getFullYear();
  const { authors } = siteConfig;

  return (
    <footer className="absolute w-full bottom-0">
      <div className=" space-y-2 pt-6 pb-4 flex flex-col items-center text-sm text-gray-400">
        <div className="flex space-x-2">
          <p>{`©${currentYear}`}</p>{" "}
          <Link href={authors[0].twitter || authors[0].url} target="_blank">
            {authors[0].name}
          </Link>{" "}
          <p>Inspired by</p>
          <p>小猫补光灯</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
