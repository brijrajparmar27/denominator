# Denominator 🚀

A powerful CLI tool for generating React components with modern best practices and extensive customization options.

## Features ✨

- 🎯 Multiple Component Types

  - Functional Components (with hooks)
  - Class Components
  - Custom Hook Components

- 🎨 Styling Options

  - CSS
  - SCSS
  - Styled Components
  - Tailwind CSS

- 📝 TypeScript Support

  - Automatic Interface Generation
  - Type-safe Props
  - Styled-components Types

- 🧪 Testing Integration

  - Jest Setup
  - React Testing Library
  - Pre-configured Test Templates

- 📚 Storybook Integration

  - Story Templates
  - Multiple Variants
  - Props Documentation

- 📖 Documentation
  - Markdown Documentation
  - Props Table
  - Usage Examples

## Installation 🛠️

```bash
# Install globally
npm install -g denominator

# Or use with npx
npx denominator
```

## Usage 💻

### Basic Component Generation

```bash
# Generate a basic functional component
damn generate -c Button

# Or use the shorter alias
damn g -c Button
```

### Advanced Component Generation

```bash
# Functional component with TypeScript and styled-components
damn g -c UserProfile -t functional -s styled --with-interface

# Class component with SCSS and tests
damn g -c DataTable -t class -s scss --test

# Hook-based component with Tailwind, Storybook and docs
damn g -c AuthForm -t hook -s tailwind --story --doc
```

### Command Options

| Option           | Alias | Description                   | Values                      | Default    |
| ---------------- | ----- | ----------------------------- | --------------------------- | ---------- |
| --component      | -c    | Component name                | string                      | (Required) |
| --type           | -t    | Component type                | functional, class, hook     | functional |
| --style          | -s    | Styling framework             | css, scss, styled, tailwind | css        |
| --ext            | -e    | File extension                | js, jsx, ts, tsx            | tsx        |
| --test           | -     | Generate test file            | boolean                     | false      |
| --story          | -     | Generate Storybook file       | boolean                     | false      |
| --doc            | -     | Generate documentation        | boolean                     | false      |
| --with-interface | -     | Generate TypeScript interface | boolean                     | false      |

## Generated Structure 📁

```
ComponentName/
├── ComponentName.tsx          # Main component file
├── ComponentName.types.ts     # TypeScript interfaces (with --with-interface)
├── ComponentName.styles.*     # Styles (extension based on style option)
├── ComponentName.test.tsx     # Test file (with --test)
├── ComponentName.stories.tsx  # Storybook stories (with --story)
└── ComponentName.md          # Documentation (with --doc)
```

## Style Framework Examples 🎨

### CSS

```css
.Button {
  display: flex;
  padding: 1rem;
}
```

### SCSS

```scss
.Button {
  &__container {
    display: flex;
  }

  &__content {
    padding: 1rem;
  }
}
```

### Styled Components

```typescript
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 1rem;
`;
```

### Tailwind

```tsx
<div className="flex p-4 hover:bg-gray-100">{children}</div>
```

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Development 👩‍💻👨‍💻

```bash
# Clone the repository
git clone https://github.com/yourusername/denominator.git

# Install dependencies
npm install

# Build the project
npm run build

# Install globally from local files
npm run int
```

## License 📄

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Author ✍️

Miten Gajjar

## Acknowledgments 🙏

- React Community
- Commander.js
- TypeScript Team
- All Contributors

## Roadmap 🗺️

- [ ] Add support for Next.js components
- [ ] Add support for React Native components
- [ ] Add more styling framework options
- [ ] Add component templates library
- [ ] Add custom template support
- [ ] Add component migration tools
