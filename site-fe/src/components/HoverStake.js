import styles from "../app/page.module.css";

const HoverStake = () => {
  return (
    <a href="https://rebase.finance" target="_blank">
      <div className={styles.pump}>
        <p>
          <span className={styles.engine}>STAKE</span>
          <br></br>
        </p>
      </div>
    </a>
  );
};
export default HoverStake;
