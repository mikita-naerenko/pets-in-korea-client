import qs from "query-string";
import { Article } from "@/lib/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}articles`;

interface Query {
  id?: string;
}

export default async function getArticle(
  query: Query | null
): Promise<Article> {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      id: query?.id || "",
    },
  });
  const res = await fetch(url, { cache: "no-store" });
  return res.json();
}
