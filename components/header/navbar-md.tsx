import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { NAV_ITEMS } from "@/lib/constants";
import Container from "@mui/material/Container";

import { useEffect } from "react";

export default function NavbarMd() {
  const pathname = usePathname();

  const [value, setValue] = React.useState(0);

  useEffect(() => {
    // Find the index of the tab with a matching href
    const index = NAV_ITEMS.findIndex((item) => {
      return pathname.includes(item.href) && item.href !== "/";
    });

    // Update the tab value if a match is found
    if (index !== -1) {
      setValue(index);
    } else {
      // Value will set as 0 because above pathname.includes(item.href) && item.href !== "/";
      //If pathname unknown main page tab will be mark as current
      setValue(0);
    }
  }, [pathname]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container disableGutters>
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: "100%",
          bgcolor: "primary",
          display: { xs: "none", md: "block" },
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          indicatorColor="secondary"
          textColor="inherit"
          scrollButtons
          aria-label="visible arrows tabs example"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
        >
          {NAV_ITEMS.map((item) => (
            <Tab
              component={Link}
              href={item.href}
              key={item.href}
              label={item.label}
              prefetch={false}
            />
          ))}
        </Tabs>
      </Box>
    </Container>
  );
}
