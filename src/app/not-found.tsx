import { TemplateRouter } from "@/components/template";
import { getPage } from "@/utils";
import { createMetadata } from "./metadata";

export const generateMetadata = async () => {
  const pageTemplate = await getPage(["not-found"]);
  return createMetadata(pageTemplate);
};

const NotFound = async () => {
  const pageTemplate = await getPage(["not-found"]);

  if (!pageTemplate) {
    return <></>;
  }

  return <TemplateRouter pageTemplate={pageTemplate} />;
};

export default NotFound;
