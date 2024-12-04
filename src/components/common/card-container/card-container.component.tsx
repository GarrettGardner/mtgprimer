"use client";

import { useEffect, useRef, useState } from "react";

import type { ICard } from "@/models";
import { Icon } from "@/components/common";

import styles from "./card-container.module.scss";

export const CardContainer = (props: { card: ICard; stack: boolean }) => {
  const card = props.card;
  const ref = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(card.isFlipped);

  const cardEdges = () => {
    if (ref.current) {
      ref.current.classList.remove("isTop");
      ref.current.classList.remove("isLeft");
      ref.current.classList.remove("isRight");
      if (ref.current.offsetTop < ref.current.offsetHeight) {
        ref.current.classList.add("isTop");
      }
      if (ref.current.offsetLeft < ref.current.offsetWidth) {
        ref.current.classList.add("isLeft");
      }
      if (
        ref.current.parentElement &&
        ref.current.offsetLeft > ref.current.parentElement.offsetWidth - ref.current.offsetWidth * 2
      ) {
        ref.current.classList.add("isRight");
      }
    }
  };

  useEffect(() => {
    cardEdges();

    window.addEventListener("resize", cardEdges);

    return () => window.removeEventListener("resize", cardEdges);
  }, []);

  useEffect(() => cardEdges(), [card]);

  return (
    <div className={`${styles.card}${props.stack ? " isStack" : ""}`} ref={ref}>
      <p>{card.name}</p>
      <div>
        <div
          style={{
            backgroundImage: `url('https://s3-us-west-2.amazonaws.com/mtgprimer/cards/normal/${card.code}/${card.number}.jpg')`,
          }}
        >
          <img
            src={`https://s3-us-west-2.amazonaws.com/mtgprimer/cards/normal/${card.code}/${card.number}.jpg`}
            alt=""
          />
        </div>
        {props.card.isFlippable && (
          <div
            className={`flipFace${isFlipped ? " isFlipped" : ""}`}
            style={{
              backgroundImage: `url('https://s3-us-west-2.amazonaws.com/mtgprimer/cards/normal/${card.code}/${card.number}b.jpg')`,
            }}
          >
            <img
              src={`https://s3-us-west-2.amazonaws.com/mtgprimer/cards/normal/${card.code}/${card.number}b.jpg`}
              alt=""
            />
          </div>
        )}
        <button className="expandButton" title={`${card.number}: ${card.name}`}>
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
