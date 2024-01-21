import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper/Paper";
import { useState, useRef, useCallback, Dispatch, SetStateAction } from "react";
import searchAll from "@/actions/searchAll";
import { SearchResponse } from "@/lib/type";
import SearchResults from "./search-results";
import { SearchInputStylesSm } from "./styles";

export default function SearchInputSm({
  handleClose,
}: {
  handleClose: Dispatch<SetStateAction<boolean>>;
}) {
  const debounceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [found, setFound] = useState<SearchResponse | "">("");
  const [loading, setLoading] = useState(false);

  type AnyFunction = () => Promise<SearchResponse>;

  function debounce(func: AnyFunction, delay: number) {
    return function (...args: []) {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
      debounceTimeout.current = setTimeout(async () => {
        try {
          setLoading(true);
          const result: undefined | SearchResponse = await func(...args);
          setFound(result);
          setLoading(false);
          debounceTimeout.current = null;
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
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
    <Paper component="form" sx={SearchInputStylesSm}>
      <InputBase
        placeholder="Поиск"
        inputProps={{ "aria-label": "поиск по сайту" }}
        sx={{ flexGrow: 1 }}
        onChange={memoHandleChange}
      />
      <SearchResults
        loading={loading}
        found={found}
        handleClose={handleClose}
      />
    </Paper>
  );
}
