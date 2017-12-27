const ellipsisText = (text, maxLength) =>
  text.length > maxLength ? `${text.slice(0, maxLength - 3)}...` : text;

export default ellipsisText;
