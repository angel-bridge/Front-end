import { globalStyle } from "@vanilla-extract/css";

globalStyle("*, *::before, *::after", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

globalStyle("html, body", {
  fontFamily: "Arial, sans-serif",
  lineHeight: 1.5,
  color: "#333",
  backgroundColor: "#f9f9f9",
  height: "100%",
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
