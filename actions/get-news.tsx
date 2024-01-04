import { News } from "@/lib/type";
import qs from "query-string";

interface Query {
  quantity?: number;
  id?: string;
  random?: number;
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}news`;

export default async function getNews(query: Query | null): Promise<News[]> {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      take: query?.quantity || "",
      id: query?.id || "",
      random: query?.random || "",
    },
  });

  const res = await fetch(url, { cache: "no-store" });

  return res.json();
}
