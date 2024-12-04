import { TemplateRouter } from "@/components/template";
import { getPage, getPaths } from "@/lib";
import { createMetadata } from "../metadata";

export const generateMetadata = async ({ params }: { params: Promise<{ path: string[] }> }) => {
  const template = await getPage((await params).path);
  return createMetadata(template);
};

export const generateStaticParams = () => {
  return getPaths();
};

const InnerPage = async ({ params }: { params: Promise<{ path: string[] }> }) => {
  const template = await getPage((await params).path);
  if (!template) {
    return <></>;
  }

  return <TemplateRouter template={template} />;
};

export default InnerPage;
