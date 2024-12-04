"use client";

import { useState } from "react";

import type { ICard } from "@/models";
import { Icon } from "@/components/common";

import styles from "./card.module.scss";

export const Card = (props: { card: ICard; stack: boolean }) => {
  const [isFlipped, setIsFlipped] = useState(props.card.isFlipped);

  return (
    <div className={`${styles.card}${props.stack ? " isStack" : ""}${props.card.isRotatable ? " isRotated" : ""}`}>
      <p>{props.card.name}</p>
      <div>
        <div
          style={{
            backgroundImage: `url('https://s3-us-west-2.amazonaws.com/mtgprimer/cards/normal/${props.card.code}/${props.card.number}.jpg')`,
          }}
        >
          <img
            src={`https://s3-us-west-2.amazonaws.com/mtgprimer/cards/normal/${props.card.code}/${props.card.number}.jpg`}
            alt=""
          />
        </div>
        {props.card.isFlippable && (
          <div
            className={`flipFace${isFlipped ? " isFlipped" : ""}`}
            style={{
              backgroundImage: `url('https://s3-us-west-2.amazonaws.com/mtgprimer/cards/normal/${props.card.code}/${props.card.number}b.jpg')`,
            }}
          >
            <img
              src={`https://s3-us-west-2.amazonaws.com/mtgprimer/cards/normal/${props.card.code}/${props.card.number}b.jpg`}
              alt=""
            />
          </div>
        )}
        <button className="expandButton" title={`${props.card.number}: ${props.card.name}`}>
          <span className="screen-reader-text">Expand</span>
        </button>
        {props.card.isFlippable && (
          <button
            className={`flipButton${isFlipped ? " isFlipped" : ""}`}
            title="Flip Card"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <span className="icon">
              <span>
                <Icon slug="fas fa-sync-alt" />
              </span>
            </span>
            <span className="screen-reader-text">Flip Card</span>
          </button>
        )}
      </div>
    </div>
  );
};
