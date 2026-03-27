/** @param {string} content */
export function poemPlainText(content) {
  return content.replace(/<br\s*\/?>/gi, "\n").trim();
}

/** @param {{ content: string }} poem */
export function poemExcerpt(poem, maxLines = 4) {
  const lines = poemPlainText(poem.content)
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
  return lines.slice(0, maxLines).join("\n");
}
