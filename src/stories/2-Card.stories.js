import React from "react";
import { action } from "@storybook/addon-actions";
import Card, { Grid } from "../components/Card";
import { withKnobs, text, color, number } from "@storybook/addon-knobs";

export default {
  title: "Card",
  component: Card,
  decorators: [withKnobs]
};

export const BasicUse = () => {
  const title = text("title", "A Fresh Card");
  const subtitle = text("subtitle", "a simple card component");
  const content = text("content", null);
  const onButtonClick = action("clicked");

  return <Card {...{ title, subtitle, content, onButtonClick }} />;
};

export const Advanced = () => {
  const title = text("title", "A DifferentTheme");
  const subtitle = text("subtitle", "a simple card component");
  const content = text("content", "");
  const onButtonClick = action("clicked");
  const width = text("width", "30em"); // css width attributes
  const footerAlign = text("footerAlign", "left"); // left||right

  const pHead = color("theme.pHead", "#ffffff");
  const pSubHead = color("theme.pSubHead", "#ffffffaa");
  const pBG = color("theme.pBG", "#230444");
  const pAccent = color("theme.pAccent", "#90303d");

  const theme = {
    pHead,
    pSubHead,
    pBG,
    pAccent
  };

  return (
    <Card
      width={width}
      {...{ title, subtitle, content, onButtonClick, theme, footerAlign }}
    />
  );
};

export const CardsGrid = () => {
  const subtitle = text("subtitle", "a simple card component");
  const content = text("content", null);
  const onButtonClick = action("clicked");

  return (
    <Grid>
      {Array.from({ length: 17 }).map((_, i) => (
        <Card
          {...{
            title: `Item ${i}`,
            subtitle,
            content,
            onButtonClick
          }}
        />
      ))}
    </Grid>
  );
};
