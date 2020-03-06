import React from "react";
import { action } from "@storybook/addon-actions";
import Card from "../components/Card";

export default {
  title: "Card",
  component: Card
};

export const Default = () => (
  <Card title="Fresh Designs" subtitle="a simple card component" />
);

const theme = {
  pHead: "#ffffff",
  pSubHead: "#ffffffaa",
  pBG: "#230444",
  pAccent: "#90303d"
};
export const DifferentTheme = () => (
  <Card
    title="Different Theme"
    subtitle="subtitle"
    content="Your content here"
    {...{ theme }}
  />
);
export const CustomWidth = () => (
  <Card
    title="Custom Width"
    subtitle="width='max-content'"
    content="Your content here Your content here Your content here Your content here Your content here "
    width="max-content"
  />
);
export const Custom = () => (
  <Card
    title="Custom Width"
    subtitle="width='max-content'"
    content="Your content here Your content here Your content here Your content here Your content here "
    width="max-content"
  />
);

export const LeftButton = () => (
  <Card
    title="Custom Width"
    subtitle="width='max-content'"
    content="Your content here Your content here Your content here Your content here Your content here "
    buttonPosition="left"
  />
);
