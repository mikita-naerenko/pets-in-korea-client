import qs from "query-string";
import { Tag } from "@/lib/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}tags`;

interface Query {
  tagId?: string;
  tagLabel?: string;
}

export default async function getTag(query: Query): Promise<Tag> {
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
        tagId: query.tagId,
      },
    });
    const res = await fetch(url, { cache: "no-store" });
    return res.json();
  }
  return {} as Tag;
}
