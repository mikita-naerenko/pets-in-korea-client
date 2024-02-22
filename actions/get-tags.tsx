import { Tag } from "@/lib/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}tags`;

export default async function getTags(): Promise<Tag[]> {
  const res = await fetch(URL);

  return res.json();
}
