import styles from "./HoverBuy.module.css";

const HoverBuy = () => {
  return (
    <a href="" target="_blank">
      <div className={styles.buy}>
        <p>
          <span className={styles.engine}>ENGINE</span>
          <br />
          START
        </p>
      </div>
    </a>
  );
};
export default HoverBuy;
