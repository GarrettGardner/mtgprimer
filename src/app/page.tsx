import { TemplateRouter } from "@/components/template";
import { getPage } from "@/utils";
import { createMetadata } from "./metadata";

export const generateMetadata = async () => {
  const pageTemplate = await getPage([]);
  return createMetadata(pageTemplate);
};

const Home = async () => {
  const pageTemplate = await getPage([]);

  if (!pageTemplate) {
    return <></>;
  }

  return <TemplateRouter pageTemplate={pageTemplate} />;
};

export default Home;
