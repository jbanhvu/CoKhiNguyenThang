import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { SITE_URL } from "./src/config";
import { company, projects, services } from "./src/data/siteData";

const routes = [
  "/",
  "/gioi-thieu",
  "/dich-vu",
  ...services.map((item) => `/dich-vu/${item.slug}`),
  "/nang-luc",
  "/du-an",
  ...projects.map((item) => `/du-an/${item.slug}`),
  "/bao-gia",
  "/lien-he",
];

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  alternateName: company.shortName,
  description: "Gia công cơ khí chính xác CNC, thiết kế kỹ thuật, chế tạo và lắp đặt máy cho doanh nghiệp.",
  url: SITE_URL,
  logo: `${SITE_URL}/img/Logo.jpg`,
  image: `${SITE_URL}/images/may-cnc-tai-xuong.webp`,
  telephone: company.phones.map((phone) => `+84${phone.replaceAll(" ", "").slice(1)}`),
  email: company.email,
  taxID: company.taxCode,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Thửa đất số 564, tờ bản đồ số 85, Ấp 4",
    addressLocality: "Xã Xuân Sơn",
    addressRegion: "Thành phố Hồ Chí Minh",
    addressCountry: "VN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:30",
      closes: "17:30",
    },
  ],
  areaServed: ["Thành phố Hồ Chí Minh", "Đồng Nai", "Bình Dương", "Bà Rịa – Vũng Tàu", "Long An"],
};

/** Sinh sitemap.xml, robots.txt và chèn tên miền, JSON-LD vào index.html. */
function seoFiles(): Plugin {
  return {
    name: "seo-files",
    transformIndexHtml(html) {
      return html
        .replaceAll("%SITE_URL%", SITE_URL)
        .replace("<!--LOCAL_BUSINESS-->", `<script type="application/ld+json">${JSON.stringify(localBusiness)}</script>`);
    },
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10);
      const urls = routes
        .map((path) => `  <url><loc>${SITE_URL}${path}</loc><lastmod>${today}</lastmod><priority>${path === "/" ? "1.0" : "0.8"}</priority></url>`)
        .join("\n");
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      });
      this.emitFile({ type: "asset", fileName: "robots.txt", source: `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n` });
    },
  };
}

export default defineConfig({
  plugins: [react(), seoFiles()],
});
