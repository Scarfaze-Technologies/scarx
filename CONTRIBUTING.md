# Contributing to ScarX 🚀

Thank you for your interest in contributing to **ScarX CSS Framework**! We welcome all contributions, from bug reports and bug fixes to new components and features. 

This document provides guidelines and steps for contributing to the project.

---

## 🛠️ How to Contribute

### 1. Report a Bug 🐛
If you found an issue or a bug, please check the existing issues first to avoid duplicates. If it hasn't been reported, open a new **Bug Report** issue. 
- Provide as much detail as possible.
- Include OS/Browser information.
- Provide a CodePen, JSFiddle, or code snippet showing the issue.

### 2. Request a Feature 💡
Have an idea for a new component or utility? Check our **Feature Request** templates in the Issues tab. Provide a clear description and use case for the proposed feature.

### 3. Submit a Pull Request (PR) 🔄
If you want to contribute code, please follow these steps:

#### Step-by-Step Guide
1. **Fork the repository** to your own GitHub account.
2. **Clone the project** to your local machine:
   ```bash
   git clone https://github.com/Scarfaze-Technologies/scarx.git
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a branch** for your feature or bugfix:
   ```bash
   git checkout -b feature/awesome-new-component
   ```
   *(Use prefixes: `feature/`, `bugfix/`, `docs/`, `chore/`)*
5. **Make your changes**. Since ScarX is compiled using SCSS, make sure your changes are inside the `scss/` directory, **not** the `dist/` CSS files.
6. **Compile and test** your changes:
   ```bash
   npm run build:all
   ```
7. **Commit your changes**. Use clear and descriptive commit messages:
   ```bash
   git commit -m "feat: added new glowing button variants"
   ```
8. **Push to your fork**:
   ```bash
   git push origin feature/awesome-new-component
   ```
9. **Open a Pull Request** via GitHub against the `main` branch. Fill out the PR template completely.

---

## 🏗️ Architecture & SCSS Guidelines

ScarX is built on 3 core layers: **`class` (Components)**, **`ui` (Utilities)**, and **`ctx` (Context)**. Please adhere to this philosophy:

1. **Components (`scss/components/`)**: Use `_component-name.scss`. Keep SCSS specific to the component and its variants. Don't use heavy nesting.
2. **Utilities (`scss/utilities/`)**: All utilities **must** target the `ui` attribute, e.g., `[ui~="bg-primary"]`. Never create standalone utility classes like `.bg-primary`.
3. **Context (`scss/context/`)**: Parent styling should target the `ctx` attribute, e.g., `.navbar[ctx]`. Auto-style raw HTML elements (like `a`, `li`, `input`) inside the context.

### Formatting & Best Practices
- Indentation: **2 spaces**.
- Use the predefined ScarX SCSS variables (e.g., `var(--scar-primary)` or `$scar-primary`).
- Ensure dark mode compatibility (`[data-theme="dark"]`).
- Keep things responsive! Use provided mixins if necessary.

---

## 🤝 Community Behavior
By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please be respectful and supportive to all contributors.

**Thank you for helping make ScarX awesome!** ❤️
