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

export function wordCount(rawContent: string) {
  const content = filterContent(rawContent);
  const word_count = content.trim().split(/\s+/g).length;
  return word_count;
}

export function extractDesc(rawContent: string) {
  const content = rawContent.split("<!--more-->")[0];
  const more = filterContent(content);
  return more;
}
