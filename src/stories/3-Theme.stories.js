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
    foreground: "#000000",
    background: "#eeeeee",
    pHead: "#3282b8",
    pSubHead: "#3282b8",
    pBG: "#dde1fb",
    pAccent: "#ffffff"
  },
  dark: {
    pHead: "#ffffff",
    pSubHead: "#ffffffaa",
    pBG: "#1b262c",
    pAccent: "#3282b8"
  }
};

export const Themed = () => {
  const [theme, setTheme] = useState(themes.dark);
  const subtitle = text("subtitle", "a simple card component");
  const content = text("content", null);
  const onButtonClick = () =>
    setTheme(thm => (thm === themes.light ? themes.dark : themes.light));

  return (
    <div>
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
