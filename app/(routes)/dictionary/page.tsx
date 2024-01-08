import getThemes from "@/actions/get-themes";
import DictionaryList from "@/components/dictionarys-list/dictionary-list";
import BasicBreadcrumbs from "@/components/ui/basic-breadcrumbs";

export default async function Page() {
  const themes = await getThemes();
  return (
    <>
      <BasicBreadcrumbs currentPage={undefined} />
      <DictionaryList themes={themes} />
    </>
  );
}
