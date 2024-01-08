import qs from "query-string";
import { Article } from "@/lib/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}articles`;

interface Query {
  tagId?: string;
  limit?: number;
  offset?: number;
  random?: number;
  tagLabel?: string;
}

export default async function getArticles(
  query: Query | null
): Promise<Article[]> {
  if (query?.random) {
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        random: query.random,
      },
    });
    const res = await fetch(url, { cache: "no-store" });
    return res.json();
  }
  if (query?.tagLabel) {
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        tagLabel: query.tagLabel,
      },
    });
    const res = await fetch(url, { cache: "no-store" });
    return res.json();
  }
  if (query?.tagId) {
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        tagId: query?.tagId || "",
      },
    });
    const res = await fetch(url, { cache: "no-store" });
    return res.json();
  } else {
    const url = qs.stringifyUrl({
      url: URL,
    });
    const res = await fetch(url, { cache: "no-store" });
    return res.json();
  }
}
