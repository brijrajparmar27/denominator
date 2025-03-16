import path from "path";

import type { Error } from "../utils";
import { getConfig, capitalize, throwIf, logError } from "../utils";
import FileService from "../services/file.service";

const config = getConfig();

interface ComponentOptions {
  component: string;
  type?: "functional" | "class" | "hook";
  style?: "css" | "scss" | "styled" | "tailwind";
  ext?: string;
  test?: boolean;
  story?: boolean;
  doc?: boolean;
  withInterface?: boolean;
}

export const createComponent = async (
  options: ComponentOptions
): Promise<void> => {
  try {
    const {
      component: componentName,
      type = "functional",
      style = "css",
      ext = "tsx",
      test = false,
      story = false,
      doc = false,
      withInterface = false,
    } = options;

    throwIf((r: string) => !r, {
      message: "Component name is required",
    } as Error)(componentName);

    const templateDir = path.join(__dirname, "../templates");
    const capitalizedName = capitalize(componentName);
    const componentDir = path.join(config.dir, capitalizedName);

    // Create component directory
    FileService.createDirIfNotExists(componentDir);

    // Generate main component file
    await generateComponentFile(componentDir, capitalizedName, type, ext);

    // Generate style file
    await generateStyleFile(componentDir, capitalizedName, style);

    // Generate TypeScript interface
    if (withInterface) {
      await generateInterfaceFile(componentDir, capitalizedName);
    }

    // Generate test file
    if (test) {
      await generateTestFile(componentDir, capitalizedName, ext);
    }

    // Generate story file
    if (story) {
      await generateStoryFile(componentDir, capitalizedName, ext);
    }

    // Generate documentation
    if (doc) {
      await generateDocFile(componentDir, capitalizedName);
    }
  } catch (error) {
    logError(error);
  }
};

async function generateComponentFile(
  dir: string,
  name: string,
  type: string,
  ext: string
): Promise<void> {
  const template = await FileService.readFile(
    path.join(__dirname, `../templates/${type}-component.${ext}`)
  );
  const content = template!.replace(/{{Component}}/g, name);
  await FileService.createFile(path.join(dir, `${name}.${ext}`), content);
}

async function generateStyleFile(
  dir: string,
  name: string,
  styleType: string
): Promise<void> {
  const extension = styleType === "styled" ? "ts" : styleType;
  const template = await FileService.readFile(
    path.join(__dirname, `../templates/styles/${styleType}.${extension}`)
  );
  const content = template!.replace(/{{Component}}/g, name);
  await FileService.createFile(
    path.join(dir, `${name}.styles.${extension}`),
    content
  );
}

async function generateInterfaceFile(dir: string, name: string): Promise<void> {
  const template = await FileService.readFile(
    path.join(__dirname, "../templates/interface.ts")
  );
  const content = template!.replace(/{{Component}}/g, name);
  await FileService.createFile(path.join(dir, `${name}.types.ts`), content);
}

async function generateTestFile(
  dir: string,
  name: string,
  ext: string
): Promise<void> {
  const template = await FileService.readFile(
    path.join(__dirname, "../templates/test.tsx")
  );
  const content = template!.replace(/{{Component}}/g, name);
  await FileService.createFile(path.join(dir, `${name}.test.${ext}`), content);
}

async function generateStoryFile(
  dir: string,
  name: string,
  ext: string
): Promise<void> {
  const template = await FileService.readFile(
    path.join(__dirname, "../templates/story.tsx")
  );
  const content = template!.replace(/{{Component}}/g, name);
  await FileService.createFile(
    path.join(dir, `${name}.stories.${ext}`),
    content
  );
}

async function generateDocFile(dir: string, name: string): Promise<void> {
  const template = await FileService.readFile(
    path.join(__dirname, "../templates/documentation.md")
  );
  const content = template!.replace(/{{Component}}/g, name);
  await FileService.createFile(path.join(dir, `${name}.md`), content);
}
