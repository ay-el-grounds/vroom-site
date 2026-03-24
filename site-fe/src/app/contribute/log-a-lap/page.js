"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import styles from "../../../app/page.module.css";
import HoverBuy from "@/components/HoverBuy";
import Navigation from "@/components/Navigation";
import HoverStake from "@/components/HoverStake";
import Radio from "@/components/Radio";

export default function LogALap() {
  const [link, setLink] = useState("");
  const [platform, setPlatform] = useState("");
  const [handle, setHandle] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/log-a-lap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ link, platform, handle }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Try again.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={styles.main}>
      <nav>
        <Navigation />
      </nav>
      <HoverBuy />
      <HoverStake />
      <Radio />

      <div className={styles.formWrap}>
        <section>
          <h2 className={styles.pageStamp}>LOG A LAP</h2>
          <div className={styles.formIntro}>
            <p>Drop your link. We&apos;ll track the run.</p>
            <p>
              This is where your work enters the system.
              Strong laps surface. Top contributors get featured — some get
              rewarded.
            </p>
          </div>
        </section>

        {submitted ? (
          <p className={styles.confirmMsg}>
            Lap logged. We&apos;ll take it from here.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className={styles.lapForm}>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Post Link —</label>
              <input
                type="url"
                className={styles.formInput}
                placeholder="Paste your post URL"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                required
              />
            </div>

            <div className={styles.formField}>
              <label className={styles.formLabel}>Platform —</label>
              <select
                className={styles.formInput}
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="Instagram">Instagram</option>
                <option value="TikTok">TikTok</option>
                <option value="YouTube Shorts">YouTube Shorts</option>
                <option value="X">X</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className={styles.formField}>
              <label className={styles.formLabel}>Handle — optional</label>
              <input
                type="text"
                className={styles.formInput}
                placeholder="Your @"
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
              />
            </div>

            {error && <p className={styles.errorMsg}>{error}</p>}

            <button
              type="submit"
              className={styles.lapSubmitBtn}
              disabled={loading}
            >
              {loading ? "Logging..." : "Log a Lap"}
            </button>

            <p className={styles.fineprint}>
              We track performance over time — strong laps surface.
            </p>
          </form>
        )}
      </div>

      <Footer />
    </main>
  );
}
