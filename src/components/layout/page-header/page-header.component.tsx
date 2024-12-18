import { Icon } from "@/components/common";
import styles from "./page-header.module.scss";

export const PageHeader = (props: {
  title: string;
  icon: string;
  formatName: string;
  description: string;
}) => {
  return (
    <>
      <section className={styles.header}>
        <div className="icon">
          <Icon slug={props.icon} />
        </div>
        <div>
          <h1 className="textheader--md margin--none">{props.title}</h1>
          <h2 className="textheader--sm fontfamily--body fontweight--light">
            {props.formatName}
          </h2>
        </div>
      </section>
      <section className={styles.subheader}>
        <div className="icon">
          <Icon slug="fas fa-info-circle" />
        </div>
        <div>
          <h3>{props.description}</h3>
        </div>
      </section>
    </>
  );
};
