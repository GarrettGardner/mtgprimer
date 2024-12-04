import type { ICard } from "@/models";
import { Icon } from "@/components/common";

import styles from "./card-text.module.scss";

export const CardText = (props: { card: ICard }) => {
  const card = props.card;
  return (
    <button
      className={`${styles.cardText} color-${card.color}`}
      title={`${card.number}: ${card.name}`}
    >
      <div>
        <div className="name">
          <Icon type="set" slug={card.code} slugSecondary={card.rarity} />
          {card.name}
        </div>
        <div className="mana">
          {card.cost.map((cost, key) => (
            <Icon
              key={key}
              type="mana"
              slug={cost}
              slugSecondary={cost.length === 2 ? "split" : ""}
            />
          ))}
        </div>
      </div>
      <img
        src={`https://s3-us-west-2.amazonaws.com/mtgprimer/cards/normal/${card.code}/${card.number}.jpg`}
        alt={`${card.number}: ${card.name}`}
      />
    </button>
  );
};
