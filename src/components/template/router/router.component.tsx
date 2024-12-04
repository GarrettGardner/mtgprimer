import type { TPageTemplate } from "@/models";
import { Background, Footer, Header, Menu } from "@/components/layout";
import {
  TemplateDirectory,
  TemplateGuideGroup,
  TemplateGuide,
  TemplateHome,
  TemplateInfo,
  TemplateNotFound,
} from "@/components/template";

import styles from "./router.module.scss";

export const TemplateRouter = async (props: { pageTemplate: TPageTemplate }) => {
  const hasMenu = "menu" in props.pageTemplate;
  let template = <TemplateNotFound />;
  switch (props.pageTemplate.template) {
    case "home":
      template = <TemplateHome pageTemplate={props.pageTemplate} />;
      break;
    case "directory":
      template = <TemplateDirectory pageTemplate={props.pageTemplate} />;
      break;
    case "guide-group":
      template = <TemplateGuideGroup pageTemplate={props.pageTemplate} />;
      break;
    case "guide":
      template = <TemplateGuide pageTemplate={props.pageTemplate} />;
      break;
    case "info":
      template = <TemplateInfo pageTemplate={props.pageTemplate} />;
      break;
  }

  return (
    <div className={styles.site}>
      {"menu" in props.pageTemplate && (
        <>
          <Header />
          <Menu pageTemplate={props.pageTemplate} />
        </>
      )}
      <div className="content">
        <Background
          backgroundCaption={props.pageTemplate.backgroundCaption}
          backgroundImage={props.pageTemplate.backgroundImage}
          fullWidth={!hasMenu}
        />
        <main role="contentinfo">{template}</main>
        <Footer />
      </div>
    </div>
  );
};
