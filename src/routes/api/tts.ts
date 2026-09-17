import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/tts")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env["LOVABLE_API_KEY"];
        if (!apiKey) {
          return new Response("Voice service not configured", { status: 500 });
        }

        let text = "";
        try {
          const body = (await request.json()) as { text?: unknown };
          if (typeof body.text === "string") text = body.text.trim();
        } catch {
          return new Response("Invalid request", { status: 400 });
        }
        if (!text) return new Response("Missing text", { status: 400 });
        if (text.length > 2000) text = text.slice(0, 2000);

        const upstream = await fetch("https://ai.gateway.lovable.dev/v1/audio/speech", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "google/gemini-3.1-flash-tts-preview",
            contents: [{ role: "user", parts: [{ text: `Say clearly and calmly: ${text}` }] }],
            generationConfig: {
              responseModalities: ["AUDIO"],
              speechConfig: {
                voiceConfig: { prebuiltVoiceConfig: { voiceName: "Kore" } },
              },
            },
          }),
        });

        if (!upstream.ok) {
          const detail = await upstream.text().catch(() => "");
          console.error(`TTS failed [${upstream.status}]: ${detail}`);
          return new Response(detail || "Voice generation failed", { status: upstream.status });
        }

        return new Response(upstream.body, {
          headers: {
            "Content-Type": upstream.headers.get("Content-Type") ?? "audio/wav",
            "Cache-Control": "no-store",
          },
        });
      },
    },
  },
});
