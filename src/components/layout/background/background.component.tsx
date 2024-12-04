import styles from "./background.module.scss";

export const Background = (props: {
  backgroundCaption?: string;
  backgroundImage?: string;
  fullWidth: boolean;
}) => {
  return (
    <>
      {props.backgroundImage && (
        <div
          className={`${styles.background}${props.fullWidth ? " fullWidth" : ""}`}
        >
          <div
            className={styles.image}
            style={{ backgroundImage: `url('${props.backgroundImage}')` }}
          >
            <img src={props.backgroundImage} alt={props.backgroundCaption} />
          </div>
          {props.backgroundCaption && (
            <div className={styles.caption}>{props.backgroundCaption}</div>
          )}
        </div>
      )}
    </>
  );
};
