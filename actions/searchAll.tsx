import qs from "query-string";
import { Article, News, Theme } from "@/lib/type";
interface Query {
  query: string;
}

type SearchResponse =
  | {
      themes: Theme[] | [];
      articles: Article[] | [];
      news: News[] | [];
    }
  | undefined;

const URL = `${process.env.NEXT_PUBLIC_API_URL}search`;

export default async function searchAll(query: Query): Promise<SearchResponse> {
  if (query.query) {
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        query: query.query,
      },
    });
    const res = await fetch(url, { cache: "no-store" });
    // console.log(res);
    return res.json();
  }
}
