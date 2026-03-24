export async function POST(request) {
  const { link, platform, handle } = await request.json();

  if (!link || !platform) {
    return Response.json(
      { error: "Link and Platform are required" },
      { status: 400 }
    );
  }

  const fields = {
    Link: link,
    Platform: platform,
  };

  if (handle) {
    fields.Handle = handle;
  }

  try {
    const response = await fetch(
      "https://api.airtable.com/v0/appBMXGFnaXhCaK5z/Laps",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fields }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.error("Airtable error:", error);
      return Response.json({ error: "Failed to log lap" }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Fetch error:", err);
    return Response.json({ error: "Failed to log lap" }, { status: 500 });
  }
}
