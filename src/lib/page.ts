import type { TTemplate } from "@/models";
import { PAGES_CONFIG } from "@/content/global";
import { generatePages } from "@/lib";

const PAGES: TTemplate[] = [];

export const loadPages = async () =>
  PAGES.length < 1 ? await generatePages(PAGES_CONFIG) : PAGES;

const getLatestInfoPage = async (): Promise<TTemplate | undefined> => {
  const pages = await loadPages();
  return pages.find((page) => page.type === "info");
};

export const getPage = async (pathParts: string[]) => {
  if (pathParts.length === 1 && pathParts[0] === "latest") {
    const latestPage = await getLatestInfoPage();
    if (latestPage) {
      return {
        ...latestPage,
        path: "/latest",
      };
    }
    return undefined;
  }

  const path = `/${pathParts.join("/")}`;
  return (await loadPages()).find((page) => page.path === path);
};

export const getPaths = async () => {
  const paths = (await loadPages())
    .filter((page) => page.path !== "/")
    .map((page) => {
      const path = page.path.split("/");
      path.shift();
      return {
        path,
      };
    });

  paths.push({ path: ["latest"] });

  return paths;
};
