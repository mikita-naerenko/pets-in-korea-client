import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { PROVINCES } from "@/lib/shelters";

export default function SelectComp({
  city,
  setCity,
}: {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleChange = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };

  return (
    <FormControl>
      <InputLabel id="city">Город</InputLabel>
      <Select
        sx={{ width: 100 }}
        labelId="city"
        id="city"
        value={city}
        label="city"
        onChange={handleChange}
      >
        {PROVINCES.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
