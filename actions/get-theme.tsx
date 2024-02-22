import qs from "query-string";
import { Theme } from "@/lib/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}theme`;

interface Query {
  id?: string;
}

export default async function getTheme(query: Query): Promise<Theme> {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      id: query?.id,
    },
  });
  const res = await fetch(url);

  return res.json();
}
