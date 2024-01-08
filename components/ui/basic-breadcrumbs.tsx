"use client";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";
import { useMemo } from "react";

interface BreadcrumbItem {
  href: string;
  label: string;
}

const getBreadcrumbs = (
  pathArr: string[],
  navItems: { href: string; label: string }[],
  currentPage: string | undefined
): BreadcrumbItem[] => {
  return [
    ...navItems.filter((p) => pathArr.includes(p.href.slice(1))),
    ...(currentPage ? [{ href: "#", label: currentPage }] : []),
  ];
};

export default function BasicBreadcrumbs({
  currentPage,
}: {
  currentPage: string | undefined;
}) {
  const pathname = usePathname();
  const pathArr: string[] = useMemo(() => pathname.split("/"), [pathname]);

  const breadcrumbs = getBreadcrumbs(pathArr, NAV_ITEMS, currentPage);

  if (!breadcrumbs.length) {
    return null;
  }

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {breadcrumbs.map((item, i) => {
        return i !== breadcrumbs.length - 1 ? (
          <Link
            key={item.label}
            underline="hover"
            color="inherit"
            href={item.href}
          >
            {item.label}
          </Link>
        ) : (
          <Typography key={item.label} color="text.primary">
            {item.label}
          </Typography>
        );
      })}
    </Breadcrumbs>
  );
}
