import { News } from "@/lib/type";
import qs from "query-string";

interface Query {
  id: string;
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}news`;

export default async function getNewsById(query: Query): Promise<News> {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      id: query.id,
    },
  });

  const res = await fetch(url, { cache: "no-store" });

  return res.json();
}
