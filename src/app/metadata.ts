import { IPageTemplate } from "@/models";

export const createMetadata = (pageTemplate?: IPageTemplate) => {
  if (!pageTemplate) {
    return {
      title: "NOT FOUND",
    };
  }

  return {
    title: pageTemplate.titleFull,
    description: pageTemplate.description,
    opengraph: {
      title: pageTemplate.titleFull,
      description: pageTemplate.description,
      images: [
        {
          url: pageTemplate.backgroundImage,
          alt: pageTemplate.backgroundCaption,
          type: "image/jpg",
        },
      ],
    },
    twitter: {
      title: pageTemplate.titleFull,
      description: pageTemplate.description,
      images: [pageTemplate.backgroundImage],
    },
  };
};
