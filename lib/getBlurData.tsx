import { getPlaiceholder } from "plaiceholder";

export const getBlurData = async (url: string) => {
  try {
    const buffer = await fetch(url).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );
    const { base64 } = await getPlaiceholder(buffer);
    return base64;
  } catch (e) {
    console.error(e);
  }
};
