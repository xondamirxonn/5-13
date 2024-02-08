import { Select, Stack, MenuItem, Button } from "@mui/material";
import React from "react";
import { UserIcon } from "../../../../assets/icon/user-icon";
import { COLORS } from "../../../../config/color";

export const Login = () => {
  const [lang, setLang] = React.useState("uz");
  const selectLang = (e) => {
    setLang(e.target.value);
  };
  return (
    <Stack direction="row" gap="20px" alignItems="center">
      <Select
        IconComponent={UserIcon}
        value={lang}
        sx={{ width: "105px", bgcolor: COLORS.secondary }}
        onChange={selectLang}
      >
        <MenuItem value={"uz"}>uz</MenuItem>
        <MenuItem value={"ru"}>ru</MenuItem>
        <MenuItem value={"eng"}>eng</MenuItem>
      </Select>
      <Button
       
        startIcon={<UserIcon />}
        variant="contained"
      >
        Kirish
      </Button>
    </Stack>
  );
};
