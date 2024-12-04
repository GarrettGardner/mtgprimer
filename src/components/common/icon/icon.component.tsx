import styles from "./icon.module.scss";

export const Icon = (props: { type?: string; slug?: string; slugSecondary?: string }) => {
  let className = props.slug ?? "";
  switch (props.type) {
    case "mana":
      className = `ms ms-cost ms-${props.slug}${props.slugSecondary ? ` ms-${props.slugSecondary}` : ""}`;
      break;
    case "set":
      className = `ss ss-fw ss-${props.slug}${props.slugSecondary ? ` ss-${props.slugSecondary}` : ""}`;
      break;
    case "view":
      switch (props.slug) {
        case "card":
          className = "fas fa-sim-card";
          break;
        case "stack":
          className = "fas fa-layer-group";
          break;
        case "text":
          className = "fas fa-font";
          break;
      }
      break;
  }
  className = `${styles.icon} ${className}`;
  return <i className={className} aria-hidden="true"></i>;
};
