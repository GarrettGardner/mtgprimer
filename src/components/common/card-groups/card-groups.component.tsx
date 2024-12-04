"use client";

import { useEffect, useRef } from "react";

import type { IFilter, IGuide } from "@/models";
import { useFilters } from "@/hooks";
import { Card, CardText, Icon } from "@/components/common";

import styles from "./card-groups.module.scss";

export const CardGroups = (props: { guide: IGuide; filter: IFilter }) => {
  const { filterSelections, groups } = useFilters(
    props.guide.cards,
    props.filter,
  );
  const refs = useRef<Record<string, HTMLLIElement>>({});

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
          element.offsetLeft >
            element.parentElement.offsetWidth - element.offsetWidth * 1.75
        ) {
          element.classList.add("isRight");
        }
      });
  };

  useEffect(() => {
    window.addEventListener("resize", cardEdges);

    cardEdges();

    return () => window.removeEventListener("resize", cardEdges);
  }, []);

  useEffect(() => cardEdges(), [filterSelections, groups]);

  const areAllCardsFiltered =
    groups.length < 1 || (groups.length === 1 && groups[0].cards.length < 1);

  return (
    <section
      className={`${styles.guide}${
        filterSelections.view === "stack" ? " isViewStacked" : ""
      }${filterSelections.view === "text" ? " isViewText" : ""}`}
    >
      {props.guide.cards.length > 0 ? (
        <>
          {!areAllCardsFiltered ? (
            <ul>
              {groups.map((group, key) => (
                <li key={`${props.guide.key}-${group.key}`}>
                  {(key > 0 ||
                    (group.icon === "category" &&
                      !!group.header &&
                      group.header !== "default")) && (
                    <div className="headerText">
                      {group.icon === "category" && !!group.header
                        ? (props.filter.options.categories?.[group.header] ??
                          "")
                        : ""}
                    </div>
                  )}
                  <div className="cards">
                    <div className="headerIcon">
                      {group.icon === "color" || group.icon === "mv" ? (
                        group.header === "m" ? (
                          <span className="circle gold"></span>
                        ) : (
                          <Icon type="mana" slug={group.header} />
                        )
                      ) : group.icon === "rarity" ? (
                        <Icon
                          type="set"
                          slug={props.guide.code}
                          slugSecondary={group.header}
                        />
                      ) : group.icon === "category" ? (
                        <span className="text">
                          {group.header
                            ? (props.filter.options.categories?.[
                                group.header
                              ] ?? "-")
                            : "-"}
                        </span>
                      ) : (
                        <span className="text">{group.header ?? ""}</span>
                      )}
                    </div>
                    <ul>
                      {group.cards.map((card) => {
                        const key = `${props.guide.key}-${group.key}-${card.name}`;
                        return (
                          <li
                            key={key}
                            ref={(ref) => {
                              if (ref) refs.current[key] = ref;
                            }}
                          >
                            {filterSelections.view === "text" ? (
                              <CardText card={card} />
                            ) : (
                              <Card
                                card={card}
                                stack={filterSelections.view === "stack"}
                              />
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
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
