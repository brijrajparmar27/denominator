#!/usr/bin/env node

import { Command } from "commander";

import { version } from "../package.json";

import { createComponent } from "./controllers/component.controller";

const program = new Command();

program.version(version);

program
  .command("generate")
  .alias("g")
  .description("Generate React components and related files")
  .option("-c, --component <name>", "Component name")
  .option(
    "-t, --type <type>",
    "Component type (functional|class|hook)",
    "functional"
  )
  .option(
    "-s, --style <framework>",
    "Styling framework (css|scss|styled|tailwind)",
    "css"
  )
  .option("-e, --ext <extension>", "File extension (js|jsx|ts|tsx)", "tsx")
  .option("--test", "Generate test file", false)
  .option("--story", "Generate Storybook story file", false)
  .option("--doc", "Generate documentation file", false)
  .option("--with-interface", "Generate TypeScript interface file", false)
  .action((options) => {
    if (!options.component) {
      console.error("Component name is required");
      process.exit(1);
    }
    createComponent(options);
  });

program.parse();
