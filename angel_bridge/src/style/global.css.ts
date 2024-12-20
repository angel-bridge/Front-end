import { globalStyle, globalFontFace } from "@vanilla-extract/css";

globalStyle("*, *::before, *::after", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

globalFontFace("Pretendard-Regular", {
  src: "url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff')",
  fontWeight: 400,
  fontStyle: "normal",
});

globalStyle("html, body", {
  fontFamily: "Pretendard-Regular, sans-serif",
  lineHeight: 1.5,
});

globalStyle("a", {
  textDecoration: "none",
  color: "inherit",
});

globalStyle("a:hover", {
  textDecoration: "underline",
});

globalStyle("ul, ol", {
  listStyle: "none",
  paddingLeft: 0,
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  fontWeight: "bold",
  marginBottom: "0.5em",
});

globalStyle("img", {
  maxWidth: "100%",
  height: "auto",
  display: "block",
});
