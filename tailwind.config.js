/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}", "./index.html"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      /* Color Configuration */
      colors: {
        // Primary Brand Colors
        primary: {
          green: "var(--primary-green)",
          'green-dark': "var(--primary-green-dark)",
          'green-darker': "var(--primary-green-darker)",
          'green-light': "var(--primary-green-light)"
        },
        // Background Colors
        background: {
          main: "var(--bg-main)",
          secondary: "var(--bg-secondary)",
          tertiary: "var(--bg-tertiary)",
          'light-green': "var(--bg-light-green)",
          'green-tint': "var(--bg-green-tint)",
          'green-accent': "var(--bg-green-accent)",
          overlay: "var(--bg-overlay)",
          gray: "var(--bg-gray)",
          'light-gray': "var(--bg-light-gray)",
          translucent: "var(--bg-translucent)"
        },
        // Text Colors
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
          quaternary: "var(--text-quaternary)",
          muted: "var(--text-muted)",
          light: "var(--text-light)",
          lighter: "var(--text-lighter)",
          gray: "var(--text-gray)",
          green: "var(--text-green)",
          'green-medium': "var(--text-green-medium)",
          'green-light': "var(--text-green-light)",
          'green-accent': "var(--text-green-accent)",
          white: "var(--text-white)",
          red: "var(--text-red)"
        },
        // Border Colors
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
          light: "var(--border-light)",
          gray: "var(--border-gray)",
          green: "var(--border-green)",
          'green-light': "var(--border-green-light)",
          'green-accent': "var(--border-green-accent)"
        },
        // Component-Specific Colors
        header: {
          background: "var(--header-bg)"
        },
        search: {
          background: "var(--search-bg)",
          border: "var(--search-border)",
          text: "var(--search-text)"
        },
        button: {
          'primary-bg': "var(--button-primary-bg)",
          'primary-text': "var(--button-primary-text)",
          'secondary-bg': "var(--button-secondary-bg)",
          'secondary-text': "var(--button-secondary-text)",
          'accent-bg': "var(--button-accent-bg)",
          'accent-text': "var(--button-accent-text)",
          'disabled-bg': "var(--button-disabled-bg)"
        },
        card: {
          background: "var(--card-bg)",
          border: "var(--card-border)"
        },
        input: {
          background: "var(--input-bg)",
          border: "var(--input-border)",
          text: "var(--input-text)"
        },
        radio: {
          background: "var(--radio-bg)",
          border: "var(--radio-border)",
          'border-active': "var(--radio-border-active)",
          text: "var(--radio-text)"
        },
        footer: {
          background: "var(--footer-bg)",
          border: "var(--footer-border)"
        },
        icon: {
          'button-bg': "var(--icon-button-bg)",
          'button-border': "var(--icon-button-border)"
        }
      },
      /* Typography Configuration */
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'md': 'var(--font-size-md)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)'
      },
      fontWeight: {
        'normal': 'var(--font-weight-normal)',
        'medium': 'var(--font-weight-medium)',
        'semibold': 'var(--font-weight-semibold)',
        'bold': 'var(--font-weight-bold)'
      },
      lineHeight: {
        'xs': 'var(--line-height-xs)',
        'sm': 'var(--line-height-sm)',
        'base': 'var(--line-height-base)',
        'md': 'var(--line-height-md)',
        'lg': 'var(--line-height-lg)',
        'xl': 'var(--line-height-xl)',
        '2xl': 'var(--line-height-2xl)',
        '3xl': 'var(--line-height-3xl)',
        '4xl': 'var(--line-height-4xl)',
        '5xl': 'var(--line-height-5xl)',
        '6xl': 'var(--line-height-6xl)',
        '7xl': 'var(--line-height-7xl)',
        '8xl': 'var(--line-height-8xl)'
      },
      letterSpacing: {
        'wide': 'var(--letter-spacing-wide)'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'newsreader': ['Newsreader', 'serif'],
        'outfit': ['Outfit', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'segoe': ['Segoe UI', 'sans-serif']
      },
      /* Spacing Configuration */
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
        '5xl': 'var(--spacing-5xl)',
        '6xl': 'var(--spacing-6xl)',
        '7xl': 'var(--spacing-7xl)',
        '8xl': 'var(--spacing-8xl)',
        '9xl': 'var(--spacing-9xl)',
        '10xl': 'var(--spacing-10xl)',
        '11xl': 'var(--spacing-11xl)'
      },
      gap: {
        'xs': 'var(--gap-xs)',
        'sm': 'var(--gap-sm)',
        'md': 'var(--gap-md)',
        'lg': 'var(--gap-lg)',
        'xl': 'var(--gap-xl)',
        '2xl': 'var(--gap-2xl)',
        '3xl': 'var(--gap-3xl)',
        '4xl': 'var(--gap-4xl)',
        '5xl': 'var(--gap-5xl)',
        '6xl': 'var(--gap-6xl)',
        '7xl': 'var(--gap-7xl)',
        '8xl': 'var(--gap-8xl)',
        '9xl': 'var(--gap-9xl)',
        '10xl': 'var(--gap-10xl)',
        '11xl': 'var(--gap-11xl)',
        '12xl': 'var(--gap-12xl)'
      },
      /* Border Configuration */
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        '4xl': 'var(--radius-4xl)'
      },
      borderWidth: {
        'DEFAULT': 'var(--border-width-default)'
      }
    }
  },
  plugins: []
};