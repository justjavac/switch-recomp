import { Directory } from "@/components/directory";
import { JsonLd } from "@/components/json-ld";
import { games } from "@/lib/games";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: "Switch 游戏移植库",
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "zh-CN",
  };

  const listLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Switch 游戏移植库",
    numberOfItems: games.length,
    itemListElement: games.map((game, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: game.titleZh,
      url: `${siteConfig.url}/games/${game.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={[websiteLd, listLd]} />
      <Directory />
    </>
  );
}
