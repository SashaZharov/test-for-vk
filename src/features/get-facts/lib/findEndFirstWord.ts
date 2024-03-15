export const findEndFirstWord = (text: string) => {
  const reg = /^\s*\w+(-\w+)?\b(?:,)?/;
  const match = text.match(reg);

  if (match) {
    return match[0].length;
  }
  return 0;
};
