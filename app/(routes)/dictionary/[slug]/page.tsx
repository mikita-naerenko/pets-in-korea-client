import getTheme from "@/actions/get-theme";
import getThemes from "@/actions/get-themes";
import SingleTheme from "@/components/single-theme";
import BasicBreadcrumbs from "@/components/ui/basic-breadcrumbs/basic-breadcrumbs";
import { Theme } from "@/lib/type";

import { Metadata, ResolvingMetadata } from "next";

export async function generateStaticParams() {
  const themes = await getThemes();

  return themes.map((item) => ({
    slug: item.id,
  }));
}

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
    description: `Русско-корейский разговорник на тему ${theme.label}`,
    openGraph: {
      title: theme.label,
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const theme = await getTheme({ id: slug });

  return (
    <>
      <BasicBreadcrumbs currentPage={theme.rusLabel} />
      <SingleTheme theme={theme} />
    </>
  );
}
