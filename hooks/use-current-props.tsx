import { create } from "zustand";
import { Tag, Article } from "@/lib/type";

interface useStore {
  tagsList: Tag[] | [];
  currentArticle: Article | null;
  setCurrentArticle: (article: Article) => void;
  setTagsList: (list: Tag[]) => void;
}

export const useCurrentProps = create<useStore>((set) => ({
  tagsList: [],
  currentArticle: null,
  setCurrentArticle: (article: Article) => set({ currentArticle: article }),
  setTagsList: (list: Tag[]) => set({ tagsList: list }),
}));
