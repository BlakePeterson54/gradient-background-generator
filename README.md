# Gradient Background Generator

Pick two colors, see the gradient update live, and copy the CSS string.

**Demo:** https://blakepeterson54.github.io/gradient-background-generator/

## What it does

- Renders a simple gradient background picker in the browser
- Updates the page background live as colors change
- Shows the current 'linear-gradient(...)' CSS in text form
- Includes a "Random" button (two random hex colors, never identical)
- Includes a "Reset" button to restore the initial colors/background
- Includes a "Copy CSS" button to copies the current background CSS value to the clipboard

## Tech

- HTML, CSS, vanilla JavaScript
- DOM querying, event listeners, and basic state management
- Uses 'getComputedStyle' to read the current background from CSS

## Why this exists

- Practice wiring up DOM events and UI state without a framework
- Extends a basic ZTM exercise into a small, finished demo

## License

MIT
