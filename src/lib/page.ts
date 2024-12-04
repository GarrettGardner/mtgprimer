import type { TTemplate } from "@/models";
import { PAGES_CONFIG } from "@/content/global";
import { generatePages } from "@/lib";

let PAGES: TTemplate[] = [];

export const loadPages = async () => {
  if (PAGES.length < 1) {
    PAGES = await generatePages(PAGES_CONFIG);
  }
  return PAGES;
};

export const getPage = async (pathParts: string[]) => {
  const path = `/${pathParts.join("/")}`;
  const page = (await loadPages()).find((page) => page.path === path);
  return page;
};

export const getPaths = async () => {
  const list = (await loadPages())
    .filter((page) => page.path !== "/")
    .map((page) => {
      const path = page.path.split("/");
      path.shift();
      return {
        path,
      };
    });
  return list;
};
