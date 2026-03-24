import Footer from "@/components/Footer";
import styles from "../../app/page.module.css";
import HoverBuy from "@/components/HoverBuy";
import Navigation from "@/components/Navigation";
import HoverStake from "@/components/HoverStake";
import Radio from "@/components/Radio";

export default function Contribute() {
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
          <img src="/008.jpg"></img>
        </div>
        <div className={styles.note}>Fig 1. Guide for acquiring a Race Bib</div>
      </div>
      <div className={styles.manualContent}>
        <section>
          <h2>$VROOM Contribution Manual</h2>
          <p className={styles.subtitle}>
            Being fast is easy. Staying fast takes skill.
          </p>
          <p>
            <strong>This is for the builders.</strong>
          </p>
          <p>
            Not the spectators. Not the flippers. The ones still in the garage
            when everyone else has gone home.
          </p>
          <p>
            <span className={styles.vroomWord}>$VROOM</span> runs on content
            the same way an engine runs on fuel. If you&apos;re filming your
            build, shooting your car, or capturing the culture — that&apos;s
            the work. This manual is how you plug in.
          </p>
        </section>

        <section className={styles.manualSection}>
          <h3>Index</h3>
          <div className={styles.indexBlock}>
          <ol type="i" className={styles.index}>
            <li>
              <a href="#tenets">Tenets</a>
            </li>
            <li>
              <a href="#race-bib">Getting a Race Bib</a>
            </li>
            <li>
              <a href="#log-a-lap">Log a Lap</a>
            </li>
            <li>
              <a href="#assembly-line">Assembly Line</a>
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
          <div>
          <h3>IMPORTANT LINKS</h3>
          <ul className={styles.index}>
            <li>
          Brand Assets{" "}
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            focusable="false"
            color="currentColor"
          >
            <g color="currentColor" weight="regular">
              <path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"></path>
            </g>
          </svg>
          </li>
          <li>
          Telegram (soon?)
          </li>
          </ul>
          </div>
        </section>

        <section className={styles.manualSection}>
          <h3>
            <a name="tenets">i. Tenets</a>
          </h3>
          <p className={styles.subtitle}>⊗ Authenticity</p>
          <p>
            <span className={styles.vroomWord}>$VROOM</span> thrives on genuine
            passion for excellence. Let that passion fuel your contributions.
          </p>
          <p className={styles.subtitle}>⊗ Innovate Always</p>
          <p>
            <span className={styles.vroomWord}>$VROOM</span> is about pushing
            the limits. Burn rubber and reflect this in every aspect of your
            contribution.
          </p>
          <p className={styles.subtitle}>⊗ Detail Obsession</p>
          <p>
            Precision wins races. From visuals to messaging, ensure everything
            aligns with the <span className={styles.vroomWord}>$VROOM</span>{" "}
            brand.
          </p>
          <p className={styles.subtitle}>⊗ Collaborate Hard</p>
          <p>
            Racing is a team sport. Work with others who share the{" "}
            <span className={styles.vroomWord}>$VROOM</span> vision to draft
            ahead and achieve more together.
          </p>
          <span className={styles.notice}>
            <b>⧗</b> The VROOM emblem, identity, and imagery is public domain.
            The use of all of these assets utilizes a cc0 license. Anyone can
            make content, brand contributors however are given larger
            capabilities within the VROOM project.
          </span>
        </section>

        <section className={styles.manualSection}>
          <h3>
            <a name="race-bib">ii. Getting your Race Bib</a>
          </h3>
          <p>
            Contributors with a Race Bib share in our token rewards, including
            access to a 250M $VROOM pool.
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 16 16"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m8.75 3.25l4.5 4.5l-4.5 4.5m-6-4.5h10.5"
              />
            </svg>
            {" "}Utilize the official{" "}
            <a href="" target="_blank">
              <span className={styles.vroomWord}>$VROOM</span> brand assets
            </a>{" "}
            to contribute to the meme economy, make designs, and produce
            content. Keep it raw, rebellious, and full-throttle.
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 16 16"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m8.75 3.25l4.5 4.5l-4.5 4.5m-6-4.5h10.5"
              />
            </svg>
            {" "}Share your creation through the Race Bib Application.
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 16 16"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m8.75 3.25l4.5 4.5l-4.5 4.5m-6-4.5h10.5"
              />
            </svg>
            {" "}If your work is selected for minting, you&apos;ll be invited to our
            Zora Collection to mint it yourself.
          </p>
          <p>
            Selected works will be featured across our social channels,
            amplifying your reach within the{" "}
            <span className={styles.vroomWord}>$VROOM</span> community. If your
            creation is selected for minting, you&apos;ll be invited to our Zora
            collection yadda yadda.
          </p>
          <p>More viral memes = more traction = more rewards.</p>
          <p>TL;DR: You make, we feature, you mint, you get paid.</p>
        </section>

        <section className={styles.manualSection}>
          <h3>
            <a name="log-a-lap">iii. Log a Lap</a>
          </h3>
          <p>You don&apos;t need a wallet. You need something worth showing.</p>
          <p>
            <strong>Create it. Post it. Log it.</strong>
          </p>
          <ol>
            <li>
              <strong>Create</strong> — short-form video, photos, or a meme
              that lands
            </li>
            <li>
              <strong>Post</strong> — Instagram, TikTok, wherever your people
              are
            </li>
            <li>
              <strong>Log a Lap</strong> — drop your link — we&apos;ll track
              the run
            </li>
          </ol>
          <p>
            <a href="/contribute/log-a-lap" className={styles.lapCtaLink}>Log a Lap →</a>
          </p>
          <p>We track performance over time — strong laps surface.</p>
          <p>
            <strong>What hits:</strong>
          </p>
          <ul>
            <li>
              Walk-arounds with{" "}
              <span className={styles.vroomWord}>$VROOM</span> in the caption
            </li>
            <li>Car meets, track days, late nights</li>
            <li>Memes only car people get</li>
            <li>Anything that stops the scroll</li>
          </ul>
          <p>
            Top laps get featured. Some get rewarded. All of them move the
            culture forward.
          </p>
          <p>
            This is an open system. The more you put in, the more it gives
            back.
          </p>
        </section>

        <section className={styles.manualSection}>
          <h2>
            <a name="assembly-line">$VROOM on the Assembly Line</a>
          </h2>
          <p>
            As the world embraces electric vehicles,{" "}
            <span className={styles.vroomWord}>$VROOM</span> captures and
            immortalizes the beautiful sounds in a deeply abstracted way on a
            digital medium.
          </p>
          <p>
            <span className={styles.vroomWord}>$VROOM</span> dropped on June
            25th. In a month packed with automotive history (and also{" "}
            <span className={styles.red}>P</span>
            <span className={styles.yellow}>R</span>
            <span className={styles.green}>I</span>
            <span className={styles.blue}>D</span>
            <span className={styles.violet}>E</span>).{" "}
            <span className={styles.vroomWord}>$VROOM</span> celebrates
            milestones like the first auto race, the premiere of The Fast and
            the Furious franchise, the release of{" "}
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
        </section>

        <section className={styles.manualSection}>
          <h3>
            <a name="emblem">Emblem</a>
          </h3>
          <p>
            The $VROOM emblem was designed by chamaquito.eth. It must be
            included in all team collateral.
          </p>
          <img src="vroom-logo-blk.svg" />
          <p>
            The $VROOM emblem and Logotype can be used as devices for other
            projects and purposes as they are freely remixable in accordance to
            our cc0 framework. However, as free use these assets are, usage does
            not imply endorsement of any third-party projects unless specified
            via our advertising, minting, dress, promotions, or similar
            marketing purposes by the $VROOM Pit Crew.
          </p>
          <p className={styles.subtitle}>Using the emblem</p>
        </section>

        <section className={styles.manualSection}>
          <h3>
            <a name="imagery">Imagery</a>
          </h3>
          <p>Drift shots, burnout smoke, speed trails, garage builds.</p>
        </section>

        <section className={styles.manualSection}>
          <h3>
            <a name="typography">vii. Typography</a>
          </h3>

          <p className={styles.subtitle}>IBM Plex Mono. Free. One typeface.</p>

          <p>
            When you&apos;re adding text to a graphic, thumbnail, overlay, or
            any asset carrying the <span className={styles.vroomWord}>$VROOM</span>{" "}
            name — use IBM Plex Mono. It&apos;s the only typeface in the brand.
            Available free on{" "}
            <a href="https://fonts.google.com/specimen/IBM+Plex+Mono" target="_blank">
              Google Fonts
            </a>
            .
          </p>

          <p className={styles.subtitle}>Weights</p>

          <p>
            IBM Plex Mono runs from 100 (Thin) to 700 (Bold). For most content,
            you only need three:
          </p>

          <dl>
            <dt>700</dt>
            <dd><strong>Bold</strong> — headlines, callouts, the $VROOM name when used large. Makes an impact on busy backgrounds.</dd>
            <dt>400</dt>
            <dd><strong>Regular</strong> — captions, subtitles, supporting text. The default when in doubt.</dd>
            <dt>300</dt>
            <dd><strong>Light</strong> — fine print, timestamps, secondary info. Use when you need text present but not competing.</dd>
          </dl>

          <p>
            Avoid using Thin (100) or ExtraLight (200) over photo backgrounds —
            they disappear. Save them for clean, high-contrast layouts.
          </p>

          <p className={styles.subtitle}>The $VROOM name in graphics</p>

          <p>
            When the word <span className={styles.vroomWord}>$VROOM</span> appears
            as text in a graphic, it should be set in IBM Plex Mono. The dollar
            sign is part of the name — never drop it. Casing is flexible:{" "}
            <strong>$VROOM</strong> in all caps is the standard; mixed case is
            acceptable in body copy.
          </p>

          <p>
            Prefer the emblem over typeset text whenever possible. The emblem is
            more recognizable at small sizes. Reserve large typeset{" "}
            <span className={styles.vroomWord}>$VROOM</span> for situations where
            the emblem isn&apos;t available or doesn&apos;t fit.
          </p>

          <p className={styles.subtitle}>Color on backgrounds</p>

          <dl>
            <dt>01</dt>
            <dd>On dark or photo backgrounds — use white (#ffffff) or the warm off-white (#fffff8). Red can work for accent text but not body copy.</dd>
            <dt>02</dt>
            <dd>On light or white backgrounds — use near-black (#111111). The brand red (#D9261F) works for the $VROOM name and short callouts.</dd>
            <dt>03</dt>
            <dd>Avoid placing light-weight type directly over busy imagery. Add a darkened overlay or a solid backing strip behind the text first.</dd>
          </dl>

          <p className={styles.subtitle}>What to avoid</p>

          <ul>
            <li>Do not use any typeface other than IBM Plex Mono in $VROOM content</li>
            <li>Do not stretch, condense, or skew the letterforms</li>
            <li>Do not outline or stroke the type — weight handles emphasis</li>
            <li>Do not use decorative or script fonts alongside the brand name</li>
            <li>Do not drop the $ from $VROOM</li>
          </ul>

          <span className={styles.notice}>
            <b>⧗</b> If you&apos;re unsure whether your text treatment fits —
            keep it simple. Black or white, IBM Plex Mono, no effects. That
            always works.
          </span>
        </section>
      </div>

      <Footer />
    </main>
  );
}
