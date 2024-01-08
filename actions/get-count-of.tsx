import qs from "query-string";

type target = "tag" | "articles" | "theme" | "koreanPhrase" | "news";

interface Query {
  target: target;
}

export default async function getCountOf(query: Query): Promise<string> {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}getCountOf`;
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      target: query.target,
    },
  });
  const res = await fetch(url, { cache: "no-store" });
  return res.json();
}
