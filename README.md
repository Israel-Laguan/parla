# Parla – Your Free, Extensible Text Editor Library

Parla is an open source, free alternative to those expensive, closed-source text editors. Built entirely in vanilla JavaScript, Parla is designed to be highly maintainable, easy to extend, and ready for the age of AI and accessibility.

![Polly the Parrot](./assets/polly.png)

*Meet Polly the Parrot – our cheerful mascot who reminds us that collaboration, creativity, and fun are at the heart of open source!*

---

## Why Parla?

In a world full of bloated, expensive text editors, Parla aims to empower developers by offering a lightweight, highly configurable, and extendable editor library. Parla is designed with:
- **Modularity & Extensibility:** Build on a robust core with plugins for annotations, custom elements, and more.
- **Accessibility:** Emphasis on keyboard shortcuts, clear UI, and responsive design.
- **Maintainability:** Written in plain, modern JavaScript for easy understanding and modification.
- **Performance:** Choose between a synchronous (lite) mode or an asynchronous (advanced) mode using Web Workers.
- **Open Source Philosophy:** A community-driven project that invites collaboration, ideas, and improvements.

## Call for Testing & Community Involvement

Hey everyone,  
Parla is now available on npm and is looking for enthusiastic testers and contributors to help shape the future of this library. If you're tired of paying for bloated, proprietary text editors, or if you simply appreciate clean, maintainable code written in vanilla JavaScript, then Parla is for you.

### Why Test Parla?
- **It’s Free & Open Source:** No hidden fees, no vendor lock-in—just pure, community-driven software.
- **Highly Configurable:** Adjust the toolbar, keybindings, themes, and more to suit your workflow.
- **Built for the Future:** Easily extendable to integrate with AI, accessibility tools, and modern frameworks.
- **Community First:** Your feedback will directly influence future features, from enhanced collaboration tools to next-gen plugin support.

### How to Get Involved:
- **Test It Out:** Install Parla via npm and integrate it into your project. Check out the examples in the `/examples` folder.
- **Report Issues & Suggest Features:** Visit our GitHub repository to file issues, suggest features, or even share your custom plugins.
- **Contribute:** Whether it’s documentation improvements, code contributions, or new ideas for plugins, every bit helps make Parla better.

---

## Installation

### Vanilla JS
```bash
npm install parla
```
Then, in your project:
```html
<script type="module">
  import { createEditor } from 'parla';
  const editor = createEditor({
    element: document.getElementById('editor-container'),
    mode: 'lite', // or 'advanced'
    buttons: ['bold', 'underline', 'italic', 'list'],
    iconStyle: 'unicode',
    i18n: { bold: 'Bold', underline: 'Underline' },
    customCSS: '/* Your custom CSS here */',
    initialValue: 'Start typing here...'
  });
</script>
```

### Web Component
```html
<script type="module" src="path/to/parla/web-component.js"></script>
<parla-editor mode="advanced"></parla-editor>
```

### React Integration
```jsx
import React, { useEffect, useRef } from 'react';
import { createEditor } from 'parla';

const EditorWrapper = ({ config }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const editor = createEditor({ element: containerRef.current, ...config });
  }, [config]);

  return <div ref={containerRef} />;
};

export default EditorWrapper;
```

---

## How Buttons Work

### Configuration
The toolbar is dynamically built from the `buttons` array provided in the configuration. Each button corresponds to a specific formatting action:
- **Buttons Array:** Lists actions like `'bold'`, `'underline'`, etc.
- **Icon Style:** Choose between `unicode`, `svg`, or a file path.
- **i18n:** Customize tooltips and labels.
- **Custom CSS:** Override default styles.

### Adding New Buttons & Functionality
1. **Add to the Configuration:**  
   Include your new button's name in the `buttons` array.
2. **Register a Plugin:**  
   Use the `registerPlugin` API to add the functionality for your button. The plugin can hook into events like `onParse` or `applyStyle` to modify the node tree.
3. **Custom Render Function:**  
   Optionally, provide a custom render function to dictate how the new button’s action affects the output HTML.

---

## Roadmap

- **Short Term (Next 1–3 Months):**
  - Stabilize core functionality and finalize UI components.
  - Improve accessibility features and keyboard shortcuts.
  - Gather community feedback on essential features.

- **Mid Term (3–6 Months):**
  - Introduce advanced mode enhancements with Web Workers.
  - Expand the plugin ecosystem with community-contributed modules.
  - Develop collaboration and real-time editing capabilities.

- **Long Term (6+ Months):**
  - Integrate AI-based enhancements (e.g., grammar checking, code suggestions).
  - Enhance mobile responsiveness and offline capabilities.
  - Continue to build out multi-language support and additional UI customizations.

---

## Versioning, Releases & Branching Strategy

- **Semantic Versioning:**  
  Use MAJOR.MINOR.PATCH to indicate breaking changes, new features, and bug fixes.
  
- **Release Process:**
  - Tag releases in Git.
  - Publish to npm.
  - Maintain a comprehensive changelog.

- **Branching Strategy:**
  - **Main:** Production-ready code.
  - **Develop:** Integration branch for new features.
  - **Feature Branches:** Branch off from `develop` (e.g., `feature/new-keybindings`).
  - **Release Branches:** Prepare new releases from `develop`.
  - **Hotfix Branches:** Urgent fixes from `main`, then merged back into `develop`.

---

## Code Style and Development Cycle

- **Code Style:**  
  - Enforced via ESLint and Prettier.
  - Follow functional programming principles (pure functions, immutability).
  - Use clear JSDoc annotations and consistent commit messages.

- **Development Cycle:**
  - Daily development on feature branches.
  - Pull requests for code reviews.
  - Continuous integration using GitHub Actions.
  - Automated testing with Jest, Playwright, and Testing Library.

---

## Contributing

Contributions are highly welcomed!  
Please check out our [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to report issues, submit pull requests, and improve documentation.

---

## License

Licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

*Join us on this journey to create an open, maintainable, and accessible text editor that empowers developers worldwide. We look forward to your feedback and contributions!*