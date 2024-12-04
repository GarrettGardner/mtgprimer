import Link from "next/link";

import { Icon } from "../icon/icon.component";

import styles from "./circle-link.module.scss";

export const CircleLink = (props: {
  href: string;
  image: string;
  iconType?: string;
  iconSlug?: string;
  title: string;
  subtitle?: string;
  additionalClasses?: string;
}) => {
  return (
    <Link
      href={props.href}
      className={`${styles.circleLink}${props.additionalClasses ? ` ${props.additionalClasses}` : ""}`}
    >
      <div className="image">
        <div className="img" style={{ backgroundImage: `url('${props.image}')` }}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className="format">
          <Icon type={props.iconType} slug={props.iconSlug} />
        </div>
      </div>
      <div className="info">
        <p className="title">{props.title}</p>
        {props.subtitle && <p className="subtitle">{props.subtitle}</p>}
      </div>
    </Link>
  );
};
