"use client";

import { useEffect, useRef } from "react";

import type { IFilters, IGuide } from "@/models";
import { useFilters } from "@/hooks";
import { Card, CardText, Icon } from "@/components/common";

import styles from "./card-groups.module.scss";

export const CardGroups = (props: { guide: IGuide; defaultFilters: IFilters }) => {
  const { filters, groups } = useFilters(props.guide.cards, props.defaultFilters);
  const refs = useRef<{ [key: string]: HTMLLIElement }>({});

  const cardEdges = () => {
    refs.current &&
      Object.keys(refs.current).forEach((key) => {
        const element = refs.current[key];
        if (!element) {
          return;
        }

        element.classList.remove("isTop");
        element.classList.remove("isLeft");
        element.classList.remove("isRight");
        if (element.offsetTop < element.offsetHeight) {
          element.classList.add("isTop");
        }
        if (element.offsetLeft < element.offsetWidth) {
          element.classList.add("isLeft");
        }
        if (
          element.parentElement &&
          element.offsetLeft > element.parentElement.offsetWidth - element.offsetWidth * 1.75
        ) {
          element.classList.add("isRight");
        }
      });
    console.log(refs.current);
  };

  useEffect(() => {
    window.addEventListener("resize", cardEdges);

    cardEdges();

    return () => window.removeEventListener("resize", cardEdges);
  }, []);

  useEffect(() => cardEdges(), [filters, groups]);

  const areAllCardsFiltered = groups.length === 1 && groups[0].cards.length < 1;

  return (
    <section
      className={`${styles.guide}${
        filters.view === "stack" ? " isViewStacked" : ""
      }${filters.view === "text" ? " isViewText" : ""}`}
    >
      {props.guide.cards.length > 0 ? (
        <>
          {!areAllCardsFiltered ? (
            <ul>
              {groups.map((group, key) => (
                <li key={key}>
                  <h3>
                    {group.icon === "color" || group.icon === "mv" ? (
                      group.header === "m" ? (
                        <span className="circle gold"></span>
                      ) : (
                        <Icon type="mana" slug={group.header} />
                      )
                    ) : group.icon === "rarity" ? (
                      <Icon type="set" slug={props.guide.code} slugSecondary={group.header} />
                    ) : group.icon === "category" && group.header ? (
                      <span className="text">{props.guide.categories?.[group.header]}</span>
                    ) : (
                      (group.header ?? "")
                    )}
                  </h3>
                  <ul>
                    {group.cards.map((card, key) => (
                      <li
                        key={`${card.code}-${card.number}`}
                        ref={(ref) => {
                          if (ref) refs.current[`${card.code}-${card.number}`] = ref;
                        }}
                      >
                        {filters.view === "text" ? (
                          <CardText card={card} />
                        ) : (
                          <Card card={card} stack={filters.view === "stack"} />
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          ) : (
            <h4>No cards fit those filters!</h4>
          )}
        </>
      ) : (
        <h4>This guide contains no cards!</h4>
      )}
    </section>
  );
};
