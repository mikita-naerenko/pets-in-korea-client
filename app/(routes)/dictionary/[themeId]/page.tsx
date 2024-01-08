import getTheme from "@/actions/get-theme";
import SingleTheme from "@/components/single-theme";
import BasicBreadcrumbs from "@/components/ui/basic-breadcrumbs";

export default async function Page({
  params,
}: {
  params: { themeId: string };
}) {
  const theme = await getTheme({ id: params.themeId });

  return (
    <>
      <BasicBreadcrumbs currentPage={theme.label} />
      <SingleTheme theme={theme} />
    </>
  );
}
