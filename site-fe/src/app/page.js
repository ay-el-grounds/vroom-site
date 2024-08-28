import Image from "next/image";
import styles from "./page.module.css";
import HoverBuy from "@/components/HoverBuy";
import GoogleChart from "@/components/GoogleCharts";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  const chartData = [
    ["Desc.", "Supply"],
    ["Initial LP", 10],
    ["Airdrop 1", 15],
    ["Airdrop 2", 20],
    ["Airdrop 3", 25],
    ["Ecosystem", 20],
    ["LP Rewards", 10],
  ];

  const chartOptions = {
    is3D: true,
    slices: {
      0: { color: "#ECEA5F" },
      1: { color: "#D9261F" },
      2: { color: "#D9261F" },
      3: { color: "#D9261F" },
      4: { color: "#ECEA5F" },
      5: { color: "#2E3432" },
    },
    backgroundColor: "none",
    legend: "none",
    pieSliceText: "label",
    pieSliceTextStyle: {
      color: "#fffff1",
    },
    chartArea: {
      height: "1000",
    },
    tooltip: {
      textStyle: {
        color: "#2E3432",
        fontSize: "25",
        fontName: "IBM Plex Mono",
      },
      text: "percentage",
    },
  };

  return (
    <main className={styles.main}>
      <nav>
        <Navigation />
      </nav>
      <HoverBuy />
      <div className={`${styles.media}`}>
        <img src="ready-set-vroom.png"></img>
      </div>
      <div className={`${styles.block}`}>
        <h2>Introduction</h2>
        <p>
          Welcome to the official{" "}
          <span className={styles.vroomWord}>$VROOM</span> tokenomics guide,
          brought to you by{" "}
          <a href="https://aluminumgrounds.co" target="_blank">
            Aluminum Grounds
          </a>
          . This manual will help you understand the inner workings of your
          $VROOM token and how it powers our community.
        </p>
      </div>
      <div className={`${styles.block}`}>
        <h2>Tokenomics (Operating Instructions for $VROOM)</h2>
        <h3>Overview</h3>
        <p>
          <span className={styles.vroomWord}>$VROOM</span> is a community-owned
          artwork initiated by Aluminum Grounds. Upon launch, we minted ~472.9
          billion tokens ($VROOM), with over n% available for open enrollment to
          all automotive enthusiasts.
        </p>
        <p>
          Launched in June of 2024 on Base with a staking reward on Rebase
          shortly after and an Airdrop planned for the new year.
        </p>
      </div>
      <div className={`${styles.block} ${styles.breakdown}`}>
        <div>
          <h3>Breakdown</h3>
          <p>
            Our token allocation strategy builds off of the backs of the giants
            before us (
            <a href="https://buysomehigher.com" target="_blank">
              $HIGHER
            </a>
            ,{" "}
            <a href="https://enjoy.tech" target="_blank">
              $ENJOY
            </a>
            ,{" "}
            <a href="https://airport.gay" target="_blank">
              $CRASH
            </a>
            ). It is planned to ensure a balanced distribution and support for
            the $VROOM ecosystem.
          </p>
          <p>
            Aluminum Grounds retains 5% of the supply as a fee for deploying
            $VROOM. Additionally, there is a 1% inflation rate set to begin in
            2028.
          </p>
        </div>
        <div>
          <GoogleChart
            data={chartData}
            options={chartOptions}
            width="100%"
            height="300px"
          />
          <div className={styles.note}>
            *15% of Supply is in circulation after Airdrop 1 through the initial
            LP, rewards, & the Rebase incentives.
          </div>
        </div>
      </div>
      <div>
        <dl>
          <dt>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4m0 4h.01" />
              </g>
            </svg>
          </dt>
          <dd>
            $VROOM is a memecoin. Our tokenomics provide clarity on
            distribution, but always conduct your own research. This is not
            financial advice!
          </dd>
        </dl>
      </div>
      <div className={`${styles.block}`}>
        <h2>Airdrop</h2>
        <p>0% of allocated funds have been distributed.</p>
        <p>
          The strategy here is to encourage unification of fans of
          &apos;things&apos; with engines. This includes members of the{" "}
          <a href="https://warpcast.com/~/channel/f1" target="_blank">
            /f1
          </a>
          ,{" "}
          <a
            href="https://warpcast.com/~/channel/velocityvibes"
            target="_blank"
          >
            /velocity vibes
          </a>
          , and{" "}
          <a href="https://warpcast.com/~/channel/drift" target="_blank">
            /drift
          </a>{" "}
          communities on Farcaster. It also includes collectors of car-related
          collections like &quot;
          <a href="https://opensea.io/collection/rustyrollers" target="_blank">
            Rusty Rollers
          </a>
          &quot; by baggy.industries, &quot;
          <a href="https://jaypegsautomart.com/" target="_blank">
            Jay Pegs Auto Mart
          </a>
          ,&quot; and &quot;
          <a
            href="https://opensea.io/collection/drive-dave-krugman"
            target="_blank"
          >
            DRIVE //
          </a>
          .&quot;
        </p>
        <div>
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Status</th>
                <th>Supply %</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Open Enrollment Airdrop (Airdrop 1)</td>
                <td>Planned Airdrop</td>
                <td>15%</td>
              </tr>
              <tr>
                <td>Pit Crew Airdrop (Airdrop 2)</td>
                <td>Coming soon</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>&quot;Creative Name&quot; (Airdrop 3)</td>
                <td>Coming soon</td>
                <td>25%</td>
              </tr>
            </tbody>
          </table>
          <div className={styles.note}>
            *25% of Supply is in circulation after Airdrop 1 through the initial
            LP, rewards, & the Airdrop
          </div>
        </div>
      </div>
      <div className={`${styles.block}`}>
        <h2>Liquidity & Rewards</h2>
        <p>0% of allocated funds have been distributed</p>
        <div>
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Status</th>
                <th>Supply %</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Starting Grid (Initial Pool)</td>
                <td>Coming soon</td>
                <td>15%</td>
              </tr>
              <tr>
                <td>Lap Rewards (Reward Pool)</td>
                <td>Coming soon</td>
                <td>9.5%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.block}>
        <h2>Liquidity Pool</h2>
        <p>0% of allocated funds have been distributed</p>
        <div>
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Status</th>
                <th>Supply %</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Uniswap</td>
                <td>Circulating</td>
                <td>15%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.block}>
        {" "}
        {/* this needs to be revised for clarity */}
        <h2>Ecosystem</h2>
        <div>
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Status</th>
                <th>Supply %</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Open Enrollment</td>
                <td>Circulating</td>
                <td>40%</td>
              </tr>
              <tr>
                <td>Liquidity Pool, Mining, and Airdrops</td>
                <td>Circulating</td>
                <td>25%</td>
              </tr>
              <tr>
                <td>Team and Investors (Pit Crew)</td>
                <td>Circulating</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Ecosystem Support</td>
                <td>Circulating</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>Incentivized Rewards (LP, IRL Activations, etc.)</td>
                <td>Circulating</td>
                <td>5%</td>
              </tr>
            </tbody>
          </table>
          <div className={styles.note}>
            *25% of Supply is in circulation after Airdrop 1 through the initial
            LP, rewards, & the Airdrop
          </div>
        </div>
      </div>
      <div className={`${styles.block}`}>
        <div className={styles.heading}>
          <h2>Maintenance and Support</h2>
        </div>
        <div className={`${styles.copy}`}>
          <p>
            Keep your $VROOM token in peak condition by staying engaged with our
            community.{" "}
            <a href="/contribute">Regular participation and contribution</a>{" "}
            will ensure you get the most out of your investment.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
