import { TemplateRouter } from "@/components/template";
import { getPage } from "@/lib";
import { createMetadata } from "./metadata";

export const generateMetadata = async () => {
  const template = await getPage(["not-found"]);
  return createMetadata(template);
};

const NotFound = async () => {
  const template = await getPage(["not-found"]);

  if (!template) {
    return <></>;
  }

  return <TemplateRouter template={template} />;
};

export default NotFound;
