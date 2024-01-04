import qs from "query-string";
import { Article } from "@/lib/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}articles`;

interface Query {
  //   tagId?: string;
  id?: string;
  //   random?: number;
}

export default async function getArticle(
  query: Query | null
): Promise<Article> {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      id: query?.id || "",
      //   random: query?.random || "",
    },
  });
  const res = await fetch(url, { cache: "no-store" });
  return res.json();
}
