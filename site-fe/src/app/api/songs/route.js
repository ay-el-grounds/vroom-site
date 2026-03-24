import fs from "fs";
import path from "path";

export async function GET() {
  const songsDirectory = path.join(process.cwd(), "public", "tunes");

  try {
    const files = fs.readdirSync(songsDirectory);
    const mp3Files = files.filter((file) => file.endsWith(".mp3"));
    return Response.json(mp3Files);
  } catch (err) {
    console.error("Error reading directory:", err);
    return Response.json(
      { error: "Failed to read songs directory" },
      { status: 500 }
    );
  }
}
