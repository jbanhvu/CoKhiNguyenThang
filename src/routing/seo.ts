import { useEffect } from "react";
import { SITE_URL } from "../config";
import { company } from "../data/siteData";

type SeoOptions = {
  /** Tiêu đề trang, tên công ty được tự thêm vào cuối. */
  title: string;
  description: string;
  path: string;
  /** Tên ảnh trong public/images, dùng làm ảnh chia sẻ Facebook/Zalo. */
  image?: string;
  noindex?: boolean;
};

const setMeta = (attr: "name" | "property", key: string, content: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.content = content;
};

const setCanonical = (href: string) => {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = href;
};

export function useSeo({ title, description, path, image, noindex = false }: SeoOptions) {
  useEffect(() => {
    const fullTitle = path === "/" ? title : `${title} | ${company.shortName}`;
    const url = `${SITE_URL}${path}`;
    const imageUrl = `${SITE_URL}/images/${image ?? "may-cnc-tai-xuong"}.webp`;

    document.title = fullTitle;
    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, follow" : "index, follow");
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", imageUrl);
    setMeta("name", "twitter:card", "summary_large_image");
    setCanonical(url);
  }, [title, description, path, image, noindex]);
}
