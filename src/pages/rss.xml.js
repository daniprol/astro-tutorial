import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { getCollection } from "astro:content";

// This makes "rss.xml" an endpoint for GET requests
export async function GET(context) {
    const posts = await getCollection("blog");
    return rss({
        title: "My blog | Daniel",
        description: "Astro blog tutorial",
        site: context.site,
        // items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
        // NOTICE THE "data" ATTRIBUTE
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/posts/${post.id}`,
        })),
        customData: `<language>en-us</language>`,
    });
}
