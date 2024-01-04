import getThemes from "@/actions/get-themes";
import DictionaryList from "@/components/dictionarys-list/dictionary-list";

export default async function Page() {
  const themes = await getThemes();
  return <DictionaryList themes={themes} />;
}
