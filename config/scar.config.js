/**
 * ScarX Configuration (Reference)
 * ================================
 * This file is a reference for configurable options.
 * To customize ScarX, override the SCSS variables in 
 * scss/base/_variables.scss before compiling.
 */

export default {
    // ---- Color Palette ----
    colors: {
        primary: "#6C5CE7",
        secondary: "#00CEC9",
        success: "#00B894",
        danger: "#FF6B6B",
        warning: "#FDCB6E",
        info: "#74B9FF",
        dark: "#2D3436",
        light: "#F5F6FA"
    },

    // ---- Spacing Scale ----
    spacing: {
        0: "0",
        1: "0.25rem",   // 4px
        2: "0.5rem",    // 8px
        3: "1rem",      // 16px
        4: "1.5rem",    // 24px
        5: "2rem",      // 32px
        6: "3rem",      // 48px
        7: "4rem",      // 64px
        8: "5rem"       // 80px
    },

    // ---- Border Radius ----
    radius: {
        none: "0",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
        full: "9999px"
    },

    // ---- Shadows ----
    shadows: {
        sm: "0 1px 3px rgba(0,0,0,0.08)",
        md: "0 4px 12px rgba(0,0,0,0.1)",
        lg: "0 8px 30px rgba(0,0,0,0.12)",
        xl: "0 16px 48px rgba(0,0,0,0.16)"
    },

    // ---- Breakpoints ----
    breakpoints: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px"
    },

    // ---- Typography ----
    typography: {
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        fontFamilyMono: "'JetBrains Mono', 'Fira Code', monospace",
        sizes: {
            xs: "0.75rem",
            sm: "0.875rem",
            base: "1rem",
            md: "1.125rem",
            lg: "1.25rem",
            xl: "1.5rem",
            "2xl": "2rem",
            "3xl": "2.5rem",
            "4xl": "3rem"
        }
    }
};
