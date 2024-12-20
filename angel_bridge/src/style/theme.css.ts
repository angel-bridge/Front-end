import { createTheme, createThemeContract } from "@vanilla-extract/css";

const grayColors = createThemeContract({
  grayscale00: null,
  grayscale50: null,
  grayscale100: null,
  grayscale200: null,
  grayscale300: null,
  grayscale400: null,
  grayscale500: null,
  grayscale600: null,
  grayscale700: null,
  grayscale800: null,
  grayscale900: null,
  grayscaleAlpha: null,
});

export const grayScale = createTheme(grayColors, {
  grayscale00: "#ffffff",
  grayscale50: "#f2f4f8",
  grayscale100: "#dde1e6",
  grayscale200: "#c1c7cd",
  grayscale300: "#a2a9b0",
  grayscale400: "#878d96",
  grayscale500: "#697077",
  grayscale600: "#4d5358",
  grayscale700: "#343a3f",
  grayscale800: "#21272a",
  grayscale900: "#121619",
  grayscaleAlpha: "#000000",
});

const purpleColors = createThemeContract({
  purple100: null,
  purple200: null,
  purple300: null,
  purple400: null,
  purple500: null,
});

export const purple = createTheme(purpleColors, {
  purple100: "#f6f6fb",
  purple200: "#ececf7",
  purple300: "#9e8dff",
  purple400: "#6c54f6",
  purple500: "#523dc7",
});

const sementicColors = createThemeContract({
  sementicDanger: null,
  sementicSuccess: null,
  sementicAlphaDanger100: null,
  sementicAlphaDanger200: null,
});

export const sementic = createTheme(sementicColors, {
  sementicDanger: "#fa2a35",
  sementicSuccess: "#1aa174",
  sementicAlphaDanger100: "rgba(250, 42, 53, 0.1)",
  sementicAlphaDanger200: "rgba(250, 42, 53, 0.5)",
});

const groundColors = createThemeContract({
  background: null,
  foreground: null,
});

export const ground = createTheme(groundColors, {
  background: "#ffffff",
  foreground: "#171717",
});
