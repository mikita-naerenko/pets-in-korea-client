import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchInputSm() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 10px",
        display: { xs: "none", sm: "flex" },
        alignItems: "center",
        width: "100%",
      }}
    >
      <InputBase
        placeholder="Поиск"
        inputProps={{ "aria-label": "поиск по сайту" }}
        sx={{ flexGrow: 1 }}
      />
      <IconButton
        type="button"
        sx={{ p: "10px", pr: 2, flexShrink: 1 }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
