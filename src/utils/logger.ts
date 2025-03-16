import chalk from "chalk";

const colors = {
  red: "#d81010",
  green: "#8ed700",
  blue: "#00baff",
  gold: "#ffcc00",
  mediumGray: "#808080",
  darkGray: "#5a5a5a",
};

const logComponentType = (selected: string) =>
  ["class", "pure-class", "functional"]
    .sort((a, b) => (a === selected ? -1 : 1))
    .map((option) =>
      option === selected
        ? chalk.bold.hex(colors.blue)(option)
        : chalk.hex(colors.darkGray)(option)
    )
    .join("  ");

export function logIntro({
  name,
  dir,
  type,
}: {
  name: string;
  dir: string;
  type: string;
}) {
  console.info("\n");
  console.info(
    `✨  Creating the ${chalk.bold.hex(colors.gold)(name)} component ✨`
  );
  console.info("\n");

  const pathString = chalk.bold.hex(colors.blue)(dir);
  const typeString = logComponentType(type);

  console.info(`Directory:  ${pathString}`);
  console.info(`Type:       ${typeString}`);
  console.info(
    chalk.hex(colors.darkGray)("=========================================")
  );

  console.info("\n");
}

export function logItemCompletion(successText: string) {
  const checkmark = chalk.hex(colors.green)("✓");
  console.info(`${checkmark} ${successText}`);
}

export function logConclusion() {
  console.info("\n");
  console.info(chalk.bold.hex(colors.green)("Component created! 🚀 "));
  console.info(chalk.hex(colors.mediumGray)("Thanks for using new-component."));
  console.info("\n");
}

export function logError(error: any) {
  console.info("\n");
  console.info(chalk.bold.hex(colors.red)("Error creating component."));
  console.info(chalk.hex(colors.red)(error));
  console.info("\n");
}
