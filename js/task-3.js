function getElementWidth(content, padding, border) {
  const width =
    Number.parseFloat(content) +
    Number.parseFloat(padding) * 2 +
    Number.parseFloat(border) * 2;

  return width;
}
console.log(getElementWidth("50px", "8px", "4px"));
