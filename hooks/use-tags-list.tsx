import { create } from "zustand";
import { Tag } from "@/lib/type";

interface useModalStore {
  tagsList: Tag[] | [];
  setTagsList: (list: Tag[]) => void;
}

export const useTagModal = create<useModalStore>((set) => ({
  tagsList: [],
  setTagsList: (list: Tag[]) => set({ tagsList: list }),
}));
