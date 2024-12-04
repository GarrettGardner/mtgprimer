import { TemplateRouter } from "@/components/template";
import { getPage } from "@/lib";
import { createMetadata } from "./metadata";

export const generateMetadata = async () => {
  const template = await getPage([]);
  return createMetadata(template);
};

const Home = async () => {
  const template = await getPage([]);

  if (!template) {
    return <></>;
  }

  return <TemplateRouter template={template} />;
};

export default Home;
