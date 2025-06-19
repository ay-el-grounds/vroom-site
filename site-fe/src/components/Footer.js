import styles from "../app/page.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* <div className={`${styles.communityGridItem} ${styles.uniswap}`}>
          <div>
            <a
              href=""
              target="_blank
          "
            >
              Uniswap
            </a>
          </div>
        </div> */}
      <p className={styles.fineprint}>
        Note that purchasing cryptocurrency involves inherent risks, as the
        value of digital assets can be highly volatile and subject to market
        fluctuations. This token is not a guarantee of financial return or
        investment success, and you should only invest after conducting your own
        research and what you can afford to lose.
      </p>
      <div className={`${styles.communityGridItem} ${styles.warpcast}`}>
        <a
          href="https://warpcast.com/~/channel/cars"
          target="_blank
          "
        >
          /cars
        </a>
      </div>
      <div className={`${styles.communityGridItem} ${styles.warpcast}`}>
        <a
          href="https://warpcast.com/~/channel/unique-vehicles"
          target="_blank
          "
        >
          /unique-vehicles
        </a>
      </div>
      <div className={`${styles.communityGridItem} ${styles.warpcast}`}>
        <a
          href="https://warpcast.com/~/channel/drift"
          target="_blank
          "
        >
          /drift
        </a>
      </div>
      <div className={`${styles.communityGridItem} ${styles.basescan}`}>
        <div>
          <a
            href="https://basescan.org/address/0x1E6bA8BC42Bbd8C68Ca7E891bAc191F0e07B1d6F"
            target="_blank
          "
          >
            Basescan (CA)
          </a>
        </div>
      </div>
      {/*         <div className={`${styles.communityGridItem} ${styles.zora}`}>
          <div>
            <a
              href="https://zora.co"
              target="_blank
          "
            >
              Zora
            </a>
          </div>
        </div> */}
      <div className={`${styles.communityGridItem} ${styles.arena}`}>
        <div>
          <a
            href="https://www.are.na/brian-felix/vroom-e5x4pc22x14"
            target="_blank"
          >
            Arena
          </a>
        </div>
      </div>
      {/* <div className={styles.zoraContainer}>
          <div>
          <a
              href="https://zora.co"
              target="_blank
          "
            >
            Dexscreener
            </a>
          </div>
        </div> */}
    </div>
  );
};
export default Footer;
