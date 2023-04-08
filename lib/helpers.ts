import { ConfiguredSanityClient } from "./../components/sanity/Client";
import imageUrlBuilder from "@sanity/image-url";

export function filterContent(rawContent: string) {
  const content = rawContent
    // Codeblocks
    .replace(/(!?\[[^\]]*?\]\([^)]*?\))/g, "")
    // Image tags
    .replace(/\[(.*?)\]\((.*?)\)/g, "$1")
    // Link texts
    .replace(/\[(.*?)\]\((.*?)\)/g, "$1");
  return content;
}

// Extract only text from content file
export function wordCount(rawContent: string) {
  const content = filterContent(rawContent);
  const word_count = content.trim().split(/\s+/g).length;
  return word_count;
}

// To extract content before <!--more--> tag from gray-matter extracted content which is known as summary part HUGO uses
export function extractDesc(rawContent: string) {
  const content = rawContent.split("<!--more-->")[0];
  const more = filterContent(content);
  return more;
}

// I'm using moonlight-ii which is known as moonlight-vscode-theme, simple reason of this approach is to avoid higher repo size, also it's always flexible to follow this approach, then you can change colorscheme without changing source file
export async function fetchJsonData() {
  const response = fetch(`${process.env.THEME_JSON}`);
  const data = await (await response).json();
  return data;
}

// Image Url builder for sanity
export function urlFor(source: string) {
  const builder = imageUrlBuilder(ConfiguredSanityClient);
  return builder.image(source);
}
