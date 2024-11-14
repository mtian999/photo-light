import PhotoLight from "@/components/photo-light";
import { defaultLocale, getDictionary } from "@/lib/i18n";
import { Metadata } from "next";
export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  let langName = lang !== "" ? lang : defaultLocale;

  const dict = await getDictionary(langName);

  return dict.Metadata?.home || {};
}

export default async function LangHome({
  params: { lang },
}: {
  params: { lang: string };
}) {
  // const langName = (lang && lang[0]) || defaultLocale;
  let langName = lang !== "" ? lang : defaultLocale;

  return (
    <>
      <PhotoLight></PhotoLight>
    </>
  );
}
