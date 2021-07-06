const rgbNumberToHex = (rgb: number): string => {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = `0${hex}`;
  }
  return hex;
};

const fullHexCollor = (r: number, g: number, b: number): string => {
  const red = rgbNumberToHex(r);
  const green = rgbNumberToHex(g);
  const blue = rgbNumberToHex(b);

  return `#${red}${green}${blue}`;
};

const convertRGBToHex = (color: string): string => {
  const rgb = color.substring(4, color.length - 1);
  const colors = rgb.split(', ');

  return fullHexCollor(Number(colors[0]), Number(colors[1]), Number(colors[2]));
};

export default convertRGBToHex;
