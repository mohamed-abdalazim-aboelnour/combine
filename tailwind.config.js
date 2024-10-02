/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "er-input-border": "#D6D8DE",
        "er-label": "#1A1A1A",
        "er-gray-light": "#999999",
        "er-primary-light": "#0065A9",
        "er-disabled": "#F2F3F5",
        "er-main-background": "#F7F7F8",
        "er-label-background": "#E7F0F5",
        "er-gradient-1": "#0A5B98",
        "er-gradient-2": "#111F53",
        "er-blue-light": "#E6F4FA",
        "er-gray-dark": "#626262",
        "er-placeholder": "#A4A8AC",
        "er-status-light-blue": "#5796FF",
        "er-status-green": "#2BA262",
        "er-status-red": "#D13B3B",
        "er-status-blue": "#B057FF",
        "er-success": "#2BA279",
        "er-warning": "#ED831A",
        "er-background-placeholder": "#ECF4FA",
        "er-legend": "#707070",
        "er-black": "#494949",
        "er-bg-success": "#2BA26226",
        "er-bg-error": "#D13B3B26",
        "er-bg-purple": "#B057FF26",
        "er-bg-card-background": "#F5F8F9"
      },
      boxShadow: {
        "er-shadow": "0px 0px 4px #E5E5E5",
      },
    },
  },
  plugins: [],
};
