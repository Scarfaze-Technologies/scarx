# ScarX CSS Framework

**A modern, scalable, developer-friendly CSS framework.**  
By [Scarfaze](https://scarfaze.com) | Developer: Zawiyar Awan

---

## 🚀 Quick Start

### CDN (Coming Soon)
```html
<link rel="stylesheet" href="https://cdn.scarfaze.com/scarx/1.0.0/scar.min.css">
<script src="https://cdn.scarfaze.com/scarx/1.0.0/scar.js"></script>
```

### NPM
```bash
npm install scarx
```

### Manual Download
1. Clone the repository
2. Include `dist/scar.css` and `js/scar.js` in your HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="dist/scar.css">
    <title>My ScarX App</title>
</head>
<body>
    <!-- Your content here -->
    <script src="js/scar.js"></script>
</body>
</html>
```

---

## 🧩 Core Concept: 3 Layers

ScarX has **3 core layers** that work together:

| Layer | Attribute | Purpose |
|-------|-----------|---------|
| **class** | `class=""` | Default component styling |
| **ui** | `ui=""` | Utility-based customization |
| **ctx** | `ctx` | Parent → child auto-styling |

---

## 🟦 Layer 1: Components (class)

```html
<button class="btn-primary">Click Me</button>
<div class="card-modern">Content</div>
<nav class="navbar-dark">Navigation</nav>
```

### Available Components
- **Buttons**: `.btn`, `.btn-primary`, `.btn-outline`, `.btn-ghost`, `.btn-gradient`
- **Cards**: `.card`, `.card-modern`, `.card-glass`, `.card-flat`, `.card-hover`
- **Navbar**: `.navbar`, `.navbar-modern`, `.navbar-dark`, `.navbar-glass`
- **Modal**: `.modal-overlay`, `.modal`, `.modal-header/body/footer`
- **Dropdown**: `.dropdown`, `.dropdown-menu`, `.dropdown-item`
- **Forms**: `.form-input`, `.form-select`, `.form-checkbox`, `.form-switch`
- **Tables**: `.table`, `.table-striped`, `.table-hover`, `.table-bordered`
- **Badges**: `.badge`, `.badge-primary`, `.badge-pill`
- **Alerts**: `.alert-success`, `.alert-danger`, `.alert-warning`
- **Tabs**: `.tabs`, `.tabs-item`, `.tabs-pills`
- **Accordion**: `.accordion`, `.accordion-item`, `.accordion-header`
- **Progress**: `.progress`, `.progress-bar`
- **Spinners**: `.spinner`, `.spinner-dots`, `.spinner-pulse`
- **Hero**: `.hero`, `.hero-dark`, `.hero-gradient`
- **Footer**: `.footer`, `.footer-dark`, `.footer-modern`
- **Layout**: `.container`, `.row`, `.col`, `.col-{1-12}`

---

## 🟨 Layer 2: Utilities (ui)

Override and customize using the `ui` attribute:

```html
<div class="card" ui="p-3 w-300 shadow-lg bg-primary-soft rounded-xl">
    <h2 ui="text-lg font-bold">Title</h2>
    <p ui="text-sm text-muted">Description</p>
</div>
```

### Available Utilities
- **Spacing**: `p-{0-8}`, `m-{0-8}`, `px-{n}`, `py-{n}`, `mx-auto`
- **Sizes**: `w-{px}`, `w-full`, `h-{px}`, `h-screen`, `max-w-lg`
- **Text**: `text-{xs-4xl}`, `font-bold`, `text-center`, `text-uppercase`
- **Display**: `d-flex`, `d-grid`, `flex-col`, `justify-between`, `items-center`, `gap-{n}`
- **Colors**: `bg-{color}`, `text-{color}`, `bg-{color}-soft`, `bg-gradient-{name}`
- **Shadows**: `shadow-{sm-xl}`, `shadow-{color}`, `glow-{color}`
- **Borders**: `border`, `rounded-{size}`, `border-{color}`
- **Position**: `pos-sticky`, `pos-absolute`, `z-{n}`, `overflow-hidden`
- **Misc**: `opacity-{n}`, `transition`, `cursor-pointer`, `sr-only`
- **Responsive**: `sm:d-flex`, `md:grid-cols-3`, `lg:text-xl`

---

## 🟥 Layer 3: Context (ctx)

Add `ctx` attribute to parent — children auto-style:

```html
<nav class="navbar-dark" ctx>
    <a href="#">Brand</a>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
    </ul>
</nav>
```

No extra classes needed on `ul`, `li`, or `a` — they style automatically!

### Context-enabled Components
- **navbar** / **navbar-dark** / **navbar-modern** — auto-styles `ul > li > a`
- **card** / **card-modern** — auto-styles `img`, headings, `p`, `a`
- **form** (or `form-group`) — auto-styles labels, inputs, selects, textareas
- **footer** / **footer-dark** — auto-styles lists, links, headings
- **hero** / **hero-dark** — auto-styles `h1`, `p`, buttons

---

## ⚡ JavaScript Features

ScarX JS auto-initializes. No setup needed.

### Modals
```html
<button data-scar-modal="myModal">Open Modal</button>

<div class="modal-overlay" id="myModal">
    <div class="modal">
        <div class="modal-header">
            <h3>Title</h3>
            <button class="modal-close">✕</button>
        </div>
        <div class="modal-body">Content</div>
    </div>
</div>
```

### Dropdowns
```html
<div class="dropdown">
    <button class="btn-primary dropdown-toggle">Menu</button>
    <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Item 1</a>
        <a class="dropdown-item" href="#">Item 2</a>
    </div>
</div>
```

### Theme Toggle
```html
<button data-scar-theme-toggle>🌙 Toggle Theme</button>
```

### Tabs
```html
<div class="tabs">
    <button class="tabs-item active" data-scar-tab="tab1">Tab 1</button>
    <button class="tabs-item" data-scar-tab="tab2">Tab 2</button>
</div>
<div class="tabs-content">
    <div class="tabs-pane active" id="tab1">Content 1</div>
    <div class="tabs-pane" id="tab2">Content 2</div>
</div>
```

### Accordion
```html
<div class="accordion">
    <div class="accordion-item">
        <button class="accordion-header">Question 1</button>
        <div class="accordion-body">
            <div class="accordion-content">Answer 1</div>
        </div>
    </div>
</div>
```

---

## 🎨 Dark Mode

ScarX supports dark mode automatically:

```html
<!-- Via toggle button -->
<button data-scar-theme-toggle>Toggle</button>

<!-- Or manually -->
<html data-theme="dark">
```

---

## 📱 Responsive Grid

```html
<div class="container">
    <div class="row">
        <div class="col-md-6 col-lg-4">Column</div>
        <div class="col-md-6 col-lg-4">Column</div>
        <div class="col-md-12 col-lg-4">Column</div>
    </div>
</div>
```

Or use `ui` grid:
```html
<div ui="grid-cols-1 md:grid-cols-3 gap-3">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

---

## 🛠 Customization

Override SCSS variables in `scss/base/_variables.scss`:

```scss
$scar-primary: #FF6B6B;
$scar-radius-md: 16px;
$scar-font-family: 'Poppins', sans-serif;
```

Then rebuild:
```bash
npm run build:all
```

---

## 📁 Project Structure

```
ScarX/
├── scss/
│   ├── base/          → Variables, reset, config, typography
│   ├── components/    → All 21 components
│   ├── utilities/     → ui attribute utilities
│   ├── context/       → ctx auto-styling
│   └── main.scss      → Entry point
├── dist/
│   ├── scar.css       → Compiled CSS
│   └── scar.min.css   → Minified CSS
├── js/
│   └── scar.js        → Interactive features
├── config/
│   └── scar.config.js → Reference config
└── package.json
```

---

## 📝 License

MIT License — Open Source by [Scarfaze](https://scarfaze.com)

**ScarX** — *"Default simple, customization powerful, code always clean."* 🚀
