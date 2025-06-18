import { renderHtml } from "./renderHtml";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/data") {
        const { results } = await env.DB.prepare("SELECT * FROM cow_records").all();
        return new Response(JSON.stringify(results), {
            headers: { "Content-Type": "application/json" },
        });
    }

    return new Response(renderHtml(), {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
} satisfies ExportedHandler<Env>;
