import Image from "next/image";
import styles from "./page.module.css";
import HoverBuy from "@/components/HoverBuy";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HoverStake from "@/components/HoverStake";
import Radio from "@/components/Radio";

export default function Home() {
  return (
    <main className={styles.main}>
      <nav>
        <Navigation />
      </nav>
      <HoverBuy />
      <HoverStake />
      <Radio />
      <div className={styles.media}>
        <div className={styles.diagramImg}>
          <img src="/001.png"></img>
        </div>
        <div className={styles.note}>Fig 1. Guide for acquiring a Race Bib</div>
      </div>
      <div className={`${styles.block}`}>
        <p>
          Welcome to the official{" "}
          <span className={styles.vroomWord}>$VROOM</span> guide, brought to you
          by{" "}
          <a href="https://aluminumgrounds.co" target="_blank">
            Aluminum Grounds
          </a>
          .
        </p>
        <p>
          <span className={styles.vroomWord}>$VROOM</span> is for those who love
          to build and take pride in their creations. That&apos;s what
          we&apos;re all revving our engines for, isn&apos;t it?
        </p>
        <p>
          <span className={styles.vroomWord}>$VROOM</span>&apos;s mission is to
          inspire a new generation of builders to get involved in on-chain
          social, fuel creator grants, and bring more car content creators on to
          platforms like Farcaster and Zora.
        </p>
      </div>
      <div className={`${styles.block}`}>
        <h2>Tokenomics (Operating Instructions for $VROOM)</h2>
        <h3>Introduction</h3>
        <p>
          <span className={styles.vroomWord}>$VROOM</span> is a community-owned
          artwork initiated by Aluminum Grounds.{" "}
          <span className={styles.vroomWord}>$VROOM</span> launched in June 2024
          on the Base blockchain with an initial mint of ~472.9 billion tokens.
        </p>
        <p>
          15% of the total supply is currently available for open enrollment
          (via <a href="https://rebase.finance" target="_blank">Rebase</a>), inviting all builders to join the ride.
        </p>
        <p>
          Following our launch, we&apos;ve planned a race sequence to distribute{" "}
          <span className={styles.vroomWord}>$VROOM</span>, including funding
          through Rounds.wtf, and an airdrop scheduled for 2025.
        </p>
      </div>
      <div className={`${styles.block}`}>
        <h3>Starting Line</h3>
        <p>
          Our token allocation strategy builds off of the backs of the giants
          before us (
          <a
            href="https://higher.party"
            target="_blank"
            previewlistener="true"
          >
            $HIGHER
          </a>
          ,{" "}
          <a href="https://enjoy.tech" target="_blank" previewlistener="true">
            $ENJOY
          </a>
          ,{" "}
          <a href="https://airport.gay" target="_blank" previewlistener="true">
            $CRASH
          </a>
          ).
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
                <td>Aluminum Grounds</td>
                <td><span className={styles.blueButt}>Deployed</span></td>
                <td>5%</td>
              </tr>
              <tr>
                <td>Staking Programs on Rebase ($HIGHER, $CRASH)</td>
                <td><span className={styles.greenButt}>Circulating</span></td>
                <td>25%</td>
              </tr>
              <tr>
                <td>Liquidity Mining</td>
                <td><span className={styles.redButt}>Coming soon</span></td>
                <td>25%</td>
              </tr>
              <tr>
                <td>Creator Rewards (Rounds.wtf)</td>
                <td><span className={styles.yellowButt}>Testing</span></td>
                <td>15%</td>
              </tr>
              <tr>
                <td>Airdrop</td>
                <td><span className={styles.neutralButt}>Planned</span></td>
                <td>10%</td>
              </tr>
              <tr>
                <td>Grants for Builders</td>
                <td><span className={styles.neutralButt}>Planned</span></td>
                <td>10%</td>
              </tr>
              <tr>
                <td>Community Treasury</td>
                <td><span className={styles.greenButt}>Circulating</span></td>
                <td>10%</td>
              </tr>
            </tbody>
          </table>
          <div className={styles.note}>
            *25% of initial supply is in circulation after Staking Programs.
          </div>
        </div>
        <div className={styles.stage}>
          Aluminum Grounds (5%) <span className={styles.blueButt}>Deployed</span>
        </div>
        <ul>
          <li>
            Allocation: 5% (~23.647 billion tokens) has already been allocated
            to the Aluminum Grounds as a fee for writing and deploying the smart
            contract.
          </li>
          <li>
            Rationale: Aligns their long-term incentives with the project.
          </li>
        </ul>
      </div>
      <h3>Ignition Sequence</h3>
      <div className={styles.stage}>
        Open Enrollment (25%) <span className={styles.greenButt}>Circulating</span>
      </div>
      <h4>Staking Rewards on Rebase</h4>
      <p>
        To secure your position on the track we&apos;ve opened enrollment on
        Rebase. Stake $HIGHER and $CRASH tokens to start earning{" "}
        <span className={styles.vroomWord}>$VROOM</span>. This is your entry
        point into the ecosystem, where early participation provides the
        foundation for future rewards. our purpose here is to build synergy
        across other tokens.
      </p>
      <ul>
        <li>
          Allocation: 25% (~118.239 billion tokens) reserved for rewarding
          $HIGHER and $CRASH stakers.
        </li>
      </ul>
      <div className={styles.media}>
        <div className={styles.diagramImg}>
          <img src="/race-track.png"></img>
        </div>
        <div className={styles.note}>Fig 1. How to get around the &apos;track&apos; most efficiently</div>
      </div>

      <div className={`${styles.block}`}>
        <div className={styles.stage}>
          Liquidity Complex (25%) <span className={styles.neutralButt}>Planned</span>
        </div>
        <h4>LP Rewards</h4>
        <p>0% of allocated funds have been distributed</p>
        <p>
          Starting the liquidity mining stage, builders will have an opportunity
          to stake their earned <span className={styles.vroomWord}>$VROOM</span>{" "}
          through mining time trials or sprints.
        </p>
        <p>
          Members who provide liquidity in VROOM/ETH and VROOM/USDC pairs will
          earn rewards over time. The rewards will be distributed in proportion
          to the amount and duration of liquidity provided.
        </p>
        <ul>
          <li>Launch Date: TBD</li>
          <li>
            Allocation: 25% (~118.239 billion tokens) allocated to liquidity
            mining rewards for members who help provide liquidity to{" "}
            <span className={styles.vroomWord}>$VROOM</span> pools.
          </li>
        </ul>
        <div className={styles.stage}>
          Rounds Chicane (15%) <span className={styles.yellowButt}>Testing</span>
        </div>
        <h4>Creator Rewards</h4>
        <p>0% of allocated funds have been distributed</p>
        <p>
          Using Rounds.wtf, we will reward people who generate engaging content
          centered around cars and automotive culture. Memes, AMAs, videos, and
          original content will all be eligible for{" "}
          <span className={styles.vroomWord}>$VROOM</span> rewards.
        </p>
        <p>
          In addition to that, we will reward farcasters that onboard car
          builders and conduct an AMA on their builds.
        </p>
        <ul>
          <li>
            Purpose: Empower content creators to fuel engagement and growth.
          </li>
          <li>
            Allocation: 15% (~70.943 billion tokens) allocated to creator
            rewards.
          </li>
        </ul>
        <div className={styles.stage}>
          Airdrop Straight (10%) <span className={styles.neutralButt}>Planning</span>
        </div>
        <h4></h4>
        <p>0% of allocated funds have been distributed.</p>
        <p>
          This is where we floor it. We&apos;ll announce the parameters for
          participation a month in advance, targeting specific Farcaster
          channels and NFT collections.
        </p>
        <div>
          <table>
            <thead>
              <tr>
                <th>Community</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="https://jaypegsautomart.com/" target="_blank">
                    Jay Pegs Auto Mart
                  </a>
                </td>
                <td><span className={styles.yellowButt}>Pending Approval</span></td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://opensea.io/collection/rustyrollers"
                    target="_blank"
                  >
                    Rusty Rollers
                  </a>
                </td>
                <td><span className={styles.yellowButt}>Pending Approval</span></td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://opensea.io/collection/drive-dave-krugman"
                    target="_blank"
                  >
                    DRIVE // by Dave Krugman
                  </a>
                </td>
                <td><span className={styles.yellowButt}>Pending Approval</span></td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://warpcast.com/~/channel/unique-vehicles"
                    target="_blank"
                  >
                    /unique-vehicles on Farcaster
                  </a>
                </td>
                <td><span className={styles.yellowButt}>Pending Approval</span></td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://warpcast.com/~/channel/drift/default"
                    target="_blank"
                  >
                    /drift on Farcaster
                  </a>
                </td>
                <td><span className={styles.yellowButt}>Pending Approval</span></td>
              </tr>
              <tr>
                <td>
                  <a href="https://cvrdcrs.com/" target="_blank">
                  CVRD by Karin Apollonia Mueller and Peter Nitsch
                  </a>
                </td>
                <td><span className={styles.yellowButt}>Researching</span></td>
              </tr>
            </tbody>
          </table>
          <div className={styles.note}></div>
        </div>
        <div className={styles.stage}>
          Builder Grants (10%) <span className={styles.neutralButt}>Planning</span>
        </div>
        <h4></h4>
        <p>
          Supports innovation in car construction, funding real-world automotive
          projects as well as onboarding content creators that focus on car content.
        </p>
      </div>
      <div className={`${styles.block}`}>
        <h3>Supply Management</h3>
      <p>
        A community-driven governance model allows token holders to vote on
        supply control, so <span className={styles.vroomWord}>$VROOM</span>{" "}
        adapts to evolving market conditions and community needs.
      </p>
      <h4></h4>
      <ul>
        <li>
          Inflation: A maximum of approximately 4.729 billion tokens can be
          introduced annually. This is a community-driven event with allocations
          aimed to sustain grants and reward programs, ensuring adaptability and
          longevity.
        </li>
        <li>
          Burn Rubber: Community events to burn tokens, counteracting inflation
          effects.
        </li>
      </ul>
      </div>
      {/* 
      <div className={`${styles.block}`}>
        <h2>Airdrop</h2>
        <p>
          The strategy here is to encourage unification of fans of
          things with engines. This includes members of the{" "}
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
        </p>
      </div>
      <div className={`${styles.block}`}>
        <h2>Liquidity & Rewards</h2>
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
      </div> */}
      <Footer />
    </main>
  );
}
