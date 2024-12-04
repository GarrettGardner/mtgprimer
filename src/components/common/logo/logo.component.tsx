import styles from "./logo.module.scss";

export const Logo = (props: { class?: string }) => {
  return (
    <span className={`${styles.logo}${props.class ? ` ${props.class}` : ""}`}>
      <span>MTG Primer</span>
    </span>
  );
};
