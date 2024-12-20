import rss, { pagesGlobToRssItems } from "@astrojs/rss";

// This makes "rss.xml" an endpoint for GET requests
export async function GET(context) {
    return rss({
        title: "My blog | Daniel",
        description: "Astro blog tutorial",
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
        customData: `<language>en-us</language>`,
    });
}
