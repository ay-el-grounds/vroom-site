"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import styles from "./Radio.module.css";

export default function Radio() {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState("");

  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    async function fetchSongs() {
      try {
        const response = await axios.get("/api/songs");
        setSongs(response.data);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    }

    fetchSongs();
  }, []);

  return (
    <motion.div
      className={`${styles.radio} ${minimized ? styles.radioMinimized : ""}`}
      animate={{
        height: minimized ? 48 : "auto",
        minHeight: minimized ? 48 : undefined,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ position: "fixed", right: "1.2em", bottom: "255px" }} // optional: ensures position is always correct
    >
      <motion.button
        className={styles.chevronButton}
        onClick={() => setMinimized((m) => !m)}
        aria-label={minimized ? "Expand" : "Minimize"}
        animate={{ rotate: minimized ? 180 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ position: "absolute", top: 0, right: 0, zIndex: 40 }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 7l5 5-5 5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>
      <audio
        controls
        src={currentSong}
        className={minimized ? styles.audioMinimized : ""}
        style={
          minimized
            ? {
                width: 0,
                height: 0,
                opacity: 0,
                pointerEvents: "none",
                position: "absolute",
              }
            : { width: "100%" }
        }
      >
        Your browser does not support the audio element.
      </audio>
      <AnimatePresence mode="wait">
        {minimized ? (
          <motion.div
            key="minimized"
            className={styles.minimizedBar}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            RADIO
          </motion.div>
        ) : (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
          >
            <ul className={styles.jukebox}>
              {songs.map((song) => (
                <li key={song} className={styles.jukebox}>
                  <div className={styles.jukeboxSongs}>
                    <button
                      className={styles.jukeboxSongs}
                      onClick={() => {
                        setCurrentSong(`/tunes/${song}`);
                      }}
                    >
                      <div className={styles.indSong}>
                        <img
                          className={styles.indSong}
                          src={`/tunes/${song.replace(".mp3", ".png")}`}
                          alt={song}
                        />
                        <div className={styles.indSongText}>
                          {song.replace(".mp3", "")}
                        </div>
                      </div>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
