import getTheme from "@/actions/get-theme";
import SingleTheme from "@/components/single-theme";
import BasicBreadcrumbs from "@/components/ui/basic-breadcrumbs";

import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  {
    params,
  }: {
    params: { themeId: string };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const theme = await getTheme({ id: params.themeId });

  return {
    title: theme.label,
    openGraph: {
      title: theme.label,
    },
  };
}

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
