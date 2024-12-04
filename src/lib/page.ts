import type { TTemplate } from "@/models";
import { PAGES_CONFIG } from "@/content/global";
import { generatePages } from "@/lib";

let PAGES: TTemplate[] = [];

export const loadPages = async () =>
  PAGES.length < 1 ? await generatePages(PAGES_CONFIG) : PAGES;

export const getPage = async (pathParts: string[]) => {
  const path = `/${pathParts.join("/")}`;
  return (await loadPages()).find((page) => page.path === path);
};

export const getPaths = async () =>
  (await loadPages())
    .filter((page) => page.path !== "/")
    .map((page) => {
      const path = page.path.split("/");
      path.shift();
      return {
        path,
      };
    });
