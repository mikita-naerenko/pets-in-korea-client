import searchAll from "@/actions/searchAll";
import { SearchResponse } from "@/lib/type";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper/Paper";
import { useRef, useState, useCallback, Dispatch, SetStateAction } from "react";
import SearchResults from "./search-results";
import { SearchInputStylesXs } from "./styles";

export default function SearchInputXs({
  handleClose,
}: {
  handleClose: Dispatch<SetStateAction<boolean>>;
}) {
  const debounceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [found, setFound] = useState<SearchResponse | "">("");

  type AnyFunction = () => Promise<SearchResponse>;

  function debounce(func: AnyFunction, delay: number) {
    return function (...args: []) {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
      debounceTimeout.current = setTimeout(async () => {
        const result: undefined | SearchResponse = await func(...args);
        setFound(result);
        debounceTimeout.current = null;
      }, delay);
    };
  }
  const memoHandleChange = useCallback(
    (event: { target: { value: string } }) => {
      const debouncedSearch = debounce(async () => {
        return await searchAll({ query: event.target.value });
      }, 1000);
      if (event.target.value) {
        try {
          debouncedSearch();
        } catch (error) {
          console.error(error);
        }
      }
    },
    []
  );
  return (
    <Paper component="form" sx={SearchInputStylesXs}>
      <InputBase
        placeholder="Поиск по содержимому сайта"
        inputProps={{ "aria-label": "поиск по сайту" }}
        sx={{ flexGrow: 1 }}
        onChange={memoHandleChange}
      />
      <SearchResults handleClose={handleClose} found={found} />
    </Paper>
  );
}
