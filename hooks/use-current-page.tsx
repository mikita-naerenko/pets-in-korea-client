import { create } from "zustand";

interface UseCurrentPage {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const useCurrentPage = create<UseCurrentPage>((set) => ({
  currentPage: "/",
  setCurrentPage: (list: string) => set({ currentPage: list }),
}));
