export default async (request: Request) => {
  const ua = (request.headers.get("user-agent") || "").toLowerCase();

  const blockedAgents = [
    "gptbot",
    "chatgpt-user",
    "ccbot",
    "claudebot",
    "anthropic-ai",
    "perplexitybot",
    "bytespider",
    "semrushbot",
    "ahrefsbot",
    "mj12bot",
    "dotbot",
    "bingbot",
    "googlebot"
  ];

  const isBlocked = blockedAgents.some(bot => ua.includes(bot));

  if (isBlocked) {
    return new Response("Forbidden", {
      status: 403,
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "cache-control": "no-store"
      }
    });
  }

  return;
};