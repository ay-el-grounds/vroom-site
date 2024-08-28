import styles from "../app/page.module.css";

const Navigation = () => {
  const sep = ". ";

  return (
    <div className={styles.menu}>
      <div className={styles.logo}>
        <a
          href="/"
        >
          <img src="/vroom-logo-red.svg"></img>
        </a>
      </div>
      <div className={styles.navigation}>
        <a
          href=""
          target="_blank"
        >
          Uniswap
        </a>
        {sep}
        <a
          href="https://warpcast.com/~/channel/cars"
          target="_blank"
        >
          /cars
        </a>
        {sep}
        <a
          href="https://basescan.org/address/0x1E6bA8BC42Bbd8C68Ca7E891bAc191F0e07B1d6F"
          target="_blank"
        >
          Basescan
        </a>
        {sep}
        <a
          href="https://zora.co"
          target="_blank"
        >
          Zora
        </a>
        {sep}
        <a
          href="https://www.are.na/brian-felix/vroom-e5x4pc22x14"
          target="_blank"
        >
          Arena
        </a>
        {sep}

        {/* <div>
          <a
              href="https://zora.co"
              target="_blank
          "
            >
            Dexscreener
            </a>
        </div> */}
      </div>
    </div>
  );
};
export default Navigation;
