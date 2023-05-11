const colors = {
  main_color: "#1A3C40",
  blue_color: "#0066ff",
  gray_color: "#FEFCF3",
  white_color: "#fff",
  green_color: "#144D53",
  yellow_color: "#FFD460",
  black_color: "#1A3C40",
  beige_color: "#307672",
};

const fonts = {
  font_color: "#fff",
  font_main_color: "#2D4059",
  fontLogo: "'Helvetica', sans-serif",
  fontExtra: "6.25rem",
  fontLarge: "3rem",
  fontMediumLarge: "2.5rem",
  fontMedium: "1.75rem",
  fontSemiMedium: "1.25rem",
  fontRegular: "1.125rem",
  fontSmall: "1rem",
  fontMicro: "0.875rem",

  weightExtra: 800,
  weightBold: 700,
  weightSemiBold: 600,
  weightSemiRegular: 500,
  weightRegular: 400,
};

const deviceSizes = {
  mobile: 768,
  tablet: 1024,
  laptop: 1400,
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile}px)`,
  tablet: `screen and (max-width: ${deviceSizes.tablet}px)`,
  laptop: `screen and (max-width: ${deviceSizes.laptop}px)`,
};

const theme = {
  device,
  colors,
  deviceSizes,
  fonts,
};

export default theme;
