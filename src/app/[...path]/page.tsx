import { TemplateRouter } from "@/components/template";
import { getPage, getPaths } from "@/utils";
import { createMetadata } from "../metadata";

export const generateMetadata = async ({ params }: { params: Promise<{ path: string[] }> }) => {
  const pageTemplate = await getPage((await params).path);
  return createMetadata(pageTemplate);
};

export const generateStaticParams = () => {
  return getPaths();
};

const InnerPage = async ({ params }: { params: Promise<{ path: string[] }> }) => {
  const pageTemplate = await getPage((await params).path);
  if (!pageTemplate) {
    return <></>;
  }

  return <TemplateRouter pageTemplate={pageTemplate} />;
};

export default InnerPage;
