"use client";

import { useState } from "react";

import type { ICard } from "@/models";
import { Icon } from "@/components/common";

import styles from "./card.module.scss";

export const Card = (props: { card: ICard; stack: boolean }) => {
  const [isTransformed, setIsTransformed] = useState(props.card.isTransformed);

  const imageUrl = `https://s3-us-west-2.amazonaws.com/mtgprimer/cards/normal/${props.card.code}/${props.card.number}.jpg`;
  const imageTransformedUrl = `https://s3-us-west-2.amazonaws.com/mtgprimer/cards/normal/${props.card.code}/${props.card.number}b.jpg`;

  const isTransformable =
    ["transform", "modal_dfc"].findIndex(
      (layout) => layout === props.card.layout,
    ) > -1;

  return (
    <div className={`${styles.card}${props.stack ? " isStack" : ""}`}>
      <p>{props.card.name}</p>
      <div>
        <div
          style={{
            backgroundImage: `url('${imageUrl}')`,
          }}
        >
          <img src={imageUrl} alt="" />
        </div>
        {isTransformable && (
          <div
            className={`transformFace${isTransformed ? " isTransformed" : ""}`}
            style={{
              backgroundImage: `url('${imageTransformedUrl}')`,
            }}
          >
            <img src={imageTransformedUrl} alt="" />
          </div>
        )}
        <button
          className="expandButton"
          title={`${props.card.number}: ${props.card.name}`}
        >
          <span className="screen-reader-text">Expand</span>
        </button>
        {isTransformable && (
          <button
            className={`transformButton`}
            title="Transform Card"
            onClick={() => setIsTransformed(!isTransformed)}
          >
            <span className={`icon${isTransformed ? " isTransformed" : ""}`}>
              <span>
                <Icon slug="fas fa-sync-alt" />
              </span>
            </span>
            <span className="screen-reader-text">Transform Card</span>
          </button>
        )}
      </div>
    </div>
  );
};
