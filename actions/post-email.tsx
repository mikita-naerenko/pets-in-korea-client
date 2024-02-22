interface Req {
  text: string;
  email: string;
  name?: string;
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}email`;

export default async function postEmail(body: Req): Promise<Response> {
  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    // cache: "no-store",
  });

  return res.json();
}
