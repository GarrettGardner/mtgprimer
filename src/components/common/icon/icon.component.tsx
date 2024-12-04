export const Icon = (props: { type?: string; slug?: string; slugSecondary?: string }) => {
  let className = props.slug ?? "";
  switch (props.type) {
    case "mana":
      className = `ms ms-cost ms-${props.slug}${props.slugSecondary ? ` ms-${props.slugSecondary}` : ""}`;
      break;
    case "set":
      className = `ss ss-fw ss-${props.slug}${props.slugSecondary ? ` ss-${props.slugSecondary}` : ""}`;
      break;
  }
  return <i className={className} aria-hidden="true"></i>;
};
