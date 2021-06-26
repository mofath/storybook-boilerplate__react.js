import { addParameters, addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { contexts } from "./contexts";

addParameters = {
  backgrouds: [
    { name: "Default theme", value: "#fff", default: true },
    { name: "Derk theme",  value: "#050449" },
  ]
};

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11y);