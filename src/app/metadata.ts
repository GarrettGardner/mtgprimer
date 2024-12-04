import { ITemplate } from "@/models";

export const createMetadata = (template?: ITemplate) => {
  if (!template) {
    return {
      title: "NOT FOUND",
    };
  }

  return {
    title: template.titleFull,
    description: template.description,
    opengraph: {
      title: template.titleFull,
      description: template.description,
      images: [
        {
          url: template.backgroundImage,
          alt: template.backgroundCaption,
          type: "image/jpg",
        },
      ],
    },
    twitter: {
      title: template.titleFull,
      description: template.description,
      images: [template.backgroundImage],
    },
  };
};
