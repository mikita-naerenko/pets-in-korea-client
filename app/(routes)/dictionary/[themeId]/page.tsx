import getTheme from "@/actions/get-theme";

export default async function Page({
  params,
}: {
  params: { themeId: string };
}) {
  const theme = await getTheme({ id: params.themeId });
  console.log(theme);
  return <div>Single theme</div>;
}
