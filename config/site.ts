import { SiteConfig } from "@/types/siteConfig";

const baseSiteConfig = {
  name: "猫大师补光灯 | 在线补光灯",
  description:
    "The Master Cat fill light is primarily used to provide additional light to enhance or alter the lighting conditions in a scene. Its main functions include: enhancing natural light, improving skin tones, creating atmosphere, highlighting details, reducing shadows, simulating light sources, color correction, and professional photography.",
  url: "https://fate.maomaoyu.coffee",
  metadataBase: "/",
  keywords: ["在线补光灯"],
  authors: [
    {
      name: "maomaoyu",
      url: "",
      twitter: "",
    },
  ],
  creator: "maomaoyu",
  openSourceURL: "",
  themeColors: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  nextThemeColor: "dark", // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    // { name: "repo", href: OPEN_SOURCE_URL, icon: BsGithub },
    // {
    //   name: "twitter",
    //   href: "https://twitter.com/weijunext",
    //   icon: BsTwitterX,
    // },
    // {
    //   name: "buyMeCoffee",
    //   href: "https://www.buymeacoffee.com/weijunext",
    //   icon: SiBuymeacoffee,
    // },
  ],
  footerLinks: [
    // { name: "email", href: "mailto:weijunext@gmail.com", icon: MdEmail },
    // {
    //   name: "twitter",
    //   href: "https://twitter.com/weijunext",
    //   icon: BsTwitterX,
    // },
    // { name: "github", href: "https://github.com/weijunext/", icon: BsGithub },
    // {
    //   name: "buyMeCoffee",
    //   href: "https://www.buymeacoffee.com/weijunext",
    //   icon: SiBuymeacoffee,
    // },
    // {
    //   name: "juejin",
    //   href: "https://juejin.cn/user/26044008768029",
    //   icon: SiJuejin,
    // },
    // {
    //   name: "weChat",
    //   href: "https://weijunext.com/make-a-friend",
    //   icon: BsWechat,
    // },
  ],
  footerProducts: [
    // { url: "https://weijunext.com/", name: "J实验室" },
    // { url: "https://smartexcel.cc/", name: "Smart Excel" },
    // {
    //   url: "https://landingpage.weijunext.com/",
    //   name: "Landing Page Boilerplate",
    // },
    // { url: "https://nextjs.weijunext.com/", name: "Next.js Practice" },
    // { url: "https://starter.weijunext.com/", name: "Next.js Starter" },
    // { url: "https://githubbio.com", name: "Github Bio Generator" },
    // {
    //   url: "https://github.com/weijunext/indie-hacker-tools",
    //   name: "Indie Hacker Tools",
    // },
  ],
};

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
};
