import type { TTemplate } from "@/models";
import { Background, Footer, Header, Mask, Menu } from "@/components/layout";
import {
  TemplateDirectory,
  TemplateGuideGroup,
  TemplateGuide,
  TemplateHome,
  TemplateInfo,
  TemplateNotFound,
} from "@/components/template";

import styles from "./router.module.scss";

export const TemplateRouter = (props: { template: TTemplate }) => {
  const hasMenu = "menu" in props.template;
  let template = <TemplateNotFound />;
  switch (props.template.type) {
    case "home":
      template = <TemplateHome template={props.template} />;
      break;
    case "directory":
      template = <TemplateDirectory template={props.template} />;
      break;
    case "guide-group":
      template = <TemplateGuideGroup template={props.template} />;
      break;
    case "guide":
      template = <TemplateGuide template={props.template} />;
      break;
    case "info":
      template = <TemplateInfo template={props.template} />;
      break;
  }

  return (
    <div className={styles.site}>
      {"menu" in props.template && (
        <>
          <Header />
          <Menu template={props.template} />
        </>
      )}
      <div className="content">
        <Background
          backgroundCaption={props.template.backgroundCaption}
          backgroundImage={props.template.backgroundImage}
          fullWidth={!hasMenu}
        />
        <main role="contentinfo">{template}</main>
        <Footer />
        <Mask />
      </div>
    </div>
  );
};
