import qs from "query-string";
import { Theme } from "@/lib/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}theme`;

export default async function getThemes(): Promise<Theme[]> {
  const res = await fetch(URL, { cache: "no-store" });

  return res.json();
}
