import React, { useState, useEffect } from "react";
import { action } from "@storybook/addon-actions";
import Card, { Grid } from "../components/Card";
import { withKnobs, text, color, number } from "@storybook/addon-knobs";
import { ThemeProvider } from "../components/Theme";

export default {
  title: "Theme",
  component: ThemeProvider,
  decorators: [withKnobs]
};
const themes = {
  light: {
    pHead: "#000",
    pSubHead: "#000a",
    pBG: "#fff",
    pAccent: "grey"
  },
  dark: {
    pHead: "#ffffff",
    pSubHead: "#ffffffaa",
    pBG: "#1b262c",
    pAccent: "#3282b8"
  }
};

export const Themed = () => {
  const [theme, setTheme] = useState(themes.light);
  const subtitle = text("subtitle", "a simple card component");
  const content = text("content", null);
  const onButtonClick = () =>
    setTheme(thm => (thm === themes.light ? themes.dark : themes.light));

  return (
    <div
      style={{ backgroundColor: `${theme === themes.dark ? "white" : "grey"}` }}
    >
      <ThemeProvider theme={theme}>
        <Grid>
          {Array.from({ length: 17 }).map((_, i) => (
            <Card
              {...{
                title: `Card ${i}`,
                subtitle,
                content,
                buttonText: "Swith theme",
                onButtonClick
              }}
            />
          ))}
        </Grid>
      </ThemeProvider>
    </div>
  );
};
