import Footer from "@/components/Footer";
import styles from "../../app/page.module.css";
import HoverBuy from "@/components/HoverBuy";
import Navigation from "@/components/Navigation";

export default function Contribute() {
  return (
    <main className={styles.main}>
      <nav>
        <Navigation />
      </nav>
      <HoverBuy />
      <div className={styles.media}>
        <div className={styles.mediaImg}>
          <img src="/000580.jpg"></img>
        </div>
        <div className={styles.note}>Fig 1. Guide for acquiring a Race Bib</div>
      </div>
      <div className={`${styles.block}`}>
        <h2>Contribute</h2>
        <p>
          This guide outlines how to live and breathe{" "}
          <span className={styles.vroomWord}>$VROOM</span>.
        </p>
      </div>
      <div className={styles.block}>
        <h3>Index</h3>
        <ol className={styles.index}>
          <li>
            <a href="">Branding Tenets</a>
          </li>
          <li>
            <a href="">Joining the Inner Donut</a>
          </li>
          <li>
            <a href="">Assembly Line</a>
          </li>
          <li>
            <a href="#emblem">Emblem (soon)</a>
          </li>
          <li>
            <a href="#imagery">Imagery (soon)</a>
          </li>
          <li>
            <a href="#typography">Typography (soon)</a>
          </li>
        </ol>
      </div>

      <div className={`${styles.block}`}>
        <div className={styles.heading}>
          <h2>Branding Tenets</h2>
        </div>
        <div className={`${styles.copy}`}>
          <h3>1. Be Authentic</h3>
          <p>
            <span className={styles.vroomWord}>$VROOM</span> thrives on genuine
            passion for automotive excellence. Let this authenticity fuel your
            contributions.
          </p>
          <h3>2. Stick to Protocols</h3>
          <p>
            Think of these standards as your race regulations. Adhere to them
            meticulously to stay on track.
          </p>
          <h3>3. Innovate Always</h3>
          <p>
            <span className={styles.vroomWord}>$VROOM</span> is about pushing
            the limits. Burn rubber and reflect this in every aspect of your
            contribution.
          </p>
          <h3>4. Detail Obsession</h3>
          <p>
            Precision wins races. From visuals to messaging, ensure everything
            aligns with the <span className={styles.vroomWord}>$VROOM</span>{" "}
            brand.
          </p>
          <h3>5. Collaborate Hard</h3>
          <p>
            Racing is a team sport. Work with others who share the{" "}
            <span className={styles.vroomWord}>$VROOM</span> vision to draft
            ahead and achieve more together.
          </p>
        </div>
      </div>
      <div className={`${styles.block}`}>
        <div className={styles.heading}>
          <h2>Joining the Inner Donut</h2>
        </div>
        <div className={`${styles.block}`}>
          <ol>
            <li>
              Utilize <span className={styles.vroomWord}>$VROOM</span> brand
              assets to contribute to the meme economy while adhereing to our
              guidelines.
            </li>
            <li>Share your creations through our Race Bib Form.</li>
            <li>
              Selected works will be featured across our social channels,
              amplifying your reach within the{" "}
              <span className={styles.vroomWord}>$VROOM</span> community. If
              your creation is selected for minting, you&apos;ll be invited to
              our Zora collection yadda yadda.
            </li>
            <li>
              Contributors with a Race Bib NFT become esteemed members of the
              $VROOM Inner Donut. As a member, you&apos;ll share in our token
              rewards, including access to a 250M $VROOM pool.
            </li>
            <li>
              Racing is a team sport. Work with others who share the vision to
              draft ahead.
            </li>
          </ol>
          <p>
            As our memes gain traction among fans and spectators alike, this
            refueling process becomes more frequent and impactful, driving us
            forward with every lap.
          </p>
        </div>
      </div>
      <div className={`${styles.block}`}>
        <h2>$VROOM on the Assembly Line</h2>
        <p>
          As the world embraces electric vehicles,{" "}
          <span className={styles.vroomWord}>$VROOM</span> captures and
          immortalizes the beautiful sounds in a deeply abstracted way on a
          digital medium.
        </p>
        <p>
          <span className={styles.vroomWord}>$VROOM</span> dropped on June 25th.
          In a month packed with automotive history (and also{" "}
          <span className={styles.red}>P</span>
          <span className={styles.yellow}>R</span>
          <span className={styles.green}>I</span>
          <span className={styles.blue}>D</span>
          <span className={styles.violet}>E</span>).{" "}
          <span className={styles.vroomWord}>$VROOM</span> celebrates milestones
          like the first auto race, the premiere of The Fast and the Furious
          franchise, the release of{" "}
          <a href="https://www.imdb.com/title/tt0187078/" target="_blank">
            Gone in Sixty Seconds
          </a>
          , and{" "}
          <a href="https://www.imdb.com/title/tt0187078/" target="_blank">
            Cars
          </a>{" "}
          (the Pixar film) — so as it turns out, cars are gay.
        </p>
        <p>
          In our universe, <span className={styles.vroomWord}>$VROOM</span>{" "}
          transcends mere tokenization—it&apos;s a cultural statement. It
          playfully critiques traditional industries while fostering a
          community-driven approach to redefining gasoline-powered love in the
          digital age.
        </p>
      </div>
      <div className={`${styles.block}`}>
        <h2>
          <a name="emblem">Emblem</a>
        </h2>
        <p>🚧 Work in progress</p>
      </div>
      <div className={`${styles.block}`}>
        <h2>
          <a name="imagery">Imagery</a>
        </h2>
        <p>🚧 Work in progress</p>
      </div>
      <div className={`${styles.block}`}>
        <h2>
          <a name="typography">Typography</a>
        </h2>
        <p>🚧 Work in progress</p>
      </div>
      <Footer />
    </main>
  );
}
