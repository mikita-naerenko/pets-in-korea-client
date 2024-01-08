import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: ["/app/"],
      },
      {
        userAgent: ["Bingbot", "Yahoo"],
        allow: ["/app/"],
      },
    ],
    // sitemap: ['https://www.example.com/sitemap.xml'],
    // host: 'https://www.example.com',
  };
}
